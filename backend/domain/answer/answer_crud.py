from models import Question, Answer
from sqlalchemy.orm import Session
from .answer_schema import AnswerCreate
from datetime import datetime

def create_answer(db:Session, question:Question, answer_create:AnswerCreate):
    _answer = Answer(question=question, content=answer_create.content, create_date=datetime.now())
    db.add(_answer)
    db.commit()    
    return _answer
