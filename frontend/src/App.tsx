import { Routes, Route, NavLink } from "react-router-dom";
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
  return (
    <div className="sayfa-konteyner">
      {/* Üst Header / Navigasyon Alanı */}
      <header className="ust-alan">
        <h1 className="ana-baslik">Kampüs Etkinlikleri</h1>
        <p className="alt-baslik">
          Farklı etkinlik, seminer ve söyleşileri tek yerden takip edin.
        </p>
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
    </div>
  );
}

export default App;