const CASES = [
  {
    title: "Predictive Maintenance für Industrie 4.0",
    challenge: "Sensor-Daten aus mehreren Werken ohne einheitliche Pipeline.",
    approach: "Konzeption eines Data Lakehouse, Feature Store und FastAPI-Inferenz-Service mit GPU-Beschleunigung.",
    result: "Reduktion ungeplanter Stillstände um 22% innerhalb von 6 Monaten.",
  },
  {
    title: "Conversational Intelligence im Kundenservice",
    challenge: "Lange Reaktionszeiten und fehlende Wissensbasis.",
    approach: "LLM-gestützter Copilot mit Retrieval-Augmented Generation, integriert in bestehendes CRM.",
    result: "First-Response-Time von 18 auf 4 Minuten gesenkt.",
  },
  {
    title: "Demand Forecasting für Einzelhandel",
    challenge: "Schwankende Nachfrage und Überbestände in über 120 Filialen.",
    approach: "Next.js Dashboard, FastAPI zur Modellorchestrierung und MLOps-Automatisierung mit GitHub Actions.",
    result: "Lagerkosten um 15% reduziert, verbesserte Planungszyklen.",
  },
];

export function Showcase() {
  return (
    <section id="cases">
      <div className="container">
        <div className="badge">Case Studies</div>
        <h2 className="section-title">Messbarer Impact in Schlüsselprojekten.</h2>
        <div className="grid" style={{ marginTop: "3rem", gap: "2rem" }}>
          {CASES.map((item) => (
            <article key={item.title} className="card" style={{ display: "grid", gap: "1rem" }}>
              <h3>{item.title}</h3>
              <div style={{ display: "grid", gap: "0.5rem", color: "var(--color-muted)" }}>
                <p><strong>Herausforderung:</strong> {item.challenge}</p>
                <p><strong>Ansatz:</strong> {item.approach}</p>
                <p><strong>Ergebnis:</strong> {item.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
