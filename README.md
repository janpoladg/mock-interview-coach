# Mock Interview Coach

An AI-powered interview practice tool that generates questions and gives instant feedback on your answers.

## Features

- Behavioral, Technical, and Introduction interview modes
- Junior / Intermediate / Senior difficulty levels
- Full multilingual UI (6 languages)
- Monaco code editor for technical interviews
- AI-generated interview questions
- Instant AI feedback with scoring and improvement tips
- Session history and statistics dashboard
- Dark / light theme support
 Timed mode with countdown timer and auto-submit

## Tech Stack
- **Backend:** Python, FastAPI
- **AI:** OpenAI API (gpt-4o-mini)
- **Frontend:** HTML, CSS, Vanilla JS

## Project Structure
```
mock-interview-coach/
├── app/
│   ├── main.py          # App setup and middleware
│   ├── database.py      # Database connection
│   ├── models.py        # Database tables
│   ├── schemas.py       # Request/response shapes
│   └── routes/
│       ├── interview.py # Question and feedback endpoints
│       ├── history.py   # Session history endpoint
│       └── stats.py     # Stats endpoint
├── static/
│   ├── index.html       # Frontend markup
│   ├── style.css        # Styles and theming
│   └── app.js           # All frontend logic      
└── .env                 # API keys (not committed)
```
## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/janpoladg/mock-interview-coach.git
cd mock-interview-coach
```
### 2. Create virtual environment
```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Add your OpenAI API key
Create a `.env` file in the root:
```
OPENAI_API_KEY=your-key-here
```

### 5. Run the app
```bash
uvicorn app.main:app --reload
```

Open http://localhost:8000/ui