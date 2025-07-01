# app/crud/call_crud.py
from sqlalchemy.orm import Session
from app.models.call import Call
from app.schemas.call_schema import CallCreate

def create_call(db: Session, call: CallCreate):
    db_call = Call(**call.dict())
    db.add(db_call)
    db.commit()
    db.refresh(db_call)
    return db_call

def get_calls(db: Session):
    return db.query(Call).all()

def get_call_by_id(db: Session, call_id: int):
    return db.query(Call).filter(Call.id == call_id).first()
