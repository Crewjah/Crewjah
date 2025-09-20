
import React from 'react';
import { motion } from 'framer-motion';

const progressData = [
  { label: 'Math', percent: 80 },
  { label: 'Biology', percent: 60 },
  { label: 'Algorithms', percent: 40 }
];
const streak = 5;
const badges = [
  { name: 'Starter', color: 'bg-yellow-400' },
  { name: 'Streak 5', color: 'bg-green-400' }
];

function ProgressTracker() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl mx-auto bg-white/90 rounded-3xl shadow-xl p-8 flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-2">Progress Tracker</h2>
        <p className="text-base text-blue-700 mb-6 text-center">Track your study progress, streaks, and achievements!</p>
        <div className="w-full mb-6">
          <div className="font-semibold text-lg mb-2">Subject Progress</div>
          <ul className="space-y-4">
            {progressData.map((p, i) => (
              <li key={i} className="flex flex-col">
                <span className="font-bold text-green-700 mb-1">{p.label}</span>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="h-4 rounded-full bg-green-400" style={{ width: `${p.percent}%` }}></div>
                </div>
                <span className="text-xs text-gray-500 mt-1">{p.percent}% completed</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full mb-6 flex flex-col items-center">
          <div className="font-semibold text-lg mb-2">Streak</div>
          <div className="text-2xl font-bold text-green-700">🔥 {streak} days</div>
        </div>
        <div className="w-full mb-4 flex flex-col items-center">
          <div className="font-semibold text-lg mb-2">Badges</div>
          <div className="flex gap-4">
            {badges.map((b, i) => (
              <span key={i} className={`px-4 py-2 rounded-full shadow text-white font-semibold ${b.color}`}>{b.name}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProgressTracker;
