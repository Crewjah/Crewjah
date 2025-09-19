

import React from 'react';
import { motion } from 'framer-motion';
import crewjahLogo from '../public/crewjah-logo.png';

const features = [
  {
    title: 'Ask Anything',
    desc: 'Instant answers with references',
    color: 'from-blue-200 via-purple-100 to-pink-100'
  },
  {
    title: 'Summarize Text & Code',
    desc: 'Turn long content into key points',
    color: 'from-teal-200 via-purple-100 to-pink-100'
  },
  {
    title: 'Quiz & Flashcards',
    desc: 'Practice and remember more',
    color: 'from-pink-200 via-blue-100 to-purple-100'
  },
  {
    title: 'Planner & Progress',
    desc: 'Stay consistent and see growth',
    color: 'from-purple-200 via-teal-100 to-blue-100'
  }
];

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400">
      {/* Header with logo */}
      <header className="w-full max-w-4xl mx-auto flex items-center justify-between mt-8 mb-8 px-8 py-4 bg-white/80 rounded-3xl shadow-lg">
        <div className="flex items-center gap-3">
          <img src={crewjahLogo} alt="Crewjah Logo" className="h-12 w-12 rounded-full shadow" />
          <span className="text-2xl font-extrabold text-purple-700 drop-shadow-lg">Crewjah</span>
        </div>
        <div className="flex gap-4 text-base font-medium items-center">
          <a href="/signin" className="px-4 py-2 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 font-semibold transition">Sign In</a>
          <a href="/signup" className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 font-semibold transition">Get Started — Free</a>
        </div>
      </header>

      {/* Hero Section with animation */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center bg-white/80 rounded-3xl shadow-2xl p-10 mb-10"
      >
        <h1 className="text-5xl font-extrabold mb-3 text-purple-700 text-center drop-shadow-lg">Learn smarter with AI</h1>
        <p className="text-lg text-teal-700 mb-8 text-center">Your all-in-one study assistant — ask anything, summarize notes & code, and track progress.</p>
        <div className="flex gap-4 mb-8">
          <a href="/signup" className="px-8 py-3 bg-purple-700 text-white font-bold rounded-xl shadow-lg hover:bg-purple-800 transition">Get Started — Free</a>
          <a href="/signin" className="px-8 py-3 bg-teal-600 text-white font-bold rounded-xl shadow-lg hover:bg-teal-700 transition">Sign In</a>
        </div>
        {/* Trust / Highlights */}
        <div className="flex gap-6 mb-8">
          <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-semibold shadow">Privacy-first</span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold shadow">No ads</span>
          <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-semibold shadow">Beginner friendly</span>
        </div>
        {/* Features Section - animated cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full mb-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className={`rounded-2xl shadow-lg p-6 flex flex-col items-center bg-gradient-to-br ${f.color}`}
            >
              <div className="text-2xl font-bold mb-2 text-purple-700 drop-shadow">{f.title}</div>
              <div className="text-teal-700 text-base">{f.desc}</div>
            </motion.div>
          ))}
        </div>
        {/* How It Works Section */}
        <div className="w-full max-w-xl mx-auto mb-6">
          <h2 className="text-2xl font-bold mb-4 text-teal-700 text-center drop-shadow">How It Works</h2>
          <ol className="list-decimal list-inside text-purple-700 space-y-2 text-left text-lg">
            <li>Paste text or pick a topic</li>
            <li>Get summary, resources & practice</li>
            <li>Track progress over time</li>
          </ol>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="w-full max-w-4xl mx-auto mt-8 mb-4 px-8 py-6 bg-white/80 rounded-3xl shadow-lg flex flex-col items-center">
        <nav className="flex gap-6 mb-2">
          <a href="/docs" className="text-teal-700 hover:underline">Docs</a>
          <a href="/issues" className="text-purple-700 hover:underline">Issues</a>
          <a href="/contribute" className="text-pink-700 hover:underline">Contribute</a>
          <a href="/privacy" className="text-teal-700 hover:underline">Privacy</a>
          <a href="/terms" className="text-purple-700 hover:underline">Terms</a>
          <a href="/contact" className="text-pink-700 hover:underline">Contact</a>
        </nav>
        <img src={crewjahLogo} alt="Crewjah Logo" className="h-8 w-8 rounded-full shadow mt-2 mb-2" />
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Crewjah — Open Source Community</p>
      </footer>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import crewjahLogo from '../public/crewjah-logo.png';

const features = [
  {
    title: 'Ask Anything',
    desc: 'Instant answers with references',
    color: 'from-blue-200 via-purple-100 to-pink-100'
  },
  {
    title: 'Summarize Text & Code',
    desc: 'Turn long content into key points',
    color: 'from-teal-200 via-purple-100 to-pink-100'
  },
  {
    title: 'Quiz & Flashcards',
    desc: 'Practice and remember more',
    color: 'from-pink-200 via-blue-100 to-purple-100'
  },
  {
    title: 'Planner & Progress',
    desc: 'Stay consistent and see growth',
    color: 'from-purple-200 via-teal-100 to-blue-100'
  }
];

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400">
      {/* Header with logo */}
      <header className="w-full max-w-4xl mx-auto flex items-center justify-between mt-8 mb-8 px-8 py-4 bg-white/80 rounded-3xl shadow-lg">
        <div className="flex items-center gap-3">
          <img src={crewjahLogo} alt="Crewjah Logo" className="h-12 w-12 rounded-full shadow" />
          <span className="text-2xl font-extrabold text-purple-700 drop-shadow-lg">Crewjah</span>
        </div>
        <div className="flex gap-4 text-base font-medium items-center">
          <a href="/signin" className="px-4 py-2 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 font-semibold transition">Sign In</a>
          <a href="/signup" className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 font-semibold transition">Get Started — Free</a>
        </div>
      </header>

      {/* Hero Section with animation */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center bg-white/80 rounded-3xl shadow-2xl p-10 mb-10"
      >
        <h1 className="text-5xl font-extrabold mb-3 text-purple-700 text-center drop-shadow-lg">Learn smarter with AI</h1>
        <p className="text-lg text-teal-700 mb-8 text-center">Your all-in-one study assistant — ask anything, summarize notes & code, and track progress.</p>
        <div className="flex gap-4 mb-8">
          <a href="/signup" className="px-8 py-3 bg-purple-700 text-white font-bold rounded-xl shadow-lg hover:bg-purple-800 transition">Get Started — Free</a>
          <a href="/signin" className="px-8 py-3 bg-teal-600 text-white font-bold rounded-xl shadow-lg hover:bg-teal-700 transition">Sign In</a>
        </div>
        {/* Trust / Highlights */}
        <div className="flex gap-6 mb-8">
          <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-semibold shadow">Privacy-first</span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold shadow">No ads</span>
          <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-semibold shadow">Beginner friendly</span>
        </div>
        {/* Features Section - animated cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full mb-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className={`rounded-2xl shadow-lg p-6 flex flex-col items-center bg-gradient-to-br ${f.color}`}
            >
              <div className="text-2xl font-bold mb-2 text-purple-700 drop-shadow">{f.title}</div>
              <div className="text-teal-700 text-base">{f.desc}</div>
            </motion.div>
          ))}
        </div>
        {/* How It Works Section */}
        <div className="w-full max-w-xl mx-auto mb-6">
          <h2 className="text-2xl font-bold mb-4 text-teal-700 text-center drop-shadow">How It Works</h2>
          <ol className="list-decimal list-inside text-purple-700 space-y-2 text-left text-lg">
            <li>Paste text or pick a topic</li>
            <li>Get summary, resources & practice</li>
            <li>Track progress over time</li>
          </ol>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="w-full max-w-4xl mx-auto mt-8 mb-4 px-8 py-6 bg-white/80 rounded-3xl shadow-lg flex flex-col items-center">
        <nav className="flex gap-6 mb-2">
          <a href="/docs" className="text-teal-700 hover:underline">Docs</a>
          <a href="/issues" className="text-purple-700 hover:underline">Issues</a>
          <a href="/contribute" className="text-pink-700 hover:underline">Contribute</a>
          <a href="/privacy" className="text-teal-700 hover:underline">Privacy</a>
          <a href="/terms" className="text-purple-700 hover:underline">Terms</a>
          <a href="/contact" className="text-pink-700 hover:underline">Contact</a>
        </nav>
        <img src={crewjahLogo} alt="Crewjah Logo" className="h-8 w-8 rounded-full shadow mt-2 mb-2" />
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Crewjah — Open Source Community</p>
      </footer>
    </div>
  );
}
