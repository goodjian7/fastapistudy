from models import Question
from sqlalchemy.orm import Session

def get_qeustion_list(db:Session):
    question_list = db.query(Question).order_by(Question.create_date.desc()).all()
    return question_list

def get_question(db:Session, question_id:int):
    _question = db.query(Question).get(question_id)
    return _question