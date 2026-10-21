import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventCardProps {
  event: CampusEvent;
  onShowDetail: (id: string) => void;
}

function EventCard({ event, onShowDetail }: EventCardProps) {
  return (
    <article className="kart">
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="kart-gorsel"
          style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px" }}
        />
      )}
      <h3>{event.title}</h3>
      <p className="kategori">🏷️ {event.category}</p>
      <p className="tarih">📅 {formatDate(event.date)} - {event.time}</p>
      <p className="mekan">📍 {event.location}</p>
      <p className="kontenjan">👥 Kontenjan: {event.capacity} kişi</p>
      <p className="aciklama">{event.description}</p>
      <button
        className="btn-detail"
        onClick={() => onShowDetail(event.id)}
        style={{ marginTop: "10px", cursor: "pointer" }}
      >
        Detayları Gör
      </button>
    </article>
  );
}

export default EventCard;