# Crewjah Flask Backend

This is a simple Flask backend for user authentication and dashboard API for the Crewjah educational website.

## Features
- User signup, login, logout
- Session-based authentication
- Protected dashboard and user info endpoints
- CORS enabled for React frontend

## Setup
1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Run the server:
   ```bash
   python app.py
   ```
3. The API will be available at `http://localhost:5000/api/`

## Endpoints
- `POST /api/signup` — Create account
- `POST /api/login` — Login
- `POST /api/logout` — Logout
- `GET /api/me` — Get current user info
- `GET /api/dashboard` — Get dashboard data

## Notes
- This backend uses in-memory storage for demo purposes. For production, use a database.
- Connect your React frontend to these endpoints for authentication and dashboard features.
