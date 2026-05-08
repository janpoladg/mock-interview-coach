from sqlalchemy import Column
from sqlalchemy import String
from sqlalchemy import Integer
from sqlalchemy import DateTime
from sqlalchemy import Text
import datetime
from app.database import Base

class InterviewSession(Base): 
    __tablename__  = "sessions"
    id = Column(Integer, primary_key=True)
    interview_type = Column(String)
    question = Column(Text)
    answer = Column(Text)
    feedback = Column(Text)
    score = Column(Integer)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

