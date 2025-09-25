# Freelancer KI-Consulting – Monorepo

Dieses Repository enthält den Next.js-Frontend-Auftritt und ein FastAPI-Backend für Kontakt- und Demo-Endpunkte.

## Struktur
- `frontend/` – Marketing-Website auf Next.js 14 (App Router, TypeScript).
- `backend/` – FastAPI-Anwendung mit REST-API für Kontaktformular & Health Checks.

## Lokale Entwicklung

### Voraussetzungen
- Node.js 18+
- Python 3.9+

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Standard-Port: `http://localhost:3000`.

Konfiguration über `.env.local`:
```bash
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

### Backend
```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -e .
uvicorn app.main:create_app --reload
```
Backend läuft unter `http://localhost:8000`.

`.env`-Variablen (siehe `backend/.env.example`):
- `ALLOWED_ORIGINS` – Kommagetrennte Liste erlaubter Origins.
- `CONTACT_WEBHOOK_URL` – Optionaler Webhook (Slack, Make, etc.).
- `CONTACT_FORWARD_EMAILS` – Reserviert für spätere SMTP-Anbindung.

## Kontaktformular Flow
1. Nutzer sendet Anfrage über das Next.js-Frontend.
2. Frontend ruft `/api/contact` (Next.js Route) auf.
3. Route proxy-t den Request an das FastAPI-Backend (`{BACKEND_URL}/api/contact`).
4. FastAPI validiert Daten und führt Hintergrund-Task `forward_contact` aus (Webhook oder Logging).

## Next Steps
- Deployment-Setup (Vercel + Render/Fly.io/AWS).
- CI/CD-Pipeline mit Linting, Tests und Previews.
- Datenschutz/Impressum-Seiten ergänzen.
- Optional: Mehrsprachigkeit und Blog (MDX/Contentlayer).
