# FastAPI Backend

Backend-API für das Freelancer-Portfolio. Stellt einen Kontakt-Endpunkt und Platzhalter für KI-Demos bereit.

## Quickstart

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -e .
uvicorn app.main:create_app --reload
```

Standard-Port ist `8000`. Legen Sie eine `.env` an, um Konfigurationen wie `CONTACT_WEBHOOK_URL` oder `ALLOWED_ORIGINS` zu setzen.
