

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
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400">
    {/* Navbar */}
  <nav className="w-full max-w-4xl mx-auto flex items-center justify-between mt-8 mb-8 px-8 py-4 bg-white/80 rounded-3xl shadow-lg">
  <span className="text-2xl font-extrabold text-purple-700 drop-shadow-lg">Crewjah</span>
      <div className="flex gap-4 text-base font-medium items-center">
        <Link to="/signin" className="px-4 py-2 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 font-semibold transition">Sign In</Link>
        <Link to="/signup" className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 font-semibold transition">Sign Up</Link>
      </div>
    </nav>
    {/* Hero Section */}
    <main className="flex-1 w-full flex flex-col items-center justify-center px-2">
      <section className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center bg-white/80 rounded-3xl shadow-2xl p-10 mb-10">
        <h1 className="text-5xl font-extrabold mb-3 text-purple-700 text-center drop-shadow-lg">Empower Your Learning Journey</h1>
        <p className="text-lg text-teal-700 mb-8 text-center">Crewjah helps you master new skills, track your progress, and stay motivated every day.</p>
        <div className="flex gap-4 mb-8">
          <Link to="/signup" className="px-8 py-3 bg-purple-700 text-white font-bold rounded-xl shadow-lg hover:bg-purple-800 transition">Get Started</Link>
          <Link to="/signin" className="px-8 py-3 bg-teal-600 text-white font-bold rounded-xl shadow-lg hover:bg-teal-700 transition">Sign In</Link>
        </div>
        {/* Features Section - colorful cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full mb-10">
          {features.map((f, i) => (
            <div key={i} className={`rounded-2xl shadow-lg p-6 flex flex-col items-center ${i % 2 === 0 ? 'bg-gradient-to-br from-purple-200 via-blue-100 to-pink-100' : 'bg-gradient-to-br from-teal-200 via-purple-100 to-pink-100'}`}>
              <div className="text-2xl font-bold mb-2 text-purple-700 drop-shadow">{f.title}</div>
              <div className="text-teal-700 text-base">{f.desc}</div>
            </div>
          ))}
        </div>
        {/* How It Works Section */}
        <div className="w-full max-w-xl mx-auto mb-6">
          <h2 className="text-2xl font-bold mb-4 text-teal-700 text-center drop-shadow">How It Works</h2>
          <ol className="list-decimal list-inside text-purple-700 space-y-2 text-left text-lg">
            <li>Sign up, choose your learning path</li>
            <li>Get summary, resources & practice</li>
            <li>Track progress</li>
          </ol>
        </div>
      </section>
    </main>
    {/* Footer */}
    <footer className="w-full flex justify-center mt-10 mb-4">
      <div className="flex items-center gap-4 text-base text-teal-700">
        <Link to="/help" className="hover:underline">Docs</Link>
        <span className="text-purple-300">•</span>
        <Link to="/privacy" className="hover:underline">Privacy</Link>
        <span className="text-purple-300">•</span>
        <Link to="/terms" className="hover:underline">Terms</Link>
        <span className="text-purple-300">•</span>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <span className="text-purple-300">•</span>
        <span>© {new Date().getFullYear()} Crewjah</span>
      </div>
    </footer>
  </div>
);

export default Landing;
