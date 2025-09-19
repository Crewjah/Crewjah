# Crewjah FastAPI Backend

This is the backend API for the Crewjah educational platform, built with FastAPI.

## Features
- User authentication (signup, login)
- User profile and preferences
- Summaries (save, list)
- Extendable for quizzes, flashcards, planner, progress, resources, notifications, admin

## Setup
1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Run the server:
   ```bash
   uvicorn main:app --reload
   ```
3. The API will be available at `http://localhost:8000`

## Example Endpoints
- `POST /auth/signup` — Create account
- `POST /auth/login` — Login
- `GET /me` — Get current user info
- `POST /summaries` — Save summary
- `GET /summaries?user_id=1` — List summaries for user

Extend with more endpoints for quizzes, flashcards, planner, progress, resources, notifications, and admin as needed.

---
Made with ❤️ by the Crewjah open source community.
