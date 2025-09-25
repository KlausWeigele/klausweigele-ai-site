import Link from "next/link";

const HIGHLIGHTS = [
  "15+ KI-Projekte im industriellen Umfeld",
  ">30% Effizienzgewinn on average",
  "LLM-Integrationen mit Governance & Sicherheit"
];

const STATS = [
  { metric: "15+", label: "Produktionsreife KI-Einführungen" },
  { metric: "30%", label: "Ø Effizienzsteigerung" },
  { metric: "24h", label: "Reaktionszeit auf Anfragen" }
];

export function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden pb-16 pt-24 text-white md:pt-32">
      <div className="container-boundary grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="badge">KI für Industrie & Technik</span>
            <h1 className="text-balance text-4xl font-display font-semibold tracking-tight md:text-5xl lg:text-[3.4rem]">
              Produktionsreife KI-Lösungen, die Ihr Werk digitalisieren.
            </h1>
            <p className="max-w-xl text-lg text-slate-300 md:text-xl">
              Klaus Weigele begleitet Ihr Team von der Datenstrategie über Machine Learning bis zu sicheren LLM-Integrationen. Fokus: messbare Wertschöpfung und nachhaltiger Betrieb.
            </p>
          </div>

          <ul className="grid gap-3 text-sm text-slate-200 md:grid-cols-1">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 font-medium backdrop-blur">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/80 text-sm font-semibold text-slate-950">
                  ✓
                </span>
                <span className="leading-snug text-base text-slate-100">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-[0_10px_30px_rgba(249,115,22,0.35)] transition hover:bg-orange-400"
            >
              Kennenlern-Call buchen
            </Link>
            <Link
              href="#referenzen"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-orange-200 hover:text-orange-200"
            >
              Referenzen anfordern
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-primary/40 blur-3xl" aria-hidden />
          <div className="card-surface shadow-glow relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/50 p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-400">KI-Dashboard Preview</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">Live KPIs</span>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <strong className="text-sm text-white/70">Anomalie-Erkennung</strong>
                <p className="mt-2 text-2xl font-semibold text-white">98.2% Trefferquote</p>
                <p className="text-sm text-slate-300">Aktualisiert vor 5 Minuten</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {STATS.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="text-2xl font-semibold text-white">{stat.metric}</p>
                    <p className="text-xs text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-orange-500/30 bg-orange-500/15 p-4">
                <p className="text-sm font-medium text-orange-200">"Wir skalieren Machine-Learning-Pipelines in Wochen statt Monaten."</p>
                <p className="mt-2 text-xs text-orange-100/70">Industriepartner, CTO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-boundary mt-16 border-t border-white/10 pt-10" id="referenzen">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Vertrauen aus Industrie & Tech</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          {"Bosch Siemens Zeiss Allianz Continental Datev".split(" ").map((brand) => (
            <span key={brand} className="text-slate-400/80">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
