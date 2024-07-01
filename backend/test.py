from models import Question
from datetime import datetime
from database import SessionLocal

if __name__ == "__main__":
    db = SessionLocal()
    for i in range(300):
        q = Question(\
                subject=f"{i}th question",\
                content=f"content of {i}th question",\
                create_date=datetime.now())
        
        db.add(q)

    db.commit()
    db.close()
        
    