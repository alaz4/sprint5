import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import AdminPage from "./pages/AdminPage";
import AddEventPage from "./pages/AddEventPage";
import EditEventPage from "./pages/EditEventPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;

    if (path === "/") return "Kampüs Etkinlikleri";
    if (path === "/events") return "Etkinlikler";
    if (path.startsWith("/events/")) return "Etkinlik Detayı";
    if (path === "/admin") return "Etkinlik Yönetimi";
    if (path === "/admin/new") return "Yeni Etkinlik Ekle";
    if (path.includes("/edit")) return "Etkinlik Düzenle";
    if (path === "/login") return "Giriş Yap";
    if (path === "/register") return "Kayıt Ol";
    if (path === "/forgot-password") return "Şifremi Unuttum";
    
    return "Sayfa Bulunamadı";
  };

  const getPageSubtitle = () => {
    const path = location.pathname;

    if (path === "/") {
      return "Farklı etkinlik, seminer ve söyleşileri tek yerden takip edin.";
    }
    if (path === "/events") {
      return "Ekim ayında kampüste düzenlenen etkinlikler.";
    }
    
    return null;
  };

  const subtitle = getPageSubtitle();

  return (
    <div className="sayfa-konteyner">
      {/* Üst Header / Navigasyon Alanı */}
      <header className="ust-alan">
        <h1 className="ana-baslik">{getPageTitle()}</h1>
        {subtitle && <p className="alt-baslik">{subtitle}</p>}
        <nav className="navigasyon">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link aktif" : "nav-link")}>
            Ana Sayfa
          </NavLink>
          <NavLink to="/events" className={({ isActive }) => (isActive ? "nav-link aktif" : "nav-link")}>
            Etkinlikler
          </NavLink>
          <NavLink to="/admin" className={({ isActive }) => (isActive ? "nav-link aktif" : "nav-link")}>
            Yönetim
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "nav-link aktif" : "nav-link")}>
            Giriş
          </NavLink>
        </nav>
      </header>

      {/* Sayfa İçerikleri */}
      <main className="icerik-alani">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/new" element={<AddEventPage />} />
          <Route path="/admin/:id/edit" element={<EditEventPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Alt Bilgi (Footer) Alanı */}
      <footer className="alt-bilgi">
        <p>&copy; Alaz Borucu - 2416501004 - 2026</p>
      </footer>
    </div>
  );
}

export default App;