# Mock Interview Coach

An AI-powered interview practice tool that generates questions and gives instant feedback on your answers.

## Features
- 3 interview types: Behavioral, Technical, and Introduction
- AI-generated questions on every session
- Instant structured feedback with score, strengths, and improvements
- Clean single-page UI

## Tech Stack
- **Backend:** Python, FastAPI
- **AI:** OpenAI API (gpt-4o-mini)
- **Frontend:** HTML, CSS, Vanilla JS

## Getting Started

### 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/mock-interview-coach.git
cd mock-interview-coach

### 2. Create virtual environment
python3 -m venv venv
source venv/bin/activate

### 3. Install dependencies
pip install fastapi uvicorn openai python-dotenv aiofiles

### 4. Add your OpenAI API key
Create a `.env` file in the root:
OPENAI_API_KEY=your-key-here

### 5. Run the app
uvicorn app.main:app --reload

Open http://localhost:8000/ui