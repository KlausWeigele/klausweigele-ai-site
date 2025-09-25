from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import router as api_router
from app.core.config import get_settings


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Hook for startup/shutdown tasks (DB, queues etc.)
    yield


def create_app() -> FastAPI:
    settings = get_settings()
    app = FastAPI(title=settings.project_name, lifespan=lifespan)

    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.backend_cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(api_router)

    return app


def run():
    import uvicorn

    uvicorn.run("app.main:create_app", factory=True, host="0.0.0.0", port=8000, reload=True)
