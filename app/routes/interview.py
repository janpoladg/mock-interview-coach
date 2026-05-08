from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from openai import OpenAI
from dotenv import load_dotenv
import os
import re
from app.database import get_db
from app.database import SessionLocal
from app.models import InterviewSession
from app.schemas import AnswerRequest

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

router = APIRouter()



def build_question_prompt(interview_type: str) -> str:
    prompts = {
        "behavioral": "Generate a single behavioral interview question that tests teamwork, leadership, or handling failure. Just the question, nothing else.",
        "technical": "Generate a single beginner to intermediate technical interview question about Python, data structures, or algorithms. Just the question, nothing else.",
        "intro": "Generate a single interview question from the 'getting to know you' category — like 'tell me about yourself' or 'why do you want this role'. Just the question, nothing else.",
    }
    return prompts.get(interview_type, "Generate a general interview question.")

def build_feedback_prompt(question: str, answer: str, interview_type: str) -> str:
    return f"""
You are an expert interview coach. A candidate just answered an interview question.

Interview type: {interview_type}
Question: {question}
Candidate's answer: {answer}

Give structured feedback with these sections:
1. Score (X/10)
2. What was good
3. What could be improved
4. A better example answer

Be encouraging but honest. Keep it concise.
"""

@router.get("/question/{interview_type}")
def get_question(interview_type: str):
    if interview_type not in ["behavioral", "technical", "intro"]:
        return {"error": "Invalid type. Choose: behavioral, technical, intro"}

    prompt = build_question_prompt(interview_type)

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are an interview question generator."},
            {"role": "user", "content": prompt}
        ]
    )

    question = response.choices[0].message.content.strip()
    return {"interview_type": interview_type, "question": question}

@router.post("/feedback")
def get_feedback(body: AnswerRequest, db: Session = Depends(get_db)):
    prompt = build_feedback_prompt(body.question, body.answer, body.interview_type)

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are an expert interview coach."},
            {"role": "user", "content": prompt}
        ]
    )

    feedback = response.choices[0].message.content.strip()
    score_match = re.search(r'(\d+)/10', feedback)
    score = int(score_match.group(1)) if score_match else 0

    new_session = InterviewSession(
        interview_type=body.interview_type,
        question=body.question,
        answer=body.answer,
        feedback=feedback,
        score=score
    )

    db.add(new_session)
    db.commit()

    return {
        "question": body.question,
        "your_answer": body.answer,
        "feedback": feedback
    }