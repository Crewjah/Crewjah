import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-white shadow-sm border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-purple-700">🎓</span>
          <span className="text-xl font-bold text-gray-900">Crewjah</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
            Dashboard
          </Link>
          <Link to="/study-assistant" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
            Study Assistant
          </Link>
          <Link to="/smart-notes" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
            Smart Notes
          </Link>
          <Link to="/quiz" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
            Practice Tests
          </Link>
          <Link to="/flashcard-generator" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
            Flashcards
          </Link>
        </nav>

        {/* User Menu */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
            Profile
          </Link>
          <Link to="/signin" className="text-purple-600 hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors">
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
