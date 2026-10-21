import type { CampusEvent } from "../../types/campus-event";
import EventCard from "./eventCard";

interface EventListProps {
  events: CampusEvent[];
  onShowDetail: (id: string) => void;
  emptyText?: string;
}

function EventList({
  events,
  onShowDetail,
  emptyText = "Henüz gösterilecek etkinlik bulunamadı."
}: EventListProps) {
  // Liste boşsa Erken Dönüş (Early Return) ile mesaj göster
  if (events.length === 0) {
    return <p className="sonuc" style={{ padding: "10px", color: "#666" }}>{emptyText}</p>;
  }

  return (
    <div className="etkinlik-listesi">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onShowDetail={onShowDetail}
        />
      ))}
    </div>
  );
}

export default EventList;