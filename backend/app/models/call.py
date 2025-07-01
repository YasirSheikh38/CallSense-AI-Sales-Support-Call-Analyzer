from sqlalchemy import Column, Integer, String, Text, DateTime
from app.database import Base
from datetime import datetime, timezone

class Call(Base):
    __tablename__ = "calls"

    id = Column(Integer, primary_key=True, index=True)
    filename = Column(String, nullable=False)
    transcript = Column(Text, nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
