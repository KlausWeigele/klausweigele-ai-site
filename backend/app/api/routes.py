from fastapi import APIRouter, BackgroundTasks

from app.schemas import ContactRequest, ContactResponse, HealthResponse
from app.services.notification import forward_contact

router = APIRouter(prefix="/api", tags=["api"])


@router.get("/health", response_model=HealthResponse)
async def health() -> HealthResponse:
    return HealthResponse()


@router.post("/contact", response_model=ContactResponse)
async def submit_contact(data: ContactRequest, background_tasks: BackgroundTasks) -> ContactResponse:
    payload = data.model_dump()
    background_tasks.add_task(forward_contact, payload)
    return ContactResponse(success=True, message="Kontaktanfrage erfolgreich übermittelt.")
