
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
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-purple-200 to-cyan-200">
    <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-xl animate-fadein">
      <h1 className="text-3xl font-extrabold mb-6 text-blue-900 text-center">Help & Usage Guide</h1>
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2 text-blue-700">Quick Tips</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 text-left">
          {tips.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2 text-blue-700">Frequently Asked Questions</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 text-left">
          {faqs.map((f, i) => (
            <li key={i} className="mb-2">
              <b>{f.q}</b>
              <div>{f.a}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4 text-xs text-blue-700">Privacy & data: We do not sell personal data. You can export or delete your data anytime.</div>
      <div className="mb-4 text-xs text-gray-500">For detailed docs, visit <a href="/help" className="underline text-purple-700">Docs</a> or <a href="https://github.com/Crewjah/Crewjah/issues" target="_blank" rel="noopener noreferrer" className="underline text-purple-700">Report a bug</a>.</div>
      <div className="mb-2 text-xs text-blue-700">Contact support: <a href="mailto:support@crewjah.com" className="underline text-purple-700">support@crewjah.com</a></div>
    </div>
  </div>
);

export default Help;
