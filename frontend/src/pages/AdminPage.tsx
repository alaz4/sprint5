import { Link } from "react-router-dom";
import { useEvents } from "../context/EventsContext";

function AdminPage() {
  const { events, deleteEvent } = useEvents();

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`"${title}" silinsin mi?`)) {
      deleteEvent(id);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2 className="bolum-baslik">Etkinlik Yönetimi</h2>

      <div style={{ marginBottom: "1rem" }}>
        <Link to="/admin/new" className="buton">
          + Yeni Etkinlik
        </Link>
      </div>

      {events.length === 0 ? (
        <p>Henüz etkinlik yok.</p>
      ) : (
        <table className="tablo">
          <thead>
            <tr>
              <th>Etkinlik</th>
              <th>Tarih</th>
              <th>Kategori</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event: any) => (
              <tr key={event.id}>
                <td data-baslik="Etkinlik">{event.title}</td>
                <td data-baslik="Tarih">{event.date}</td>
                <td data-baslik="Kategori">{event.category}</td>
                <td className="islemler">
                  <Link to={`/admin/${event.id}/edit`} className="buton">
                    Düzenle
                  </Link>
                  <button
                    onClick={() => handleDelete(event.id, event.title)}
                    className="buton buton-sil"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminPage;