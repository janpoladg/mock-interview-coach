from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import Session
# DB dependency
def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


# Database file location
DATABASE_URL = "sqlite:///./database.db"

#Create engine
engine = create_engine(DATABASE_URL)

# Create session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for models
Base = declarative_base()


