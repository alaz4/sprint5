import { useState } from "react";
import type { CampusEvent } from "./types/campus-event";
import type { PageName } from "./types/page";

import Header from "./components/layout/header";
import Navigation from "./components/layout/navigation";
import Footer from "./components/layout/footer";

import EventFilter from "./components/events/eventFilter";
import EventList from "./components/events/eventList";
import EventDetail from "./components/events/eventDetail";
import EventForm from "./components/forms/eventForm";

const INITIAL_EVENTS: CampusEvent[] = [
  {
    id: "1",
    title: "Yapay Zeka ve Gelecek Konferansı",
    date: "25-10-2026",
    time: "14:00",
    location: "Mühendislik Amfisi",
    category: "Akademik" as any,
    capacity: 150,
    description: "Yapay zeka teknolojilerinin gelecekteki rolleri ve kariyer fırsatları konuşulacak.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
  },
  {
    id: "2",
    title: "Sonbahar Müzik Festivali",
    date: "30-10-2026",
    time: "18:30",
    location: "Kampüs Meydanı",
    category: "Kültür / Sanat" as any,
    capacity: 500,
    description: "Öğrenci gruplarının canlı performansları ve müzik dolu bir akşam.",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea"
  },
  {
    id: "3",
    title: "Basketbol Turnuvası Finali",
    date: "02-11-2026",
    time: "16:00",
    location: "Kapalı Spor Salonu",
    category: "Spor" as any,
    capacity: 300,
    description: "Fakülteler arası basketbol turnuvasının şampiyonluk maçı.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc"
  }
];

function App() {
  const [events] = useState<CampusEvent[]>(INITIAL_EVENTS);
  const [page, setPage] = useState<PageName>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Tümü");

  const go = (targetPage: PageName, id: string | null = null) => {
    setPage(targetPage);
    setSelectedId(id);
  };

  const upcoming = events.slice(0, 2);
  const filteredEvents = events.filter(
    (e) =>
      (e.title.toLowerCase().includes(searchText.toLowerCase()) ||
        e.description.toLowerCase().includes(searchText.toLowerCase())) &&
      (selectedCategory === "Tümü" || e.category === selectedCategory)
  );
  const selectedEvent = events.find((e) => e.id === selectedId);

  return (
    <div className="app-container">
      <Header title="🎓 Kampüs Etkinlikleri" text="Üniversitemizdeki tüm etkinlikler tek bir platformda!" />
      <Navigation current={page} onNavigate={(nextPage) => go(nextPage)} />

      <main className="ana-icerik">
        {page === "home" && (
          <section className="sayfa-section">
            <h2>Öne Çıkan Etkinlikler</h2>
            <EventList events={upcoming} onShowDetail={(id) => go("detail", id)} />
          </section>
        )}

        {page === "events" && (
          <section className="sayfa-section">
            <h2>Tüm Etkinlikler</h2>
            <EventFilter
              searchText={searchText}
              selectedCategory={selectedCategory}
              onSearchChange={setSearchText}
              onCategoryChange={setSelectedCategory}
            />
            <EventList
              events={filteredEvents}
              onShowDetail={(id) => go("detail", id)}
              emptyText="Arama kriterlerinize uygun etkinlik bulunamadı."
            />
          </section>
        )}

        {page === "detail" && (
          <section className="sayfa-section">
            {selectedEvent ? (
              <EventDetail event={selectedEvent} onBack={() => go("events")} onEdit={(id) => go("update", id)} />
            ) : (
              <p>Etkinlik bulunamadı.</p>
            )}
          </section>
        )}

        {(page === "add" || page === "update") && (
          <section className="sayfa-section">
            <h2>{page === "add" ? "Yeni Etkinlik Ekle" : "Etkinlik Güncelle"}</h2>
            <EventForm
              title={page === "add" ? "Formu doldurarak yeni etkinlik oluşturabilirsiniz." : "Etkinlik bilgilerini güncelleyebilirsiniz."}
              onSubmit={() => window.scrollTo(0, 0)}
            />
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;