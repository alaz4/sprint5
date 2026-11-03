export type EventFormData = {
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  capacity: string;
};

export type EventFormErrors = {
  title?: string;
  category?: string;
  date?: string;
  location?: string;
  capacity?: string;
  description?: string;
};

export function validateEvent(data: EventFormData): EventFormErrors {
  const errors: EventFormErrors = {};

  if (!data.title || data.title.trim().length < 3) {
    errors.title = "En az 3 karakter olmalı.";
  }

  if (!data.category || data.category === "") {
    errors.category = "Bir kategori seçin.";
  }

  if (!data.date || data.date.trim() === "") {
    errors.date = "Tarih alanı boş olamaz.";
  }

  if (!data.location || data.location.trim() === "") {
    errors.location = "Konum alanı boş olamaz.";
  }

  const capacity = Number(data.capacity);
  if (!Number.isInteger(capacity) || capacity < 1 || capacity > 1000) {
    errors.capacity = "1 ile 1000 arası tam sayı olmalı.";
  }

  if (!data.description || data.description.trim().length < 10) {
    errors.description = "Açıklama en az 10 karakter olmalı.";
  }

  return errors;
}