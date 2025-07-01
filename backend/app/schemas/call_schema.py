# app/schemas/call_schema.py
from pydantic import BaseModel
from datetime import datetime

class CallCreate(BaseModel):
    filename: str
    transcript: str

class CallResponse(BaseModel):
    id: int
    filename: str
    transcript: str
    created_at: datetime

    class Config:
        orm_mode = True
