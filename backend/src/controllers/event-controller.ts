import { Request, Response } from 'express';
import { events, EventItem } from '../data/events.js';

// GET /events (?category=Atölye isteğe bağlı)
export const getEvents = (req: Request, res: Response) => {
  const { category } = req.query;

  const list = category
    ? events.filter((e) => e.category === category)
    : events;

  res.json(list);
};

// GET /events/:id
export const getEventById = (req: Request, res: Response) => {
  const event = events.find((e) => e.id === req.params.id);

  if (!event) {
    return res.status(404).json({ error: { message: "Event not found" } });
  }

  res.json(event);
};

// POST /events
export const createEvent = (req: Request, res: Response) => {
  const { title, category, capacity, date, time, location, description } = req.body ?? {};

  // Zorunlu alan kontrolü (title, category, date)
  if (!title || !category || !date) {
    return res.status(400).json({
      error: { message: "title, category and date are required" }
    });
  }

  const newEvent: EventItem = {
    id: `event-${Date.now()}`,
    title,
    category,
    date,
    capacity: Number(capacity) || 0,
    time: time ?? "",
    location: location ?? "",
    description: description ?? ""
  };

  events.push(newEvent);
  res.status(201).json(newEvent);
};