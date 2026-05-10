from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from contextlib import asynccontextmanager
from app.routes.history import router as history_router
from app.database import Base, engine
from app.routes.interview import router as interview_router
from app.routes.stats import router as stats_router
from app.routes.upload import router as upload_router
@asynccontextmanager
async def lifespan(app):
    Base.metadata.create_all(bind=engine)
    yield

app = FastAPI(title="Mock Interview Coach", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="static"), name="static")
app.include_router(interview_router)
app.include_router(history_router)
app.include_router(stats_router)
app.include_router(upload_router)
@app.get("/")
def read_root():
    return {"message": "Mock Interview Coach is running!"}

@app.get("/ui")
def serve_ui():
    return FileResponse("static/index.html")