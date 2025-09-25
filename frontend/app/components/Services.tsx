const SERVICES = [
  {
    title: "KI-Strategie & Datenarchitektur",
    description: "Workshops, Dateninventur und Use-Case-Priorisierung mit belastbaren Business-Cases.",
    highlights: ["Industrial Data Audit", "Use-Case Scoring", "Zielbild & Roadmap"],
  },
  {
    title: "Machine Learning & LLM Engineering",
    description: "Modellierung, RAG-Pipelines und Inferenz-APIs – sicher integriert in Ihr Tech-Ökosystem.",
    highlights: ["Predictive Maintenance", "LLM Safety Patterns", "Edge & Cloud Deployments"],
  },
  {
    title: "MLOps & Betrieb",
    description: "Kontinuierliche Auslieferung mit Monitoring, Retraining-Playbooks und Compliance-Governance.",
    highlights: ["CI/CD & IaC", "Observability Dashboards", "SLA-orientierter Support"],
  },
];

export function Services() {
  return (
    <section className="gradient-section" id="leistungen">
      <div className="container-boundary space-y-8">
        <div className="space-y-3">
          <span className="subheading">Leistungen</span>
          <h2 className="text-balance text-3xl font-display font-semibold text-white md:text-4xl">
            Von der KI-Strategie bis zum verlässlichen Betrieb.
          </h2>
          <p className="max-w-3xl text-lg text-slate-300">
            Ich verbinde Datenstrategie, Softwareengineering und KI-Produktdenken. Ziel: industrielle AI-Lösungen, die messbar Wert schaffen und dauerhaft laufen.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="card-surface shadow-card flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/40 p-8"
            >
              <header className="space-y-2">
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{service.description}</p>
              </header>
              <ul className="space-y-3 text-sm text-slate-200">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3">
                    <span className="inline-flex h-2 w-2 rounded-full bg-orange-400" aria-hidden />
                    <span className="leading-relaxed">{highlight}</span>
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
