# Crewjah Educational Platform

Crewjah is a modern educational platform designed to enhance learning experiences for students and lifelong learners. Built with authentic educational principles in mind, it provides a clean, professional interface focused on learning outcomes and user experience.

## Core Features

### User Interface
- Modern, responsive design built with React 18 and TailwindCSS
- Optimized animations and smooth user interactions
- Accessible design patterns following educational best practices
- Mobile-first responsive layout

### Educational Components
- Interactive landing page showcasing platform benefits
- Student dashboard for learning progress tracking
- Clean, distraction-free interface design
- Professional educational color scheme (blues, greens, slate)

### Technical Infrastructure
- React Single Page Application (SPA) with React Router
- FastAPI backend for scalable API services
- Vite build system for fast development and optimized production builds
- Professional deployment configuration for Vercel

## Application Structure

### Frontend Pages
- **Landing Page**: Platform introduction and feature overview
- **Dashboard**: Student learning interface and progress tracking
- **Authentication System**: User login and registration (structure ready)

### Backend Services
- **FastAPI Backend**: Main API service with modern Python async framework
- **Environment Configuration**: Secure configuration management
- **Database Ready**: Structured for educational data management

## Project Architecture

```
crewjah/
├── client/                 # React Frontend Application
│   ├── src/
│   │   ├── pages/         # Landing.jsx, Dashboard.jsx
│   │   ├── components/    # Reusable UI components
│   │   └── styles/        # TailwindCSS configuration
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js     # Build configuration
├── fastapi_backend/       # Python FastAPI Backend
│   ├── main.py           # API routes and application logic
│   ├── requirements.txt  # Python dependencies
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

## License

MIT License. See LICENSE file for complete terms.

## Support

For questions about the platform or technical issues, please open an issue on GitHub or contact the development team.

---

Built with care for education ❤️
