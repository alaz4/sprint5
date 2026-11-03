import { Link } from "react-router-dom";

interface EventCardProps {
  event: any;
}

function EventCard({ event }: EventCardProps) {
  return (
    <div className="etkinlik-karti">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p><strong>Tarih:</strong> {event.date}</p>
      <p><strong>Konum:</strong> {event.location}</p>
      <p><strong>Kategori:</strong> {event.category}</p>
      <Link to={`/events/${event.id}`} className="buton">
        Detayları Gör
      </Link>
    </div>
  );
}

export default EventCard;