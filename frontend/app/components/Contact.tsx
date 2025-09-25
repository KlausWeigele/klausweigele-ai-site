"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setMessage("Vielen Dank! Ich melde mich innerhalb von 24 Stunden.");
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Leider hat das nicht funktioniert. Bitte schreiben Sie an hello@klausweigele.ai.");
    }
  }

  return (
    <section id="kontakt">
      <div className="container-boundary grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,0.8fr)] lg:items-start">
        <div className="space-y-4">
          <span className="subheading">Kontakt</span>
          <h2 className="text-3xl font-display text-white md:text-4xl">
            Lassen Sie uns Ihr nächstes KI-Vorhaben besprechen.
          </h2>
          <p className="max-w-xl text-lg text-slate-300">
            Buchen Sie einen 30-minütigen Kennenlern-Call – wir prüfen Machbarkeit, klären Ziele und skizzieren die ersten Quick Wins.
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
            <p className="font-semibold text-white">Was Sie erwarten können:</p>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>• Analyse Ihrer aktuellen Daten- & Tool-Landschaft</li>
              <li>• Identifikation von Quick-Wins & Pilotprojekten</li>
              <li>• Roadmap-Vorschlag für die nächsten 6–12 Wochen</li>
            </ul>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="card-surface shadow-card space-y-5 rounded-3xl border border-white/10 bg-slate-950/60 p-8"
        >
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              className="rounded-2xl border border-white/15 bg-slate-900/60 px-4 py-3 text-base text-white shadow-inner focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-200">
              E-Mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="rounded-2xl border border-white/15 bg-slate-900/60 px-4 py-3 text-base text-white shadow-inner focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="company" className="text-sm font-medium text-slate-200">
              Unternehmen (optional)
            </label>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              className="rounded-2xl border border-white/15 bg-slate-900/60 px-4 py-3 text-base text-white shadow-inner focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="focus" className="text-sm font-medium text-slate-200">
              Projektfokus
            </label>
            <select
              id="focus"
              name="focus"
              defaultValue="ml"
              className="rounded-2xl border border-white/15 bg-slate-900/60 px-4 py-3 text-base text-white focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
            >
              <option value="strategy" className="bg-slate-900">
                KI-Strategie & Datenarchitektur
              </option>
              <option value="ml" className="bg-slate-900">
                Machine Learning & LLM Engineering
              </option>
              <option value="ops" className="bg-slate-900">
                MLOps & Betrieb
              </option>
            </select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-200">
              Projektbeschreibung
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="rounded-2xl border border-white/15 bg-slate-900/60 px-4 py-3 text-base text-white shadow-inner focus:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-orange-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-75"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Wird gesendet…" : "Kennenlern-Call anfragen"}
          </button>
          {message && (
            <p
              className={`text-sm ${
                status === "success" ? "text-emerald-300" : "text-rose-300"
              }`}
            >
              {message}
            </p>
          )}
          <p className="text-xs text-slate-400">
            DSGVO-konforme Verarbeitung. Weitere Details in der Datenschutzerklärung.
          </p>
        </form>
      </div>
    </section>
  );
}
