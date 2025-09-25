const VALUE_ITEMS = [
  {
    title: "Industriefokus",
    description: "Workflow- und Prozess-Know-how aus Maschinenbau, Automotive und Energieprojekten.",
  },
  {
    title: "Messbare KPIs",
    description: "Jede Initiative erhält klare Erfolgskriterien und ein belastbares Reporting-Setup.",
  },
  {
    title: "Governance im Kern",
    description: "Security, Compliance und Datenschutz werden früh eingebettet und fortlaufend überwacht.",
  },
];

export function ValueGrid() {
  return (
    <section>
      <div className="container-boundary grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-center">
        <div className="space-y-4">
          <span className="subheading">Mehrwert</span>
          <h2 className="text-3xl font-display text-white md:text-4xl">
            Warum technische Teams mit Klaus Weigele arbeiten.
          </h2>
          <p className="text-lg text-slate-300">
            Ich verbinde tiefes Domänenwissen mit modernem KI-Engineering – von klassischen ML-Workloads bis zu sicheren LLM-Lösungen.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {VALUE_ITEMS.map((item) => (
            <article key={item.title} className="card-surface h-full rounded-3xl border border-white/10 bg-slate-900/50 p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
