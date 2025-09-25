"use client";

import { useMemo } from "react";

const STAT_BLOCKS = [
  { metric: "15+", label: "Projekte pro Jahr" },
  { metric: ">30%", label: "Durchschnittliche Effizienzsteigerung" },
  { metric: "2-4 Wochen", label: "Zeit bis zum MVP" }
];

export function Hero() {
  const duplicatedLogos = useMemo(
    () => [
      "Bosch",
      "Siemens",
      "Zeiss",
      "Allianz",
      "Continental",
      "DATEV"
    ],
    []
  );

  return (
    <header className="container" style={{ padding: "8rem 0 6rem" }}>
      <div className="badge">AI Consulting & Engineering</div>
      <h1 style={{ fontSize: "clamp(2.5rem, 4vw, 4.5rem)", margin: "1.5rem 0" }}>
        Schlanke KI-Produkte, die Geschäftswert schaffen.
      </h1>
      <p style={{ maxWidth: 620, color: "var(--color-muted)", fontSize: "1.2rem", lineHeight: 1.6 }}>
        Ich begleite Mittelstands- und Scale-up-Teams von der ersten Idee bis zum produktionsreifen KI-System – mit einem modernen Stack aus Next.js, FastAPI und automatisiertem MLOps.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "2.5rem" }}>
        <a className="button" href="#kontakt">Projekt anfragen</a>
        <a className="button secondary" href="#cases">Referenzen ansehen</a>
      </div>

      <div style={{ display: "grid", gap: "2rem", marginTop: "4rem" }}>
        <div className="card" style={{ display: "grid", gap: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1.5rem" }}>
            {STAT_BLOCKS.map((block) => (
              <div key={block.metric} style={{ display: "grid", gap: "0.35rem" }}>
                <span style={{ fontSize: "2.2rem", fontWeight: 700 }}>{block.metric}</span>
                <span style={{ color: "var(--color-muted)" }}>{block.label}</span>
              </div>
            ))}
          </div>
          <div>
            <span style={{ color: "var(--color-muted)", fontSize: "0.9rem" }}>Vertraut von Teams wie</span>
            <div className="marquee" style={{ marginTop: "1rem" }}>
              <div className="marquee-track">
                {[...duplicatedLogos, ...duplicatedLogos].map((logo, idx) => (
                  <span key={`${logo}-${idx}`} style={{ fontWeight: 600, letterSpacing: "0.08em" }}>
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
