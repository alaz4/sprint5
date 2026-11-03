import { useState } from "react";
import { useEvents } from "../context/EventsContext";
import EventList from "../components/events/EventList";

function EventsPage() {
  const { events } = useEvents();
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState<string>("");

  const categories = [...new Set(events.map((e: any) => e.category))];

  const filtered = events.filter((e: any) => {
    const matchesSearch =
      e.title.toLowerCase().includes(searchText.toLowerCase()) ||
      e.description.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = category ? e.category === category : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: "1rem" }}>
      <h2 className="bolum-baslik">Etkinlikler</h2>
      
      {/* Arama ve Filtreleme Alanı */}
      <div style={{ marginBottom: "1.5rem", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Etkinlik ara..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        >
          <option value="">Tüm Kategoriler</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <EventList events={filtered} />
    </div>
  );
}

export default EventsPage;