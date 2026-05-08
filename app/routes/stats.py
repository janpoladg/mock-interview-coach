from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func
from app.database import get_db
from app.models import InterviewSession

router = APIRouter()



@router.get("/stats")
def get_stats(db: Session = Depends(get_db)): 
    # total sessions
    total_sessions = db.query(InterviewSession).count()

    #average_score
    average_score = db.query(
        func.avg(InterviewSession.score)
    ).scalar()

    average_score = round(average_score, 1) if average_score else 0

    # average score per category
    results = db.query(
        InterviewSession.interview_type,
        func.avg(InterviewSession.score).label("avg_score")
    ).group_by(InterviewSession.interview_type).all()

    # find best category
    best_category = None

    if results: 
        best = max(results, key=lambda x: x.avg_score)
        best_category = best.interview_type
    
    return {
        "total_sessions": total_sessions,
        "average_score": average_score,
        "best_category": best_category
    }
