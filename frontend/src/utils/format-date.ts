export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const parts = dateStr.split("-");
  if (parts.length === 3) {
    const day = parts[0];
    const month = Number(parts[1]) - 1;
    const year = parts[2];
    const d = new Date(Number(year), month, Number(day));
    return d.toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }
  return dateStr;
}