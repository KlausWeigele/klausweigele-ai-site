const SERVICES = [
  {
    title: "AI Discovery & Strategie",
    description:
      "Identifikation der wertstiftenden Use Cases, Daten-Audit sowie Roadmap für organisatorische Verankerung.",
    highlights: ["Opportunity Workshops", "Business-Value-Scoring", "KPI-Definition"],
  },
  {
    title: "Prototyping & MVP",
    description:
      "Iterative Entwicklung von funktionsfähigen KI-Prototypen mit klar messbarem Impact für Stakeholder.",
    highlights: ["Rapid Experimentation", "Design Sprints", "User Validation"],
  },
  {
    title: "Produktionsreife & MLOps",
    description:
      "Skalierbare Deployments mit CI/CD, observability und Compliance-konformen Datenpipelines.",
    highlights: ["Infrastructure as Code", "Monitoring & Alerting", "Retraining-Playbooks"],
  },
];

export function Services() {
  return (
    <section id="leistungen">
      <div className="container">
        <div className="badge">Services</div>
        <h2 className="section-title">Von der Vision zum produktionsreifen KI-System.</h2>
        <p className="section-subtitle">
          Ich kombiniere Produktdenken, Data Science und moderne Softwareentwicklung, damit Ideen schnell in skalierbare Anwendungen überführt werden.
        </p>
        <div
          className="grid"
          style={{
            marginTop: "3rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {SERVICES.map((service) => (
            <article key={service.title} className="card" style={{ display: "grid", gap: "1rem" }}>
              <h3 style={{ fontSize: "1.4rem" }}>{service.title}</h3>
              <p style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>{service.description}</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: "0.65rem" }}>
                {service.highlights.map((highlight) => (
                  <li key={highlight} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-primary)" }} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
