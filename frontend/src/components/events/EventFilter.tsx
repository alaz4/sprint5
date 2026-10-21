interface EventFilterProps {
  searchText: string;
  selectedCategory: string;
  onSearchChange: (text: string) => void;
  onCategoryChange: (category: string) => void;
}

function EventFilter({
  searchText,
  selectedCategory,
  onSearchChange,
  onCategoryChange
}: EventFilterProps) {
  return (
    <div className="filtre-alani" style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Etkinlik ara..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ padding: "8px", marginRight: "10px", width: "200px" }}
      />
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        style={{ padding: "8px" }}
      >
        <option value="Tümü">Tüm Kategoriler</option>
        <option value="Akademik">Akademik</option>
        <option value="Kültür / Sanat">Kültür / Sanat</option>
        <option value="Spor">Spor</option>
      </select>
    </div>
  );
}

export default EventFilter;