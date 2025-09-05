

import { Link } from 'react-router-dom';


const Landing = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-100 text-gray-900 font-sans">
    {/* Navbar */}
    <nav className="fixed top-0 left-0 right-0 w-full z-20 bg-white/90 shadow-md backdrop-blur border-b border-blue-100">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-2xl font-extrabold tracking-tight text-primary">Crewjah</span>
        <div className="flex gap-6 text-base font-medium">
          <Link to="/" className="hover:underline underline-offset-4 transition-colors">Home</Link>
          <Link to="/features" className="hover:underline underline-offset-4 transition-colors">Features</Link>
          <Link to="/contact" className="hover:underline underline-offset-4 transition-colors">Contact</Link>
          <Link to="/signin" className="ml-4 px-4 py-1 border border-primary text-primary rounded-full hover:bg-blue-50 hover:underline underline-offset-4 transition-all">Sign In</Link>
        </div>
      </div>
    </nav>
    {/* Spacer for navbar */}
    <div className="h-20" />
    {/* Hero Section */}
    <main className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-white/90 rounded-3xl shadow-xl p-8 md:p-14 animate-fadein">
        {/* Left: Hero Text */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">Empower Your Learning with <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Crewjah AI</span></h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">Your all-in-one AI study assistant. Summarize notes, ask questions, plan your study, and track your progress—smarter, faster, together.</p>
          <div className="flex gap-4 mt-2">
            <Link to="/signup" className="px-7 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primaryHover transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary animate-slidein">Get Started Free</Link>
            <Link to="/signin" className="px-7 py-3 bg-white border-2 border-primary text-primary font-bold rounded-full shadow hover:bg-blue-50 hover:text-primaryHover transform hover:scale-105 transition-all duration-200 animate-slidein delay-100">Sign In</Link>
          </div>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <img src="https://cdn.jsdelivr.net/gh/crewjah/assets@main/ai-education-illustration.svg" alt="AI Study Assistant" className="w-72 md:w-96 drop-shadow-xl animate-float" />
        </div>
      </div>
    </main>
    {/* Footer */}
    <footer className="w-full flex justify-center mt-10 mb-4">
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <Link to="/privacy" className="hover:underline hover:text-primary">Privacy</Link>
        <span className="text-gray-300">•</span>
        <Link to="/terms" className="hover:underline hover:text-primary">Terms</Link>
        <span className="text-gray-300">•</span>
        <Link to="/contact" className="hover:underline hover:text-primary">Contact</Link>
        <span className="text-gray-300">•</span>
        <span>© {new Date().getFullYear()} Crewjah</span>
      </div>
    </footer>
    {/* Animations */}
    <style>{`
      .animate-fadein { animation: fadein 1.2s cubic-bezier(.4,0,.2,1) both; }
      @keyframes fadein { from { opacity: 0; transform: translateY(40px) scale(0.98); } to { opacity: 1; transform: none; } }
      .animate-slidein { animation: slidein 1s cubic-bezier(.4,0,.2,1) both; }
      @keyframes slidein { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: none; } }
      .animate-float { animation: float 3s ease-in-out infinite alternate; }
      @keyframes float { 0% { transform: translateY(0); } 100% { transform: translateY(-18px); } }
    `}</style>
  </div>
);

export default Landing;
