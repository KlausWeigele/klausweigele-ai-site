export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="container-boundary flex flex-col gap-6 py-10 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-white">Klaus Weigele</p>
          <p className="text-slate-400">Freiberuflicher KI-Berater · Stuttgart · Remote in DACH</p>
        </div>
        <div className="flex flex-col gap-3 text-sm md:flex-row md:items-center md:gap-6">
          <a href="mailto:hello@klausweigele.ai" className="text-slate-200 hover:text-orange-300">
            hello@klausweigele.ai
          </a>
          <a href="/impressum" className="text-slate-400 hover:text-orange-200">
            Impressum
          </a>
          <a href="/datenschutz" className="text-slate-400 hover:text-orange-200">
            Datenschutz
          </a>
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Klaus Weigele. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
