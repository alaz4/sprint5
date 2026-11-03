import { useState, type FormEvent } from "react";import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = email.includes("@") ? "" : "Geçerli bir e-posta girin.";
    setError(found);
    setSent(found === "");
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "400px" }}>
      <h2 className="bolum-baslik">Şifremi Unuttum</h2>
      <p style={{ marginBottom: "1rem", color: "#555" }}>
        Kayıtlı e-posta adresinizi yazın, şifre yenileme bağlantısı gönderilsin.
      </p>

      {sent ? (
        <div
          style={{
            padding: "1rem",
            background: "#e8f5e9",
            color: "#2e7d32",
            borderRadius: "4px",
            marginBottom: "1rem",
          }}
        >
          Bağlantı {email} adresine gönderildi (demo).
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
            aria-invalid={error ? true : undefined}
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
          {error && (
            <span className="hata-metni" style={{ color: "red", fontSize: "0.85rem" }}>
              {error}
            </span>
          )}
        </div>

        <button type="submit" className="buton" style={{ marginTop: "0.5rem" }}>
          Bağlantı Gönder
        </button>
      </form>

      <div style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
        <Link to="/login" style={{ textDecoration: "underline" }}>
          ← Girişe dön
        </Link>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;