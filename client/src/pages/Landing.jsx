

import { Link } from 'react-router-dom';


const Landing = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-gray-900 font-sans">
    {/* Navbar */}
    <nav className="w-full bg-white shadow-md border-b border-blue-100 py-6 px-0">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8">
        <span className="text-3xl font-extrabold tracking-tight text-blue-700">Crewjah</span>
        <div className="flex gap-10 text-lg font-semibold">
          <Link to="/" className="hover:underline underline-offset-4 transition-colors">Home</Link>
          <Link to="/features" className="hover:underline underline-offset-4 transition-colors">Features</Link>
          <Link to="/contact" className="hover:underline underline-offset-4 transition-colors">Contact</Link>
          <Link to="/signin" className="ml-4 px-4 py-1 border border-blue-400 text-blue-700 rounded-full hover:bg-blue-50 hover:underline underline-offset-4 transition-all">Sign In</Link>
        </div>
      </div>
    </nav>
    {/* Hero Section */}
    <main className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-16 bg-white rounded-3xl shadow-2xl p-12 animate-fadein">
        {/* Left: Hero Text */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-gray-900 leading-tight">
            Empower Your Learning with
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Crewjah AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10">Your all-in-one AI study assistant. Summarize notes, ask questions, plan your study, and track your progress—smarter, faster, together.</p>
          <div className="flex gap-6 mt-2">
            <Link to="/signup" className="px-10 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-full shadow-2xl hover:from-pink-500 hover:to-blue-500 transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400 text-xl">Get Started Free</Link>
            <Link to="/signin" className="px-10 py-5 bg-white border-2 border-blue-400 text-blue-700 font-bold rounded-full shadow hover:bg-blue-50 hover:text-blue-900 transform hover:scale-110 transition-all duration-300 text-xl">Sign In</Link>
          </div>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <img src="https://cdn.jsdelivr.net/gh/crewjah/assets@main/ai-education-illustration.svg" alt="AI Study Assistant" className="w-96 md:w-[32rem] drop-shadow-2xl" />
        </div>
      </div>
    </main>
    {/* Footer */}
    <footer className="w-full flex justify-center mt-10 mb-4">
      <div className="flex items-center gap-6 text-lg text-gray-500">
        <Link to="/privacy" className="hover:underline hover:text-blue-700">Privacy</Link>
        <span className="text-gray-300">•</span>
        <Link to="/terms" className="hover:underline hover:text-blue-700">Terms</Link>
        <span className="text-gray-300">•</span>
        <Link to="/contact" className="hover:underline hover:text-blue-700">Contact</Link>
        <span className="text-gray-300">•</span>
        <span>© {new Date().getFullYear()} Crewjah</span>
      </div>
    </footer>
  </div>
);

export default Landing;
