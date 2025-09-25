const CASES = [
  {
    title: "Predictive Maintenance für Produktionsanlagen",
    challenge: "Sensorik aus mehreren Werken ohne zentrale Datenplattform.",
    approach: "Data Lakehouse, Feature Store und FastAPI-Inferenzservice mit GPU-Beschleunigung.",
    result: "Stillstandszeiten um 22% reduziert binnen 6 Monaten.",
  },
  {
    title: "Conversational Intelligence im Kundenservice",
    challenge: "Lange Reaktionszeiten und verstreutes Expertenwissen.",
    approach: "LLM-Copilot mit Retrieval-Augmented Generation und SAP/CRM-Integration.",
    result: "First-Response-Time von 18 auf 4 Minuten gesenkt.",
  },
  {
    title: "Demand Forecasting im Großhandel",
    challenge: "Schwankende Nachfrage und Überbestände in 120 Filialen.",
    approach: "LLMs für Marktsignale, ML-Pipeline in Azure ML, Next.js Steuerungscockpit.",
    result: "Lagerkosten um 15% gesenkt und Servicegrad gesteigert.",
  },
];

export function Showcase() {
  return (
    <section id="case-studies">
      <div className="container-boundary space-y-8">
        <div className="space-y-3">
          <span className="subheading">Case Studies</span>
          <h2 className="text-3xl font-display text-white md:text-4xl">Messbarer Impact in Schlüsselprojekten.</h2>
          <p className="max-w-3xl text-lg text-slate-300">
            Jede Einführung liefert konkrete KPIs – von Uptime-Steigerung über Kostenreduzierung bis hin zu neuen Serviceangeboten.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((item) => (
            <article key={item.title} className="card-surface shadow-card flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-7">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <div className="space-y-3 text-sm leading-relaxed text-slate-300">
                <p>
                  <strong className="text-orange-200">Herausforderung:</strong> {item.challenge}
                </p>
                <p>
                  <strong className="text-orange-200">Ansatz:</strong> {item.approach}
                </p>
                <p>
                  <strong className="text-orange-200">Ergebnis:</strong> {item.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
