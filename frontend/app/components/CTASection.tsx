import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative" id="kennenlern-call">
      <div className="container-boundary">
        <div className="card-surface shadow-glow overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-primary/50 via-slate-900/80 to-slate-950 p-10 md:p-14">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div className="space-y-4">
              <span className="subheading">Nächster Schritt</span>
              <h2 className="text-3xl font-display text-white md:text-4xl">
                Sichern Sie sich Ihren Kennenlern-Call.
              </h2>
              <p className="text-lg text-slate-200 md:max-w-2xl">
                In 30 Minuten erhalten Sie eine Einschätzung zu Datenlage, Use-Cases und dem schnellsten Weg zum produktionsreifen KI-Piloten.
              </p>
            </div>
            <Link
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-base font-semibold text-slate-950 transition hover:bg-orange-400"
            >
              Jetzt Termin anfragen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
