from sqlalchemy import Column
from sqlalchemy import String
from sqlalchemy import Integer
from sqlalchemy import DateTime
from sqlalchemy import Text
from sqlalchemy import ForeignKey
import datetime
from app.database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key = True)
    username = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, nullable=False)
    hashed_password = Column(Text)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class InterviewSession(Base): 
    __tablename__  = "sessions"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    interview_type = Column(String)
    question = Column(Text)
    answer = Column(Text)
    feedback = Column(Text)
    score = Column(Integer)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

