import { useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import EventForm from "../components/forms/EventForm";

const emptyForm = {
  title: "",
  description: "",
  date: "",
  location: "",
  category: "",
  capacity: "",
};

function AddEventPage() {
  const { addEvent } = useEvents();
  const navigate = useNavigate();

  const handleSubmit = (formData: any) => {
    addEvent(formData);
    navigate("/admin");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2 className="bolum-baslik">Yeni Etkinlik Ekle</h2>
      <EventForm
        initialData={emptyForm}
        submitText="Kaydet"
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default AddEventPage;