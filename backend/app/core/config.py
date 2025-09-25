from functools import lru_cache
from typing import List

from pydantic import Field
from pydantic import field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore", populate_by_name=True)

    @field_validator('backend_cors_origins', mode='before')
    @classmethod
    def _split_origins(cls, value):
        if isinstance(value, str):
            return [origin.strip() for origin in value.split(',') if origin.strip()]
        return value

    @field_validator('contact_forward_emails', mode='before')
    @classmethod
    def _split_emails(cls, value):
        if isinstance(value, str):
            return [email.strip() for email in value.split(',') if email.strip()]
        return value

    project_name: str = "AI Consulting Backend"
    backend_cors_origins: List[str] = Field(default_factory=lambda: ["http://localhost:3000", "http://127.0.0.1:3000"], alias="ALLOWED_ORIGINS")
    contact_webhook_url: str | None = Field(default=None, alias="CONTACT_WEBHOOK_URL")
    contact_forward_emails: List[str] = Field(default_factory=list, alias="CONTACT_FORWARD_EMAILS")


@lru_cache
def get_settings() -> Settings:
    return Settings()
