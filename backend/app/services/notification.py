import logging
from typing import Any

import httpx

from app.core.config import get_settings

logger = logging.getLogger(__name__)


async def forward_contact(payload: dict[str, Any]) -> None:
    settings = get_settings()

    if settings.contact_webhook_url:
        async with httpx.AsyncClient(timeout=10) as client:
            response = await client.post(settings.contact_webhook_url, json=payload)
            response.raise_for_status()
        logger.info("Contact request forwarded to webhook")
    else:
        logger.info("Contact request received: %s", payload)
