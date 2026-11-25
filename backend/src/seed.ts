import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Event } from './models/Event';

dotenv.config();

const initialEvents = [
  {
    title: 'Web Geliştirme ve REST API Atölyesi',
    category: 'Atölye',
    date: '15-10-2026', // Geçmiş tarih 1
    location: 'Mühendislik Fakültesi B-204',
    description: 'Node.js, Express ve MongoDB ile uçtan uca modern API geliştirme pratiği.'
  },
  {
    title: 'Yapay Zeka ve Veri Bilimi Zirvesi',
    category: 'Seminer',
    date: '01-12-2026', // Gelecek tarih 1
    location: 'Merkez Konferans Salonu',
    description: 'Sektör uzmanlarıyla üretken yapay zeka modelleri ve kariyer fırsatları.'
  },
  {
    title: 'Kampüs Akustik Müzik Gecesi',
    category: 'Kültür',
    date: '05-11-2026', // Geçmiş tarih 2
    location: 'Açık Hava Amfi Tiyatro',
    description: 'Üniversite müzik topluluklarının canlı performansları.'
  },
  {
    title: 'Git ve Açık Kaynak Katkı Eğitimi',
    category: 'Atölye',
    date: '03-12-2026', // Gelecek tarih 2
    location: 'Bilgisayar Lab-3',
    description: 'Takım çalışmasında versiyon kontrolü, branch yönetimi ve pull request süreçleri.'
  },
  {
    title: 'Girişimcilik ve Startup Maratonu',
    category: 'Yarışma',
    date: '15-12-2026', // Gelecek tarih 3
    location: 'Teknokent Kuluçka Merkezi',
    description: '48 saatte fikirden prototipe proje geliştirme ve yatırımcı sunumu.'
  },
  {
    title: 'Bahar Dönemi Satranç Turnuvası',
    category: 'Spor',
    date: '22-12-2026', // Gelecek tarih 4
    location: 'Öğrenci Yaşam Merkezi',
    description: 'Tüm fakültelerin katılımına açık ödüllü üniversite satranç turnuvası.'
  }
];

const seedDatabase = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('MONGODB_URI eksik!');

    await mongoose.connect(uri);
    await Event.deleteMany({});
    await Event.insertMany(initialEvents);

    console.log('6 etkinlik veritabanına başarıyla eklendi!');
    process.exit(0);
  } catch (error) {
    console.error('Seed hatası:', error);
    process.exit(1);
  }
};

seedDatabase();