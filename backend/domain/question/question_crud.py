from models import Question
from sqlalchemy.orm import Session
from .question_schema import QuestionCreate
from datetime import datetime

def get_qeustion_list(db:Session):
    question_list = db.query(Question).order_by(Question.create_date.desc()).all()
    return question_list

def get_question(db:Session, question_id:int):
    _question = db.query(Question).get(question_id)
    return _question

def create_question(db:Session, question_create:QuestionCreate):
    _question = Question(subject=question_create.subject,
                         content=question_create.content,
                         create_date=datetime.now())    
    db.add(_question)
    db.commit()
