# Crewjah

>Crewjah is a modern, open-source educational platform for students and lifelong learners. It provides tools for studying, planning, tracking progress, quizzes, flashcards, and more, with a focus on privacy and accessibility.

## Features
- Modern, accessible UI (React + TailwindCSS)
- AI-powered Q&A and note summarization
- Study planner, progress tracker, quizzes, flashcards
- Export notes and progress
- Privacy-first: your data is never sold

## Sitemap
**Visitor (not logged in):**
- Landing/Home (marketing)
- Sign In
- Sign Up
- Forgot Password
- Privacy • Terms • Contact

**Logged-in Student:**
- Dashboard (app home)
- Ask Anything (Q&A)
- Summarize Text
- Summarize Code
- Study Resources
- Take a Quiz
- Flashcards
- Daily Challenge
- Study Planner
- Progress Tracker
- Download Notes
- Accessibility Settings
- Profile & Settings
- Help / Usage Guide

## Project Structure
- `client/` — React frontend (Vite, TailwindCSS)
- `server/` — Node.js/Express backend (legacy/demo)
- `flask_backend/` — Flask backend (legacy/demo)
- `fastapi_backend/` — FastAPI backend (main API)

## Getting Started

### Frontend (client)
1. Install dependencies:
   ```bash
   cd client
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

### FastAPI Backend (main)
1. Install dependencies:
   ```bash
   cd fastapi_backend
   pip install -r requirements.txt
   ```
2. Start server:
   ```bash
   uvicorn main:app --reload
   ```
3. API available at `http://localhost:8000`

## Contributing
Contributions are welcome! Please open issues or pull requests for improvements, features, or bug fixes.

## License
MIT License. See [LICENSE](LICENSE) for details.

---
Made with ❤️ by the Crewjah open source community.
