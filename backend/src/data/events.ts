export interface EventItem {
  id: string;
  title: string;
  category: string;
  capacity: number;
  date: string;
  time: string;
  location: string;
  description: string;
}

export let events: EventItem[] = [
  {
    id: "event-1",
    title: "Algoritma ve Problem Çözme Yarışması",
    category: "Yarışma",
    capacity: 100,
    date: "2026-11-05",
    time: "10:00",
    location: "Bilgisayar Mühendisliği Katı",
    description: "Ödüllü 24 saatlik hackathon ve kodlama maratonu."
  },
  {
    id: "event-2",
    title: "Kariyer Günleri 2026",
    category: "Seminer",
    capacity: 250,
    date: "2026-12-10",
    time: "14:00",
    location: "A Blok Konferans Salonu",
    description: "Mezunlarla söyleşiler ve sektör temsilcileriyle kariyer tavsiyeleri."
  },
  {
    id: "event-3",
    title: "Yapay Zeka ve Gelecek Atölyesi",
    category: "Atölye",
    capacity: 50,
    date: "2026-11-20",
    time: "13:30",
    location: "Lab 3 - Mühendislik Fakültesi",
    description: "Üretken yapay zeka modelleri ve LLM geliştirmeye giriş workshopu."
  },
  {
    id: "event-4",
    title: "Güz Dönemi Müzik Festivali",
    category: "Konser",
    capacity: 500,
    date: "2026-11-28",
    time: "18:00",
    location: "Kampüs Çim Amfi",
    description: "Öğrenci grupları ve konuk sanatçıların yer alacağı açık hava konseri."
  },
  {
    id: "event-5",
    title: "Mobil Uygulama Geliştirme Bootcamp",
    category: "Atölye",
    capacity: 40,
    date: "2026-12-01",
    time: "09:30",
    location: "İnovasyon Merkezi",
    description: "React Native ve Flutter ile sıfırdan mobil uygulama oluşturma eğitimi."
  },
  {
    id: "event-6",
    title: "E-Spor Turnuvası Finalleri",
    category: "Yarışma",
    capacity: 150,
    date: "2026-12-15",
    time: "15:00",
    location: "Öğrenci Merkezi Salon 2",
    description: "Kampüs içi VALORANT ve League of Legends turnuvasının büyük finali."
  }
];