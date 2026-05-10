from pydantic import BaseModel
from typing import Optional
import datetime
# --- Models ---
class AnswerRequest(BaseModel):
    question: str
    answer: str
    interview_type: str
    language: str = "English"

class SessionResponse(BaseModel): 
    id: int
    question:str
    answer: str
    score: Optional[int]
    interview_type: str
    feedback: str
    created_at: datetime.datetime
    class Config:
       from_attributes = True
       
class QuestionRequest(BaseModel):
    interview_type: str
    difficulty: str = "intermediate"
    language: str = "English"
    cv_text: Optional[str] = None
    job_description: Optional[str] = None
