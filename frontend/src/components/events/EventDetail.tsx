import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventDetailProps {
  event: CampusEvent;
  onBack: () => void;
  onEdit: (id: string) => void;
}

function EventDetail({ event, onBack, onEdit }: EventDetailProps) {
  return (
    <div className="detay-kart">
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          style={{ width: "100%", maxHeight: "300px", objectFit: "cover", borderRadius: "8px", marginBottom: "15px" }}
        />
      )}
      <h2>{event.title}</h2>
      <p><strong>Kategori:</strong> {event.category}</p>
      <p><strong>Tarih & Saat:</strong> {formatDate(event.date)} - {event.time}</p>
      <p><strong>Mekan:</strong> {event.location}</p>
      <p><strong>Kontenjan:</strong> {event.capacity} Kişi</p>
      <p>{event.description}</p>
      
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button onClick={onBack} style={{ cursor: "pointer", padding: "8px 16px" }}>
          ← Listeye Dön
        </button>
        <button onClick={() => onEdit(event.id)} style={{ cursor: "pointer", padding: "8px 16px" }}>
          ✏️ Güncelle
        </button>
      </div>
    </div>
  );
}

export default EventDetail;