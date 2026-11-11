# Kampüs Etkinlik API

## Çalıştırma Komutları
- Geliştirme modu: `npm run dev`
- Kurulum: `npm install`

## Ortam Değişkenleri
- `PORT`: Sunucunun çalışacağı port (Varsayılan: 3000)

## REST Sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
| --- | --- | --- | --- | --- | --- |
| GET | /health | Sağlık kontrolü | 200 | — | Bu sprint |
| GET | /events | Listeyi getir | 200 | — | Bu sprint |
| GET | /events/:id | Tek etkinlik | 200 | 404 | Bu sprint |
| POST | /events | Yeni etkinlik | 201 | 400 | Bu sprint |
| PATCH | /events/:id | Güncelle | 200 | 400, 404 | Sprint 9 |
| DELETE | /events/:id | Sil | 204 | 404 | Sprint 9 |

### Hata Formatı
```json
{
  "error": {
    "message": "Hata açıklaması"
  }
}