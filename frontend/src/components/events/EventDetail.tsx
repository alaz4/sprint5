import { Link } from "react-router-dom";

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

interface EventDetailProps {
  event: CampusEvent;
}

function EventDetail({ event }: EventDetailProps) {
  return (
    <div className="etkinlik-detay">
      <p><strong>Açıklama:</strong> {event.description}</p>
      <p><strong>Tarih:</strong> {event.date}</p>
      <p><strong>Konum:</strong> {event.location}</p>
      <p><strong>Kategori:</strong> {event.category}</p>
      {event.capacity !== undefined && <p><strong>Kontenjan:</strong> {event.capacity}</p>}
      {event.registeredCount !== undefined && <p><strong>Kayıtlı Kişi:</strong> {event.registeredCount}</p>}

      <div className="buton-grubu" style={{ marginTop: "1rem", display: "flex", gap: "10px" }}>
        <Link to="/events" className="buton">
          Listeye Dön
        </Link>
        <Link to={`/admin/${event.id}/edit`} className="buton">
          Güncelle
        </Link>
      </div>
    </div>
  );
}

export default EventDetail;