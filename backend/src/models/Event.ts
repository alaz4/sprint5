import mongoose, { Schema, Document } from 'mongoose';
import { formatDate, parseDate } from '../utils/date';

export const KATEGORILER = ['Atölye', 'Seminer', 'Kültür', 'Yarışma', 'Spor'] as const;

export interface IEvent extends Document {
  title: string;
  category: string;
  date: Date;
  location: string;
  description: string;
  capacity?: number;
}

const eventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      trim: true,
      enum: KATEGORILER,
    },
    date: {
      type: Date,
      required: true,
      set: parseDate,
      get: formatDate,
    },
    location: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    capacity: { type: Number, min: 1, default: 100 },
  },
  {
    timestamps: true,
    id: false,
    toJSON: {
      getters: true,
      transform: (_doc, ret: any) => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

export const Event = mongoose.model<IEvent>('Event', eventSchema);