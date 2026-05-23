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
    technical_type: Optional[str] = None # "coding", "theory", "mixed"
    sub_category: Optional[str] = None # 'arrays', 'oop', 'system design' etc
    prog_language: Optional[str] = None # 'Python, 'C','C++' etc

class SignupRequest(BaseModel): 
    username: str
    email: str
    password: str

class LoginRequest(BaseModel):
    login: str
    password: str
class TokenResponse(BaseModel): 
    access_token: str
    token_type: str = "bearer"

class UserResponse(BaseModel): 
    id: int
    username: str
    email: str
    created_at: datetime.datetime

    class Config:
        from_attributes = True


