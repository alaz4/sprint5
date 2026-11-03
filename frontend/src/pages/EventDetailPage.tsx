import { useParams, Link } from "react-router-dom";
import { useEvents } from "../context/EventsContext";

function EventDetailPage() {
  const { id } = useParams();
  const { events } = useEvents();

  const event = events.find((e: any) => e.id === id);

  if (!event) {
    return (
      <div style={{ padding: "1rem" }}>
        <h2>Sayfa Bulunamadı</h2>
        <p>Aradığınız etkinlik mevcut değil.</p>
        <Link to="/events" className="buton">Etkinliklere Dön</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2 className="bolum-baslik">{event.title}</h2>
      <div className="etkinlik-detay">
        <p><strong>Açıklama:</strong> {event.description}</p>
        <p><strong>Tarih:</strong> {event.date}</p>
        <p><strong>Konum:</strong> {event.location}</p>
        <p><strong>Kategori:</strong> {event.category}</p>
        {event.capacity !== undefined && <p><strong>Kontenjan:</strong> {event.capacity}</p>}

        <div style={{ marginTop: "1rem", display: "flex", gap: "10px" }}>
          <Link to="/events" className="buton">Listeye Dön</Link>
          <Link to={`/admin/${event.id}/edit`} className="buton">Güncelle</Link>
        </div>
      </div>
    </div>
  );
}

export default EventDetailPage;