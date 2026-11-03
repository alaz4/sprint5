import { useState, ChangeEvent, FormEvent } from "react";
import { validateEvent, type EventFormErrors, type EventFormData } from "../../utils/validate-event";

interface EventFormProps {
  initialData?: EventFormData;
  onSubmit: (formData: EventFormData) => void;
  submitText?: string;
}

const defaultFormData: EventFormData = {
  title: "",
  description: "",
  date: "",
  location: "",
  category: "",
  capacity: "",
};

const categories = ["Atölye", "Seminer", "Konferans", "Spor", "Müzik", "Diğer"];

function EventForm({
  initialData = defaultFormData,
  onSubmit,
  submitText = "Kaydet",
}: EventFormProps) {
  const [data, setData] = useState<EventFormData>(initialData);
  const [errors, setErrors] = useState<EventFormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name as keyof EventFormErrors]) {
      setErrors({
        ...errors,
        [e.target.name]: undefined,
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const foundErrors = validateEvent(data);
    setErrors(foundErrors);

    if (Object.keys(foundErrors).length === 0) {
      onSubmit(data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "500px" }}
    >
      <div>
        <label htmlFor="title">Başlık:</label>
        <input
          id="title"
          name="title"
          type="text"
          value={data.title}
          onChange={handleChange}
          aria-invalid={errors.title ? true : undefined}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
        {errors.title && <span className="hata-metni" style={{ color: "red", fontSize: "0.85rem" }}>{errors.title}</span>}
      </div>

      <div>
        <label htmlFor="description">Açıklama:</label>
        <textarea
          id="description"
          name="description"
          value={data.description}
          onChange={handleChange}
          aria-invalid={errors.description ? true : undefined}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
        {errors.description && <span className="hata-metni" style={{ color: "red", fontSize: "0.85rem" }}>{errors.description}</span>}
      </div>

      <div>
        <label htmlFor="date">Tarih:</label>
        <input
          id="date"
          name="date"
          type="date"
          value={data.date}
          onChange={handleChange}
          aria-invalid={errors.date ? true : undefined}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
        {errors.date && <span className="hata-metni" style={{ color: "red", fontSize: "0.85rem" }}>{errors.date}</span>}
      </div>

      <div>
        <label htmlFor="location">Konum:</label>
        <input
          id="location"
          name="location"
          type="text"
          value={data.location}
          onChange={handleChange}
          aria-invalid={errors.location ? true : undefined}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
        {errors.location && <span className="hata-metni" style={{ color: "red", fontSize: "0.85rem" }}>{errors.location}</span>}
      </div>

      <div>
        <label htmlFor="category">Kategori:</label>
        <select
          id="category"
          name="category"
          value={data.category}
          onChange={handleChange}
          aria-invalid={errors.category ? true : undefined}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        >
          <option value="">Kategori Seçin</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.category && <span className="hata-metni" style={{ color: "red", fontSize: "0.85rem" }}>{errors.category}</span>}
      </div>

      <div>
        <label htmlFor="capacity">Kontenjan:</label>
        <input
          id="capacity"
          name="capacity"
          type="number"
          value={data.capacity}
          onChange={handleChange}
          aria-invalid={errors.capacity ? true : undefined}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
        {errors.capacity && <span className="hata-metni" style={{ color: "red", fontSize: "0.85rem" }}>{errors.capacity}</span>}
      </div>

      <button type="submit" className="buton" style={{ marginTop: "1rem" }}>
        {submitText}
      </button>
    </form>
  );
}

export default EventForm;