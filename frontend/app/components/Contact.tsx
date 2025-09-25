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
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setMessage("Vielen Dank! Ich melde mich in Kürze.");
      event.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Leider hat das nicht geklappt. Bitte senden Sie mir eine E-Mail an hello@klausweigele.ai.");
    }
  }

  return (
    <section id="kontakt" style={{ paddingBottom: "8rem" }}>
      <div className="container">
        <div className="badge">Kontakt</div>
        <h2 className="section-title">Lassen Sie uns Ihr nächstes KI-Vorhaben besprechen.</h2>
        <p className="section-subtitle">
          Beschreiben Sie kurz Ihr Projekt – ich melde mich innerhalb von 24 Stunden mit konkreten nächsten Schritten.
        </p>
        <form
          className="card"
          style={{ marginTop: "3rem", display: "grid", gap: "1.25rem" }}
          onSubmit={handleSubmit}
        >
          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              style={{
                padding: "0.85rem 1rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(5,7,13,0.2)",
                color: "inherit",
              }}
            />
          </div>
          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label htmlFor="email">E-Mail</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              style={{
                padding: "0.85rem 1rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(5,7,13,0.2)",
                color: "inherit",
              }}
            />
          </div>
          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label htmlFor="company">Unternehmen (optional)</label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              style={{
                padding: "0.85rem 1rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(5,7,13,0.2)",
                color: "inherit",
              }}
            />
          </div>
          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label htmlFor="budget">Geplantes Budget</label>
            <select
              id="budget"
              name="budget"
              required
              defaultValue="25-50k"
              style={{
                padding: "0.85rem 1rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(5,7,13,0.2)",
                color: "inherit",
              }}
            >
              <option value="under25">Unter 25.000 €</option>
              <option value="25-50k">25.000 – 50.000 €</option>
              <option value="50-100k">50.000 – 100.000 €</option>
              <option value="above100">Über 100.000 €</option>
            </select>
          </div>
          <div style={{ display: "grid", gap: "0.5rem" }}>
            <label htmlFor="message">Projektbeschreibung</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              style={{
                padding: "0.85rem 1rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(5,7,13,0.2)",
                color: "inherit",
              }}
            />
          </div>
          <button className="button" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Wird gesendet…" : "Unverbindliches Erstgespräch sichern"}
          </button>
          {message && (
            <p style={{
              color: status === "success" ? "#6ee7b7" : "#f87171",
              fontSize: "0.9rem",
            }}>
              {message}
            </p>
          )}
          <p style={{ color: "var(--color-muted)", fontSize: "0.85rem" }}>
            DSGVO-konforme Verarbeitung. Weitere Details in der Datenschutzerklärung.
          </p>
        </form>
      </div>
    </section>
  );
}
