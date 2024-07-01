from datetime import datetime
from pydantic import BaseModel, field_validator
from domain.answer.answer_schema import Answer


class Question(BaseModel):
    id: int
    subject:str
    content:str
    create_date:datetime
    answers:list[Answer]=[]

class QuestionList(BaseModel):
    total:int = 0
    question_list:list[Question] = []

class QuestionCreate(BaseModel):
    subject:str
    content:str

    @field_validator("subject", "content")
    def not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError("공백은 허용되지 않습니다.")
        
        return v
    
    
