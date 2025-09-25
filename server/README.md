# 🚀 Crewjah Backend API

Backend API service for the Crewjah learning platform. Currently in development phase with multiple implementation options available.

## 📊 Current Status

**Development Phase**: The frontend currently uses localStorage for data persistence. Backend API is being designed to replace this with proper database integration.

## 🏗️ Available Backend Options

### Option 1: Node.js + Express (Planned)
```bash
cd server
npm install
npm start
```

### Option 2: Python Flask (Available)
```bash
cd flask_backend
pip install -r requirements.txt
python app.py
```

### Option 3: Python FastAPI (Available)
```bash
cd fastapi_backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## 🎯 Planned API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### User Data
- `GET /api/users/stats` - Get user statistics
- `PUT /api/users/stats` - Update user statistics
- `GET /api/users/progress` - Get learning progress
- `POST /api/users/activity` - Log user activity

### Learning Content
- `GET /api/quiz/questions` - Get quiz questions
- `POST /api/quiz/submit` - Submit quiz answers
- `GET /api/flashcards` - Get flashcard sets
- `POST /api/flashcards/progress` - Update flashcard progress

### Email Verification
- `POST /api/auth/send-verification` - Send verification email
- `POST /api/auth/verify-email` - Verify email with OTP
- `POST /api/auth/resend-verification` - Resend verification

## 🔧 Development Setup

### Prerequisites
- Node.js 18+ OR Python 3.8+
- NPM or Yarn
- Database (PostgreSQL/MongoDB recommended)

### Environment Variables
```env
# Database
DATABASE_URL=your_database_url
DB_HOST=localhost
DB_PORT=5432
DB_NAME=crewjah
DB_USER=username
DB_PASSWORD=password

# Authentication
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

# Email Service
EMAIL_SERVICE=sendgrid
EMAIL_API_KEY=your_email_api_key
EMAIL_FROM=noreply@crewjah.com

# Server
PORT=5000
NODE_ENV=development
```

## 📁 Project Structure

```
server/
├── routes/          # API route handlers
├── models/          # Database models
├── middleware/      # Authentication, validation
├── utils/           # Helper functions
├── config/          # Configuration files
└── tests/           # API tests
```

## 🚀 Next Steps

1. **Choose Backend Technology**: Decide between Node.js, Flask, or FastAPI
2. **Database Setup**: Configure PostgreSQL or MongoDB
3. **Authentication**: Implement JWT-based authentication
4. **Data Migration**: Move localStorage data to database
5. **Email Integration**: Set up email verification system
6. **API Testing**: Comprehensive endpoint testing
7. **Deployment**: Docker containerization and cloud deployment

## 🤝 Contributing

See the main project README for contribution guidelines. Backend development follows:

- RESTful API design principles
- Proper error handling and validation
- Comprehensive API documentation
- Unit and integration testing
- Security best practices
