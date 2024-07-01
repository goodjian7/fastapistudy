from models import Question
from sqlalchemy.orm import Session
from .question_schema import QuestionCreate
from datetime import datetime

def get_qeustion_list(db:Session, offset:int=0, limit:int=10):
    _question_list = db.query(Question).order_by(Question.id.desc())
    total=_question_list.count()
    question_list=_question_list.offset(offset).limit(limit).all()
    return total, question_list

def get_question(db:Session, question_id:int):
    _question = db.query(Question).get(question_id)
    return _question

def create_question(db:Session, question_create:QuestionCreate):
    _question = Question(subject=question_create.subject,
                         content=question_create.content,
                         create_date=datetime.now())    
    db.add(_question)
    db.commit()
