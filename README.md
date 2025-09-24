# Crewjah Educational Platform

A comprehensive educational platform built with modern web technologies, designed to provide an engaging and effective learning experience. Crewjah combines interactive learning tools, progress tracking, and AI-powered features to create a complete educational ecosystem.

## Overview

Crewjah is a full-stack educational application that offers multiple learning modalities including quizzes, flashcards, daily challenges, and AI-powered study assistance. The platform features a clean, responsive design optimized for both desktop and mobile learning experiences.

## Key Features

### Learning Tools
- **Interactive Quizzes**: Multiple-choice questions across various subjects with difficulty levels
- **Flashcard System**: Spaced repetition learning with customizable decks
- **Daily Challenges**: Engaging daily problems to maintain learning momentum
- **Progress Tracking**: Comprehensive statistics and learning analytics
- **AI Study Assistant**: Text summarization and code analysis tools

### User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean interface built with React 18 and TailwindCSS
- **Smooth Animations**: Enhanced user interactions with Framer Motion
- **Accessibility**: WCAG compliant design patterns
- **Real-time Feedback**: Instant scoring and progress updates

### Technical Features
- **Single Page Application**: Fast navigation with React Router
- **Component Architecture**: Modular, reusable UI components
- **State Management**: Efficient data flow and user session handling
- **API Integration**: RESTful backend services with FastAPI
- **Build Optimization**: Production-ready builds with Vite

## Technology Stack

### Frontend
- **React 18.2.0**: Modern JavaScript framework with hooks
- **React Router DOM 7.8.2**: Client-side routing and navigation
- **TailwindCSS 3.3.3**: Utility-first CSS framework
- **Framer Motion 12.23.15**: Animation and gesture library
- **Vite 7.1.2**: Fast build tool and development server

### Backend
- **FastAPI 0.104.1**: High-performance Python web framework
- **Uvicorn 0.24.0**: ASGI server for production deployment
- **Pydantic 2.5.0**: Data validation and settings management
- **Python-Jose**: JWT token handling for authentication
- **Passlib**: Password hashing and security

### Development Tools
- **ESLint**: Code quality and consistency
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: Cross-browser CSS compatibility

## Project Structure

```
crewjah/
├── client/                     # React Frontend Application
│   ├── src/
│   │   ├── pages/             # Main application pages
│   │   │   ├── Landing.jsx    # Marketing and feature overview
│   │   │   ├── Dashboard.jsx  # User dashboard and stats
│   │   │   ├── Quiz.jsx       # Interactive quiz system
│   │   │   ├── Flashcards.jsx # Spaced repetition learning
│   │   │   ├── DailyChallenge.jsx # Daily learning challenges
│   │   │   ├── SignIn.jsx     # User authentication
│   │   │   ├── SignUp.jsx     # User registration
│   │   │   ├── StudyPlanner.jsx # Learning schedule management
│   │   │   ├── ProgressTracker.jsx # Analytics and insights
│   │   │   └── [Additional Pages] # Support, help, settings
│   │   ├── components/        # Reusable UI components
│   │   │   ├── ui/           # Core UI components (Button, Card, Input)
│   │   │   ├── auth/         # Authentication components
│   │   │   ├── dashboard/    # Dashboard-specific components
│   │   │   ├── quiz/         # Quiz functionality components
│   │   │   ├── flashcards/   # Flashcard system components
│   │   │   └── landing/      # Landing page components
│   │   ├── constants/        # Configuration and data
│   │   │   ├── designSystem.js # UI design tokens
│   │   │   ├── quizConstants.js # Quiz questions and config
│   │   │   ├── dashboardConstants.js # Dashboard data
│   │   │   └── [Feature Constants] # Feature-specific data
│   │   ├── hooks/            # Custom React hooks
│   │   ├── utils/            # Utility functions
│   │   └── styles/           # Global styles and themes
│   ├── package.json          # Frontend dependencies
│   ├── vite.config.js        # Build configuration
│   ├── tailwind.config.js    # TailwindCSS configuration
│   └── postcss.config.js     # PostCSS configuration
├── fastapi_backend/           # Python FastAPI Backend
│   ├── main.py               # API routes and application logic
│   ├── requirements.txt      # Python dependencies
│   └── [Additional Backend Files] # Models, services, utilities
├── flask_backend/            # Alternative Flask backend
├── server/                   # Additional server configurations
├── setup.ps1                # Windows setup script
├── setup.sh                 # Unix setup script
├── start-all.sh             # Development startup script
└── vercel.json              # Deployment configuration
│   └── .env.example      # Environment configuration template
├── setup.ps1             # Windows PowerShell setup script
├── setup.sh              # Linux/Unix setup script
├── vercel.json           # Deployment configuration
└── package.json          # Project scripts and metadata
```

