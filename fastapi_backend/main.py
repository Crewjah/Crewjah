from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, EmailStr
from typing import List, Optional, Dict, Any
from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import JWTError, jwt
import os

# Security setup
SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key-change-in-production")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
security = HTTPBearer()

app = FastAPI(
    title="Crewjah API", 
    description="Educational platform backend with authentication.",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],  # More specific origins
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "PATCH"],
    allow_headers=["*"],
)

# In-memory storage (replace with database in production)
fake_users_db: Dict[str, Dict[str, Any]] = {}
fake_summaries_db: List[Dict[str, Any]] = []

# Utility functions
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    try:
        payload = jwt.decode(credentials.credentials, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise HTTPException(status_code=401, detail="Invalid authentication credentials")
        if email not in fake_users_db:
            raise HTTPException(status_code=401, detail="User not found")
        return fake_users_db[email]
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")

# Models
class User(BaseModel):
    id: int
    name: str
    email: EmailStr
    role: str = "student"
    preferences: Optional[Dict[str, Any]] = None

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class Summary(BaseModel):
    id: Optional[int] = None
    user_email: str
    input_text: str
    summary_text: str
    tags: List[str] = []
    created_at: Optional[datetime] = None

# Authentication endpoints
@app.post("/auth/signup", response_model=dict)
def signup(user: UserCreate):
    if user.email in fake_users_db:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = get_password_hash(user.password)
    user_id = len(fake_users_db) + 1
    fake_users_db[user.email] = {
        "id": user_id,
        "name": user.name,
        "email": user.email,
        "hashed_password": hashed_password,
        "role": "student",
        "preferences": {}
    }
    return {"message": "User created successfully", "user_id": user_id}

@app.post("/auth/login", response_model=Token)
def login(user: UserLogin):
    if user.email not in fake_users_db:
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    
    db_user = fake_users_db[user.email]
    if not verify_password(user.password, db_user["hashed_password"]):
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

# Protected endpoints
@app.get("/me", response_model=User)
def get_me(current_user = Depends(get_current_user)):
    return User(
        id=current_user["id"],
        name=current_user["name"],
        email=current_user["email"],
        role=current_user["role"],
        preferences=current_user.get("preferences", {})
    )

@app.post("/summaries")
def create_summary(summary_data: dict, current_user = Depends(get_current_user)):
    new_summary = {
        "id": len(fake_summaries_db) + 1,
        "user_email": current_user["email"],
        "input_text": summary_data.get("input_text", ""),
        "summary_text": summary_data.get("summary_text", ""),
        "tags": summary_data.get("tags", []),
        "created_at": datetime.utcnow()
    }
    fake_summaries_db.append(new_summary)
    return {"message": "Summary saved", "summary": new_summary}

@app.get("/summaries")
def list_summaries(current_user = Depends(get_current_user)):
    user_summaries = [s for s in fake_summaries_db if s["user_email"] == current_user["email"]]
    return {"summaries": user_summaries}

# Health check
@app.get("/health")
def health_check():
    return {"status": "healthy", "timestamp": datetime.utcnow()}

# Add more endpoints for quizzes, flashcards, planner, progress, resources, notifications, admin as needed
