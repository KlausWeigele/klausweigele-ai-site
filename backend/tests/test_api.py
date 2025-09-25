import pytest
from httpx import AsyncClient

from app.main import create_app


@pytest.fixture()
def app():
    return create_app()


@pytest.mark.asyncio
async def test_health(app):
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/api/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"


@pytest.mark.asyncio
async def test_contact(app):
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.post(
            "/api/contact",
            json={
                "name": "Max Mustermann",
                "email": "max@example.com",
                "company": "Acme",
                "budget": "25-50k",
                "message": "Wir möchten ein KI-Projekt umsetzen, um Prozesse zu automatisieren.",
            },
        )
    assert response.status_code == 200
    assert response.json()["success"] is True
