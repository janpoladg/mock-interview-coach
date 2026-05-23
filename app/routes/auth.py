from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import User
from app.schemas import SignupRequest, LoginRequest, TokenResponse, UserResponse
from app.auth_utils import hash_password, verify_password, create_token, get_current_user
router = APIRouter()
#POST signup logic
@router.post("/signup")
def signuplogic(data: SignupRequest, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.username == data.username).first()
    if existing_user:
       raise HTTPException(status_code=400, detail="Username already taken")
    existing_email = db.query(User).filter(User.email == data.email).first()
    if existing_email:
        raise HTTPException(status_code=400, detail="Email already exists")

    hashed_password = hash_password(data.password)
    new_user = User(
        username=data.username,
        email=data.email,
        hashed_password=hashed_password
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"message": "Account created successfully"} 
@router.post("/login")
def login(data: LoginRequest, db: Session = Depends(get_db)):
    # find user by mail or username
    user = db.query(User).filter(
        (User.username == data.login) | (User.email == data.login)
    ).first()
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    if not verify_password(data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = create_token(user.id, user.username)
    return {"access_token": token,"token_type":"bearer"}
@router.get("/me", response_model=UserResponse)
def get_me(current_user: dict = Depends(get_current_user), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == current_user["user_id"]).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

