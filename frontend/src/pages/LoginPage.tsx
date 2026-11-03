import { useState, type FormEvent } from "react";import { Link } from "react-router-dom";

interface LoginErrors {
  email?: string;
  password?: string;
}

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<LoginErrors>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found: LoginErrors = {};

    if (!email.includes("@")) {
      found.email = "Geçerli bir e-posta girin.";
    }
    if (password.length < 6) {
      found.password = "Şifre en az 6 karakter olmalı.";
    }

    setErrors(found);
    setSent(Object.keys(found).length === 0);
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "400px" }}>
      <h2 className="bolum-baslik">Giriş Yap</h2>

      {sent ? (
        <div style={{ padding: "1rem", background: "#e8f5e9", color: "#2e7d32", borderRadius: "4px", marginBottom: "1rem" }}>
          Gerçek giriş Sprint 10'da
        </div>
      ) : null}

      <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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

        <button type="submit" className="buton" style={{ marginTop: "0.5rem" }}>
          Giriş Yap
        </button>
      </form>

      <div style={{ marginTop: "1rem", display: "flex", gap: "15px", fontSize: "0.9rem" }}>
        <Link to="/forgot-password" style={{ textDecoration: "underline" }}>
  Şifremi unuttum
</Link>
        <Link to="#" style={{ textDecoration: "underline" }}>
          Hesabın yok mu? Kayıt ol
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;