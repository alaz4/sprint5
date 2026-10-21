interface EventFormProps {
  onSubmit: () => void;
  title?: string;
}

function EventForm({ onSubmit, title }: EventFormProps) {
  return (
    <>
      {title && <p className="form-aciklama">{title}</p>}
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "500px" }}
      >
        <div>
          <label style={{ display: "block", marginBottom: "4px" }}>Etkinlik Adı:</label>
          <input type="text" placeholder="Örn: Müzik Festivali" style={{ width: "100%", padding: "8px" }} />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "4px" }}>Kategori:</label>
          <select style={{ width: "100%", padding: "8px" }}>
            <option value="Akademik">Akademik</option>
            <option value="Kültür / Sanat">Kültür / Sanat</option>
            <option value="Spor">Spor</option>
          </select>
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "4px" }}>Tarih:</label>
          <input type="date" style={{ width: "100%", padding: "8px" }} />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "4px" }}>Saat:</label>
          <input type="time" style={{ width: "100%", padding: "8px" }} />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "4px" }}>Mekan:</label>
          <input type="text" placeholder="Örn: Amfi 1" style={{ width: "100%", padding: "8px" }} />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "4px" }}>Açıklama:</label>
          <textarea rows={4} placeholder="Etkinlik detayları..." style={{ width: "100%", padding: "8px" }}></textarea>
        </div>

        <button type="submit" style={{ padding: "10px", cursor: "pointer", marginTop: "10px" }}>
          Kaydet
        </button>
      </form>
    </>
  );
}

export default EventForm;