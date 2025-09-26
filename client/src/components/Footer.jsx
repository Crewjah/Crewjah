import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-50 border-t border-gray-200">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-xl font-bold text-gray-900">Crewjah</span>
            <span className="text-sm text-purple-700 font-medium">Learning Platform</span>
          </div>
          <p className="text-gray-600 text-sm max-w-md">
            Empowering students and lifelong learners with AI-powered educational tools. 
            Learn smarter, not harder.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
            Platform
          </h3>
          <ul className="space-y-2">
            <li><Link to="/study-assistant" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Study Assistant</Link></li>
            <li><Link to="/smart-notes" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Smart Notes</Link></li>
            <li><Link to="/flashcards" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Flashcards</Link></li>
            <li><Link to="/progress" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Study Progress</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
            Support
          </h3>
          <ul className="space-y-2">
            <li><Link to="/help" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Help Center</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Contact</Link></li>
            <li><span className="text-gray-600 text-sm">Report Issue</span></li>
            <li><span className="text-gray-600 text-sm">Feedback</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 text-sm text-gray-600">
            <Link to="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-gray-500">
            © {new Date().getFullYear()} Crewjah. Professional learning platform for students.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
