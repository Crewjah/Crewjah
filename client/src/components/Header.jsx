import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-white shadow-sm border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-900">Crewjah</span>
          <span className="text-sm text-purple-700 font-medium">Learning</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/study-timer" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
            Study Timer
          </Link>
          <Link to="/smart-notes" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
            Smart Notes
          </Link>
          <Link to="/flashcards" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
            Flashcards
          </Link>
          <Link to="/progress" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
            Progress
          </Link>
        </nav>

        {/* Help Link and Dashboard */}
        <div className="flex items-center space-x-4">
          <Link to="/help" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
            Help
          </Link>
          <Link to="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
