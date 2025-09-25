from datetime import datetime

from pydantic import BaseModel, EmailStr, Field


class HealthResponse(BaseModel):
    status: str = "ok"
    timestamp: datetime = Field(default_factory=datetime.utcnow)


class ContactRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    company: str | None = Field(default=None, max_length=120)
    budget: str | None = Field(default=None, max_length=120)
    message: str = Field(..., min_length=20, max_length=2000)


class ContactResponse(BaseModel):
    success: bool
    message: str
