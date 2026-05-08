from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import InterviewSession
from app.schemas import SessionResponse
from app.database import get_db
router = APIRouter()

# GET /history
@router.get("/history", response_model=List[SessionResponse])
def get_history(db: Session = Depends(get_db)):
    sessions = db.query(InterviewSession).order_by(InterviewSession.id.desc()).all()
    return sessions