Method,Endpoint,Açıklama,Durum
GET,/health,Sunucu durum kontrolü,çalışıyor
GET,/events,Tüm etkinlikleri listeler (?search= ve ?category= destekler),çalışıyor
GET,/events/upcoming,Bugün ve sonrası yaklaşan etkinlikleri listeler,çalışıyor
GET,/events/:id,Tek bir etkinliğin detayını getirir,çalışıyor
POST,/events,Yeni etkinlik oluşturur,çalışıyor
PATCH,/events/:id,Etkinliğin gönderilen alanlarını günceller,çalışıyor
DELETE,/events/:id,Etkinliği kalıcı olarak siler,çalışıyor