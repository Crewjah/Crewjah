
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
  <div className="min-h-screen flex items-center justify-center bg-blue-50">
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
      <h1 className="text-2xl font-bold mb-6 text-primary">Help & Usage Guide</h1>
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2 text-primary">Quick Tips</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          {tips.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2 text-primary">Frequently Asked Questions</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          {faqs.map((f, i) => (
            <li key={i} className="mb-2">
              <b>{f.q}</b>
              <div>{f.a}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4 text-xs text-blue-700">Privacy & data: We do not sell personal data. You can export or delete your data anytime.</div>
      <div className="mb-4 text-xs text-gray-500">For detailed docs, visit <a href="/help">Docs</a> or <a href="https://github.com/Crewjah/Crewjah/issues" target="_blank" rel="noopener noreferrer">Report a bug</a>.</div>
      <div className="mb-2 text-xs text-blue-700">Contact support: <a href="mailto:support@crewjah.com">support@crewjah.com</a></div>
    </div>
  </div>
);

export default Help;
