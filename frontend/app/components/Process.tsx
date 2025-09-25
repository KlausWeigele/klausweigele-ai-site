const STEPS = [
  {
    title: "1. Discovery",
    text: "Workshop, Dateninventur und Hypothesen. Wir priorisieren anhand Business-Impact und Datenverfügbarkeit.",
  },
  {
    title: "2. Solution Design",
    text: "Architekturentwurf für Next.js Frontends, FastAPI Backend und MLOps-Tooling. Proof of Architecture & Security Review.",
  },
  {
    title: "3. Build & Iterate",
    text: "Sprints mit funktionsfähigen Releases. Automatisierte Tests, CI/CD-Pipelines und Observability werden direkt integriert.",
  },
  {
    title: "4. Enable & Scale",
    text: "Übergabe, Dokumentation, Onboarding und optionales Co-Lab-Team für Betrieb und Weiterentwicklung.",
  },
];

export function Process() {
  return (
    <section id="prozess">
      <div className="container">
        <div className="badge">Arbeitsweise</div>
        <h2 className="section-title">Partner auf Augenhöhe – von Analyse bis Rollout.</h2>
        <div className="grid" style={{ marginTop: "3rem", gap: "1.5rem" }}>
          {STEPS.map((step) => (
            <article key={step.title} className="card" style={{ display: "grid", gap: "0.75rem" }}>
              <h3>{step.title}</h3>
              <p style={{ color: "var(--color-muted)", lineHeight: 1.6 }}>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
