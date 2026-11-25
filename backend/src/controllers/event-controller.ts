import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { Event } from '../models/Event';
import { todayStart } from '../utils/date';

const KORUNAN_ALANLAR = ['_id', 'createdAt', 'updatedAt', '__v'];

function notFound(res: Response) {
  return res.status(404).json({ error: { message: 'Event not found' } });
}

function handleValidationError(err: any, res: Response, next: NextFunction) {
  if (err?.name === 'ValidationError' || err?.name === 'CastError') {
    return res.status(400).json({ error: { message: err.message } });
  }
  return next(err);
}

export async function getEvents(req: Request, res: Response, next: NextFunction) {
  try {
    const { category, search } = req.query;
    const filter: any = {};

    if (category && typeof category === 'string') {
      filter.category = category;
    }

    if (search && typeof search === 'string') {
      const guvenli = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      filter.title = { $regex: guvenli, $options: 'i' };
    }

    const events = await Event.find(filter).sort({ date: 1, time: 1 });
    return res.json(events);
  } catch (err) {
    return next(err);
  }
}

export async function getUpcomingEvents(_req: Request, res: Response, next: NextFunction) {
  try {
    const events = await Event.find({ date: { $gte: todayStart() } }).sort({ date: 1, time: 1 });
    return res.json(events);
  } catch (err) {
    return next(err);
  }
}

export async function getEventById(req: Request, res: Response, next: NextFunction) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return notFound(res);
    const event = await Event.findById(req.params.id);
    if (!event) return notFound(res);
    return res.json(event);
  } catch (err) {
    return next(err);
  }
}

export async function createEvent(req: Request, res: Response, next: NextFunction) {
  try {
    const event = await Event.create(req.body);
    return res.status(201).json(event);
  } catch (err) {
    return handleValidationError(err, res, next);
  }
}

export async function updateEvent(req: Request, res: Response, next: NextFunction) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return notFound(res);
    const body = req.body ?? {};
    if (Object.keys(body).length === 0) {
      return res.status(400).json({ error: { message: 'Body is empty' } });
    }
    const korunan = Object.keys(body).filter((k) => KORUNAN_ALANLAR.includes(k));
    if (korunan.length > 0) {
      return res.status(400).json({ error: { message: `${korunan.join(', ')} cannot be changed` } });
    }
    const event = await Event.findByIdAndUpdate(req.params.id, body, {
      returnDocument: 'after',
      runValidators: true,
    });
    if (!event) return notFound(res);
    return res.json(event);
  } catch (err) {
    return handleValidationError(err, res, next);
  }
}

export async function deleteEvent(req: Request, res: Response, next: NextFunction) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return notFound(res);
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return notFound(res);
    return res.status(204).end();
  } catch (err) {
    return next(err);
  }
}