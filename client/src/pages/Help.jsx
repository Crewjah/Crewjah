
import React from 'react';

const faqs = [
  { q: 'How do I reset my password?', a: 'Go to Profile Settings > Change Password.' },
  { q: 'How do I contact support?', a: 'Email support@crewjah.com or use the Contact page.' },
  { q: 'How do I track my progress?', a: 'Visit the Progress Tracker page after logging in.' },
];

const tips = [
  'Use Ask Anything for instant answers with references.',
  'Summarize Text & Code to get key points and highlights.',
  'Practice with Quiz and Flashcards for better retention.',
  'Plan your study sessions and track your streaks.',
  'Export your notes and progress for review.'
];

const Help = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden flex items-center justify-center">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>

    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 w-full max-w-xl animate-fadein relative z-10">
      <h1 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent text-center">Help & Usage Guide</h1>
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2 text-purple-300">Quick Tips</h2>
        <ul className="list-disc list-inside text-white/80 mb-4 text-left">
          {tips.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2 text-purple-300">Frequently Asked Questions</h2>
        <ul className="list-disc list-inside text-white/80 mb-4 text-left">
          {faqs.map((f, i) => (
            <li key={i} className="mb-2">
              <b className="text-white">{f.q}</b>
              <div>{f.a}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4 text-xs text-purple-300">Privacy & data: We do not sell personal data. You can export or delete your data anytime.</div>
      <div className="mb-4 text-xs text-white/60">For detailed docs, visit <a href="/help" className="underline text-purple-400 hover:text-purple-300">Docs</a> or <a href="https://github.com/Crewjah/Crewjah/issues" target="_blank" rel="noopener noreferrer" className="underline text-purple-400 hover:text-purple-300">Report a bug</a>.</div>
      <div className="mb-2 text-xs text-purple-300">Contact support: <a href="mailto:support@crewjah.com" className="underline text-purple-400 hover:text-purple-300">support@crewjah.com</a></div>
    </div>
  </div>
);

export default Help;
