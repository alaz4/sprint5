import EventCard from "./EventCard";

interface EventListProps {
  events: any[];
}

function EventList({ events }: EventListProps) {
  if (events.length === 0) {
    return <p>Gösterilecek etkinlik bulunamadı.</p>;
  }

  return (
    <div className="etkinlik-listesi">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList;