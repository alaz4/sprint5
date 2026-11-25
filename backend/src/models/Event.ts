import mongoose, { Schema, Document } from 'mongoose';
import { parseDate, formatDate } from '../utils/date';

export const KATEGORILER = [
  'Konferans',
  'Atölye',
  'Konser',
  'Seminer',
  'Kulüp',
  'Spor',
  'Kültür',
  'Yarışma',
] as const;

export interface IEvent extends Document {
  title: string;
  category: (typeof KATEGORILER)[number];
  date: Date;
  time?: string;
  location: string;
  description?: string;
  capacity?: number;
}

const eventSchema = new Schema<IEvent>(
  {
    title: {
      type: String,
      required: [true, 'Başlık zorunludur'],
      trim: true,
      minlength: [3, 'Başlık en az 3 karakter olmalıdır'],
    },
    category: {
      type: String,
      required: [true, 'Kategori zorunludur'],
      enum: {
        values: KATEGORILER,
        message: '{VALUE} geçerli bir kategori değil',
      },
    },
    date: {
      type: Date,
      required: [true, 'Tarih zorunludur'],
      set: (val: unknown) => {
        if (val instanceof Date) return val;
        if (typeof val === 'string') {
          const parsed = parseDate(val);
          if (!parsed) {
            throw new Error('Geçersiz tarih formatı. Beklenen: GG-AA-YYYY');
          }
          return parsed;
        }
        return val;
      },
    },
    time: {
      type: String,
      trim: true,
      default: '14:00',
    },
    location: {
      type: String,
      required: [true, 'Konum zorunludur'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
    capacity: {
      type: Number,
      min: [1, 'Kapasite en az 1 olmalıdır'],
      default: 50,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(_doc, ret: any) {
        ret.id = String(ret._id);
        if (ret.date instanceof Date) {
          ret.date = formatDate(ret.date);
        }
        delete ret.__v;
        return ret;
      },
    },
  }
);

export const Event = mongoose.model<IEvent>('Event', eventSchema);