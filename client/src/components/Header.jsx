import { Link } from 'react-router-dom';

const Header = () => (
  <header className="w-full flex items-center justify-between px-8 py-4 bg-white/80 rounded-3xl shadow-lg mb-8 z-10 relative">
    <Link to="/" className="flex items-center gap-3">
      <img src="/vite.svg" alt="Crewjah Logo" className="h-10" />
      <span className="font-extrabold text-2xl text-purple-700 drop-shadow-lg">Crewjah</span>
    </Link>
  <Link to="/signup" className="px-6 py-2 bg-purple-700 text-white rounded-xl shadow-lg hover:bg-purple-800 font-bold transition">Get Started</Link>
  </header>
);

export default Header;
