const STEPS = [
  {
    number: "01",
    title: "Discovery",
    text: "Gemeinsamer Scope-Workshop, Dateninventur und Identifikation der wertschöpfenden Anwendungsfälle.",
  },
  {
    number: "02",
    title: "Solution Design",
    text: "Architektur für Datenpipelines, Modellbetrieb und Integrationen – inklusive Security- und Compliance-Review.",
  },
  {
    number: "03",
    title: "Implementation",
    text: "Sprintbasiertes Delivery mit automatisierten Tests, CI/CD und kontinuierlichem Stakeholder-Feedback.",
  },
  {
    number: "04",
    title: "Ops & Enablement",
    text: "Übergabe, Dokumentation, Betriebshandbücher und On-the-job-Training für Ihr Team.",
  },
];

export function Process() {
  return (
    <section className="relative" id="prozess">
      <div className="container-boundary grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.8fr)] lg:items-start">
        <div className="space-y-4">
          <span className="subheading">Arbeitsweise</span>
          <h2 className="text-3xl font-display text-white md:text-4xl">
            In vier klaren Phasen von der Idee zur produktiven KI.
          </h2>
          <p className="max-w-xl text-lg text-slate-300">
            Jeder Schritt liefert verwertbare Ergebnisse: von einer priorisierten Roadmap über ein belastbares Architekturdesign bis zu eingeführten ML-Workloads mit belastbaren KPIs.
          </p>
        </div>

        <ol className="relative space-y-6 border-l border-white/10 pl-8">
          {STEPS.map((step) => (
            <li key={step.number} className="relative">
              <div className="card-surface shadow-card absolute -left-8 top-1 h-4 w-4 -translate-x-1/2 rounded-full border border-orange-400 bg-orange-500" aria-hidden />
              <div className="card-surface shadow-card group rounded-3xl border border-white/10 bg-slate-900/50 p-6 transition hover:border-orange-300/80">
                <span className="text-sm font-semibold text-orange-300">{step.number}</span>
                <h3 className="mt-2 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
