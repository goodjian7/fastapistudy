# environment
python 3.12

# project startup 
- pip install fastapi uvicon alembic
- main.py 내용 입력
- models.py 내용 입력
- alembic init migrations
- alembic.ini 수정
  sqlalchemy.url = sqlite:///./myapi.db  
- migrations/env.py 수정
  import models  
  target_metadata = models.Base.metadata  
- alembic revision --autogenerate  
- alembic upgrade head
  db파일 생성  
- uvicorn main:app --reload
- localhost:8000/docs 접속
