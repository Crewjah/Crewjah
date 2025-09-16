

import { Link } from 'react-router-dom';



const badges = [
  { label: "Privacy-first", color: "bg-blue-100 text-blue-700" },
  { label: "No ads", color: "bg-green-100 text-green-700" },
  { label: "Beginner friendly", color: "bg-yellow-100 text-yellow-700" }
];

const features = [
  { title: "Ask Anything", desc: "Instant answers with references" },
  { title: "Summarize Text & Code", desc: "Turn long content into key points" },
  { title: "Quiz & Flashcards", desc: "Practice and remember more" },
  { title: "Planner & Progress", desc: "Stay consistent and see growth" }
];

const Landing = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-600 via-purple-200 to-cyan-200 text-gray-900 font-sans">
    {/* Navbar */}
    <nav className="fixed top-0 left-0 right-0 w-full z-20 bg-white/90 shadow-md backdrop-blur border-b border-blue-100">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          {/* Logo removed as requested */}
          <span className="text-2xl font-extrabold tracking-tight text-blue-700">Crewjah</span>
        </div>
        <div className="flex gap-6 text-base font-medium">
          <Link to="/" className="hover:text-blue-700 transition-colors">Home</Link>
          <Link to="/features" className="hover:text-blue-700 transition-colors">Features</Link>
          <Link to="/contact" className="hover:text-blue-700 transition-colors">Contact</Link>
          <Link to="/signin" className="ml-4 px-4 py-1 border border-blue-700 text-blue-700 rounded-full hover:bg-blue-50 hover:underline underline-offset-4 transition-all">Sign In</Link>
        </div>
      </div>
    </nav>
    {/* Spacer for navbar */}
  <div className="h-24" />
    {/* Hero Section */}
  <main className="flex-1 flex flex-col items-center justify-center px-2">
  <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-gradient-to-br from-white via-blue-100 to-purple-200 rounded-3xl shadow-2xl p-8 md:p-14 animate-fadein">
        {/* Left: Hero Text */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900 leading-tight">Learn smarter with <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">AI</span></h1>
          <p className="text-lg md:text-xl text-blue-800 mb-8">Your all-in-one study assistant — ask anything, summarize notes & code, and track progress.</p>
          <div className="flex gap-4 mt-2">
            <Link to="/signup" className="px-7 py-3 bg-gradient-to-r from-blue-700 to-purple-500 text-white font-bold rounded-full shadow-lg hover:from-blue-800 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 animate-slidein">Get Started — Free</Link>
            <Link to="/signin" className="px-7 py-3 bg-white border-2 border-purple-500 text-purple-700 font-bold rounded-full shadow hover:bg-purple-50 hover:text-purple-800 transform hover:scale-105 transition-all duration-200 animate-slidein delay-100">Sign In</Link>
          </div>
          {/* Trust Badges */}
          <div className="flex gap-3 mt-6">
            {badges.map(b => (
              <span key={b.label} className={`px-3 py-1 rounded-full text-xs font-semibold shadow ${b.color} border border-blue-200`}>{b.label}</span>
            ))}
          </div>
        </div>
        {/* Right: Logo Illustration removed as requested */}
        <div className="flex-1 flex items-center justify-center">
          {/* Logo removed. Add illustration or leave empty. */}
        </div>
      </div>
      {/* Feature Cards */}
  <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-8">
        {features.map((f, i) => (
          <div key={f.title} className={`rounded-xl shadow-lg p-6 flex flex-col items-start border-2 ${i%2===0 ? 'bg-gradient-to-br from-blue-100 via-white to-purple-100 border-blue-200' : 'bg-gradient-to-br from-purple-100 via-white to-blue-100 border-purple-200'}`}>
            <div className="text-lg font-bold mb-2 text-blue-700">{f.title}</div>
            <div className="text-gray-700 text-sm">{f.desc}</div>
          </div>
        ))}
      </div>
      {/* How it works */}
  <div className="w-full max-w-3xl bg-gradient-to-br from-white via-blue-100 to-purple-100 rounded-2xl shadow-lg p-8 mb-12 border-2 border-blue-200">
  <h2 className="text-2xl font-bold mb-4 text-blue-700">How it works</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Paste text or pick a topic</li>
          <li>Get summary, resources & practice</li>
          <li>Track progress over time</li>
        </ol>
      </div>
    </main>
    {/* Footer */}
    <footer className="w-full flex justify-center mt-10 mb-4">
      <div className="flex items-center gap-4 text-sm text-blue-700">
        <Link to="/help" className="hover:underline">Docs</Link>
        <span className="text-blue-300">•</span>
        <a href="https://github.com/Crewjah/Crewjah/issues" target="_blank" rel="noopener noreferrer" className="hover:underline">Issues</a>
        <span className="text-blue-300">•</span>
        <a href="https://github.com/Crewjah/Crewjah" target="_blank" rel="noopener noreferrer" className="hover:underline">Contribute</a>
        <span className="text-blue-300">•</span>
        <Link to="/privacy" className="hover:underline">Privacy</Link>
        <span className="text-blue-300">•</span>
        <Link to="/terms" className="hover:underline">Terms</Link>
        <span className="text-blue-300">•</span>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <span className="text-blue-300">•</span>
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
