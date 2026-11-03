import { createContext, useContext, useState, ReactNode } from "react";
import { events as initialEvents } from "../data/events";

export interface CampusEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  capacity?: number;
  registeredCount?: number;
}

export type EventFormData = {
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  capacity: string;
};

interface EventsContextValue {
  events: CampusEvent[];
  addEvent: (data: EventFormData) => void;
  updateEvent: (id: string, data: EventFormData) => void;
  deleteEvent: (id: string) => void;
}

const EventsContext = createContext<EventsContextValue | null>(null);

// Form verisini CampusEvent tipine dönüştüren yardımcı fonksiyon
function toEvent(id: string, data: EventFormData): CampusEvent {
  return {
    id,
    title: data.title.trim(),
    description: data.description.trim(),
    date: data.date,
    location: data.location.trim(),
    category: data.category,
    capacity: Number(data.capacity) || 0,
    registeredCount: 0,
  };
}

export function EventsProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<CampusEvent[]>(initialEvents);

  // 1. Ekle (Dizinin sonuna ekler)
  const addEvent = (data: EventFormData) => {
    const newEvent = toEvent(`event-${Date.now()}`, data);
    setEvents((prev) => [...prev, newEvent]);
  };

  // 2. Güncelle (Map ile eşleşeni değiştirir)
  const updateEvent = (id: string, data: EventFormData) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? toEvent(id, data) : e))
    );
  };

  // 3. Sil (Filter ile eşleşmeyeni tutar)
  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <EventsContext.Provider value={{ events, addEvent, updateEvent, deleteEvent }}>
      {children}
    </EventsContext.Provider>
  );
}

export function useEvents() {
  const value = useContext(EventsContext);
  if (value === null) {
    throw new Error("useEvents bir EventsProvider içinde kullanılmalıdır!");
  }
  return value;
}