## Technology Stack

### Frontend
- **React 18.2.0**: Modern component-based UI framework
- **Vite 7.1.5**: Fast build tool and development server
- **TailwindCSS 3.3.3**: Utility-first CSS framework
- **Framer Motion 12.23.15**: Smooth animations and transitions
- **React Router DOM**: Client-side routing

### Backend
- **FastAPI**: Modern Python web framework for APIs
- **Uvicorn**: ASGI server for production deployment
- **Environment Variables**: Secure configuration management

### Development Tools
- **ESLint**: Code linting and style enforcement
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: Cross-browser CSS compatibility

## Getting Started

### Prerequisites
- Node.js 16+ and npm
- Python 3.8+ and pip
- Git for version control

### Quick Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Crewjah/Crewjah.git
   cd Crewjah
   ```

2. **Run Setup Scripts**
   
   **Windows (PowerShell):**
   ```powershell
   .\setup.ps1
   ```
   
   **Linux/macOS:**
   ```bash
   chmod +x setup.sh && ./setup.sh
   ```

3. **Start Development Environment**
   ```bash
   npm run dev
   ```

4. **Access Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

### Manual Installation

**Frontend Setup:**
```bash
cd client
npm install
npm run dev
```

**Backend Setup:**
```bash
cd fastapi_backend
pip install -r requirements.txt
cp .env.example .env
uvicorn main:app --reload
```

## Build and Deployment

### Local Build
```bash
npm run build    # Builds the client application
npm run start    # Serves production build locally
```

### Production Deployment
The application is configured for deployment on Vercel with automatic builds from the GitHub repository. The `vercel.json` configuration handles:
- React SPA routing
- Static file optimization
- Build process automation

## Development Workflow

### Code Quality
- Authentic educational content (no fake testimonials or statistics)
- Performance-optimized animations
- Clean, maintainable code structure
- Professional UI/UX design patterns

### Version Control
- Separate commits for each component
- Descriptive commit messages
- Clean Git history
- Proper .gitignore configuration

## Project Status

### Completed Features
- Modern React frontend with educational UI design
- FastAPI backend structure with environment configuration
- Responsive landing page with authentic content
- Student dashboard with clean interface
- Optimized build and deployment configuration
- Professional development workflow setup

### Current Development Focus
- Educational content management system
- User authentication and authorization
- Learning progress tracking features
- Interactive educational tools

## Contributing

We welcome contributions to improve the educational experience. Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes with authentic educational content
4. Test your changes thoroughly
5. Submit a pull request with clear description

### Development Guidelines
- Maintain authentic educational content
- Follow existing code style and patterns
- Ensure responsive design compatibility
- Test across different devices and browsers
- Document any new features or changes

## Available Scripts

### Frontend (Client)
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint for code quality
```

### Backend (FastAPI)
```bash
uvicorn main:app --reload    # Start development server
uvicorn main:app --host 0.0.0.0 --port 8000    # Production server
```

## API Documentation

When the FastAPI backend is running, interactive API documentation is available at:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## Environment Configuration

Create a `.env` file in the fastapi_backend directory:
```env
SECRET_KEY=your-secret-key-here
DATABASE_URL=sqlite:///./crewjah.db
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Performance Optimization

The application implements several performance optimizations:
- Code splitting with React.lazy()
- Image lazy loading
- CSS optimization with TailwindCSS purging
- Bundle optimization with Vite
- Responsive images and media queries

## License

MIT License. See LICENSE file for complete terms.

## Support

For questions about the platform or technical issues:
- Open an issue on GitHub
- Review existing documentation
- Check the API documentation for backend queries

## Acknowledgments

This project uses open-source technologies and follows modern web development best practices to create an effective educational platform.

---

Built with modern web technologies for effective education.
