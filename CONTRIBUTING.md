# 🤝 Contributing to Crewjah

Thank you for your interest in contributing to Crewjah! This guide will help you get started with contributing to our modern learning platform.

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [Getting Started](#-getting-started)
- [Development Setup](#-development-setup)
- [Project Structure](#-project-structure)
- [Coding Standards](#-coding-standards)
- [Commit Guidelines](#-commit-guidelines)
- [Pull Request Process](#-pull-request-process)
- [Testing](#-testing)

## 🎯 Code of Conduct

This project adheres to a friendly, inclusive environment. Please be respectful, constructive, and helpful in all interactions.

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **Git** for version control
- **Code Editor** (VS Code recommended)
- **Browser** for testing (Chrome/Firefox recommended)

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/Crewjah/Crewjah.git
cd Crewjah

# Install dependencies
cd client
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

## 🏗️ Development Setup

### Environment Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/Crewjah/Crewjah.git
   ```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Development Workflow

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Test your changes** locally

4. **Commit your changes** using conventional commits

5. **Push to your fork** and create a pull request

## 📁 Project Structure

```
client/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # Core UI components
│   │   ├── auth/            # Authentication components
│   │   ├── dashboard/       # Dashboard components
│   │   └── landing/         # Landing page components
│   ├── pages/               # Route components
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── constants/           # Configuration and data
│   └── styles/              # Global styles
├── public/                  # Static assets
└── package.json            # Dependencies and scripts
```

## ✨ Coding Standards

### React Component Guidelines

```jsx
// ✅ Good: Functional components with proper naming
const UserProfile = ({ user, onUpdate }) => {
  const [loading, setLoading] = useState(false);
  
  return (
    <div className="user-profile">
      {/* Component content */}
    </div>
  );
};

export default UserProfile;
```

### Styling Guidelines

- **Use Tailwind CSS** for styling
- **Mobile-first approach** with responsive design
- **Consistent spacing** using Tailwind's spacing scale
- **Semantic class names** for custom CSS

```jsx
// ✅ Good: Mobile-first responsive design
<div className="w-full p-4 sm:p-6 lg:p-8 
                bg-white rounded-xl shadow-lg
                hover:shadow-xl transition-all duration-300">
```

### File Naming Conventions

- **Components**: PascalCase (`UserProfile.jsx`)
- **Hooks**: camelCase with "use" prefix (`useUserData.js`)
- **Utils**: camelCase (`formatDate.js`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINTS.js`)

### Code Organization

```jsx
// Component structure order:
// 1. Imports
// 2. Component definition
// 3. Props destructuring
// 4. State and hooks
// 5. Event handlers
// 6. useEffect hooks
// 7. Render logic
// 8. Export

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

const MyComponent = ({ initialValue, onSubmit }) => {
  const [value, setValue] = useState(initialValue);
  
  const handleSubmit = () => {
    onSubmit(value);
  };
  
  useEffect(() => {
    // Side effects
  }, []);
  
  return (
    <div>
      {/* JSX content */}
    </div>
  );
};

export default MyComponent;
```

## 📝 Commit Guidelines

We use **Conventional Commits** for clear commit messages:

### Commit Types

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code formatting (no logic changes)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### Examples

```bash
feat: add user profile editing functionality
fix: resolve mobile navigation menu bug
docs: update API documentation
style: format authentication components
refactor: extract reusable form validation hook
test: add unit tests for quiz component
chore: update dependencies to latest versions
```

### Commit Message Format

```
type(scope): description

More detailed explanation if needed.

- List of changes
- Can include multiple points
- Keep lines under 72 characters
```

## 🔍 Pull Request Process

### Before Submitting

1. **Sync with upstream**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run tests and linting**:
   ```bash
   npm run lint
   npm run build  # Ensure no build errors
   ```

3. **Test your changes** on different screen sizes

### PR Guidelines

- **Clear title and description** explaining the changes
- **Link related issues** using "Fixes #123" or "Closes #123"
- **Include screenshots** for UI changes
- **Keep PRs focused** - one feature or fix per PR
- **Update documentation** if needed

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] All existing tests pass
- [ ] Added tests for new functionality

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors or warnings
```

## 🧪 Testing

### Manual Testing

1. **Desktop browsers**: Chrome, Firefox, Safari
2. **Mobile devices**: iOS Safari, Android Chrome
3. **Screen sizes**: 320px to 1920px width
4. **Accessibility**: Keyboard navigation, screen readers

### Component Testing

When creating components, test:
- **Different props and states**
- **Loading and error states**
- **Responsive behavior**
- **Accessibility features**

### Before Submitting

```bash
# Check for build errors
npm run build

# Check for linting errors  
npm run lint

# Test on localhost:5173
npm run dev
```

## 🐛 Reporting Issues

### Bug Reports

Include:
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Browser and device info**
- **Screenshots if applicable**
- **Console errors**

### Feature Requests

Include:
- **Clear description** of the feature
- **Use case** and benefits
- **Mockups or examples** if applicable

## 💡 Development Tips

### Recommended Tools

- **VS Code Extensions**:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - Prettier - Code formatter
  - ESLint

### Debugging

- Use **React Developer Tools** browser extension
- Check **browser console** for errors
- Use **Tailwind debugging** with border classes
- Test **responsive design** with browser dev tools

### Performance

- **Optimize images** before adding to public folder
- **Use lazy loading** for heavy components
- **Minimize bundle size** by avoiding unnecessary imports
- **Test on slower devices** and connections

## 🎉 Recognition

Contributors will be:
- **Listed in the README** contributors section
- **Mentioned in release notes** for significant contributions
- **Invited to collaborate** on future features

## 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and general help
- **Discord/Slack**: Community chat (if available)

---

Thank you for contributing to Crewjah! Every contribution, no matter how small, helps make this project better. 🚀