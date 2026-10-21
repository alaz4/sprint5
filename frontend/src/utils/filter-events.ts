import type { CampusEvent } from "../types/campus-event";

// 1. Başlık veya açıklamada metin arayan saf fonksiyon
export function searchEvents(
  list: CampusEvent[],
  text: string
): CampusEvent[] {
  const q = text.trim().toLocaleLowerCase("tr-TR");
  if (!q) return list;

  return list.filter((e) => {
    const titleMatch = e.title.toLocaleLowerCase("tr-TR").includes(q);
    const descMatch = e.description.toLocaleLowerCase("tr-TR").includes(q);
    return titleMatch || descMatch;
  });
}

// 2. Kategoriye göre filtreleyen saf fonksiyon (Category tipi yerine string esnekliği)
export function filterByCategory(
  list: CampusEvent[],
  category: string
): CampusEvent[] {
  if (!category || category === "Tümü") return list;
  return list.filter((e) => e.category === category);
}

// 3. ID ile tek etkinlik bulan saf fonksiyon
export function findEventById(
  list: CampusEvent[],
  id: string
): CampusEvent | undefined {
  return list.find((e) => e.id === id);
}