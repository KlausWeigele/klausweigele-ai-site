export function Footer() {
  return (
    <footer>
      <div className="container" style={{ display: "grid", gap: "1.5rem" }}>
        <div>
          <strong>Klaus Weigele</strong>
          <p style={{ color: "var(--color-muted)" }}>
            Freiberuflicher KI-Berater & Engineer · Stuttgart · Remote in DACH
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <a href="mailto:hello@klausweigele.ai">hello@klausweigele.ai</a>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
        <p style={{ fontSize: "0.85rem" }}>
          © {new Date().getFullYear()} Klaus Weigele. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
