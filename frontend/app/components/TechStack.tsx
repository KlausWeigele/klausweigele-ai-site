const STACK = [
  {
    category: "Frontend",
    tools: ["Next.js 14", "React 18", "Tailwind oder Vanilla-Designsystem", "Vercel Edge"],
  },
  {
    category: "Backend",
    tools: ["FastAPI", "Pydantic", "Celery/Redis", "OpenAPI-first"],
  },
  {
    category: "AI & Data",
    tools: ["LangChain", "OpenAI / Azure OpenAI", "MLflow", "dbt", "DuckDB"],
  },
  {
    category: "Ops",
    tools: ["GitHub Actions", "Terraform", "Sentry", "Grafana"],
  },
];

export function TechStack() {
  return (
    <section id="tech">
      <div className="container">
        <div className="badge">Tech Stack</div>
        <h2 className="section-title">Bewährte Komponenten, kombiniert für Geschwindigkeit.</h2>
        <p className="section-subtitle">
          Jede Lösung wird auf Ihr Setup zugeschnitten. Ich arbeite bevorzugt mit Open-Source-Bausteinen und Cloud-Services, die sich nahtlos integrieren lassen.
        </p>
        <div
          className="grid"
          style={{
            marginTop: "3rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {STACK.map((group) => (
            <article key={group.category} className="card" style={{ display: "grid", gap: "0.75rem" }}>
              <h3>{group.category}</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: "0.35rem", color: "var(--color-muted)" }}>
                {group.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
