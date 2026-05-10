from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from openai import OpenAI
from dotenv import load_dotenv
import os
import re
from app.database import get_db
from app.database import SessionLocal
from app.models import InterviewSession
from app.schemas import AnswerRequest, QuestionRequest
from typing import Optional

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

router = APIRouter()


def build_question_prompt(interview_type: str, difficulty: str = "intermediate", language: str = "English", cv_text: Optional[str] = None, job_description: Optional[str] = None) -> str:
    
    context = ""
    if cv_text or job_description:
        context = "\n\nAdditional context to personalize the question:"
        if cv_text:
            context += f"\nCandidate CV: {cv_text[:1000]}"
        if job_description:
            context += f"\nJob description: {job_description[:500]}"
        context += "\nUse this context to make the question specific and relevant to this candidate and role."

    prompts = {
        "behavioral": f"Generate a single {difficulty} level behavioral interview question that tests teamwork, leadership, or handling failure. Just the question, nothing else. In {language} language.{context}",
        "technical": f"Generate a single {difficulty} level technical interview question about Python, data structures, or algorithms. Just the question, nothing else. In {language} language.{context}",
        "intro": f"Generate a single {difficulty} level interview question from the 'getting to know you' category. Just the question, nothing else. In {language} language.{context}",
    }
    return prompts.get(interview_type, f"Generate a {difficulty} level general interview question. In {language} language.{context}")

def build_feedback_prompt(question: str, answer: str, interview_type: str, language: str = "English") -> str:
    return f"""
You are an expert interview coach. A candidate just answered an interview question.

Interview type: {interview_type}
Question: {question}
Candidate's answer: {answer}

Give structured feedback with these sections, in this {language}:
1. Score (X/10)
2. What was good
3. What could be improved
4. A better example answer

Be encouraging but honest. Keep it concise.
"""

@router.post("/question")
def get_question(body: QuestionRequest):
    if body.interview_type not in ["behavioral", "technical", "intro"]:
        return {"error": "Invalid type. Choose: behavioral, technical, intro"}

    prompt = build_question_prompt(body.interview_type, body.difficulty, body.language, body.cv_text, body.job_description)

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are an interview question generator."},
            {"role": "user", "content": prompt}
        ]
    )

    question = response.choices[0].message.content.strip()
    return {"interview_type": body.interview_type, "question": question}

@router.post("/feedback")
def get_feedback(body: AnswerRequest, db: Session = Depends(get_db)):
    prompt = build_feedback_prompt(body.question, body.answer, body.interview_type, body.language)

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