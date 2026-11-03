import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

interface RegisterErrors {
  name?: string;
  email?: string;
  password?: string;
  password2?: string;
}

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found: RegisterErrors = {};

    if (name.trim().length < 3) {
      found.name = "Ad soyad en az 3 karakter olmalı.";
    }
    if (!email.includes("@")) {
      found.email = "Geçerli bir e-posta girin.";
    }
    if (password.length < 6) {
      found.password = "Şifre en az 6 karakter olmalı.";
    }
    if (password2 !== password) {
      found.password2 = "Şifreler aynı değil.";
    }

    setErrors(found);
    setSent(Object.keys(found).length === 0);
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "400px" }}>
      <h2 className="bolum-baslik">Kayıt Ol</h2>

      {sent ? (
        <div style={{ padding: "1rem", background: "#e8f5e9", color: "#2e7d32", borderRadius: "4px", marginBottom: "1rem" }}>
          Kayıt başarılı! Gerçek kayıt işlemi Sprint 10'da aktif edilecek.
        </div>
      ) : null}

      <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <label htmlFor="name">Ad Soyad</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={errors.name ? true : undefined}
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
          {errors.name && (
            <span className="hata-metni" style={{ color: "red", fontSize: "0.85rem" }}>
              {errors.name}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="email">E-posta</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
          {errors.email && (
            <span className="hata-metni" style={{ color: "red", fontSize: "0.85rem" }}>
              {errors.email}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="password">Şifre</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={errors.password ? true : undefined}
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
          {errors.password && (
            <span className="hata-metni" style={{ color: "red", fontSize: "0.85rem" }}>
              {errors.password}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="password2">Şifre (Tekrar)</label>
          <input
            id="password2"
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            aria-invalid={errors.password2 ? true : undefined}
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
          {errors.password2 && (
            <span className="hata-metni" style={{ color: "red", fontSize: "0.85rem" }}>
              {errors.password2}
            </span>
          )}
        </div>

        <button type="submit" className="buton" style={{ marginTop: "0.5rem" }}>
          Kayıt Ol
        </button>
      </form>

      <div style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
        <Link to="/login" style={{ textDecoration: "underline" }}>
          Zaten hesabın var mı? Giriş yap
        </Link>
      </div>
    </div>
  );
}

export default RegisterPage;