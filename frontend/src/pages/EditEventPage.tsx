import { useParams, useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import EventForm from "../components/forms/EventForm";
import NotFoundPage from "./NotFoundPage";

function EditEventPage() {
  const { id } = useParams();
  const { events, updateEvent } = useEvents();
  const navigate = useNavigate();

  const event = events.find((e: any) => e.id === id);

  if (!event) return <NotFoundPage />;

  const initialData = {
    title: event.title,
    description: event.description,
    date: event.date,
    location: event.location,
    category: event.category,
    capacity: String(event.capacity ?? ""),
  };

  const handleSubmit = (formData: any) => {
    updateEvent(event.id, formData);
    navigate("/admin");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2 className="bolum-baslik">Etkinliği Düzenle</h2>
      <EventForm
        initialData={initialData}
        submitText="Güncelle"
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default EditEventPage;