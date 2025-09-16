
import { useState } from 'react';

const mockProgress = [
  { label: 'Python Basics', percent: 80 },
  { label: 'Data Structures', percent: 60 },
  { label: 'Algorithms', percent: 40 },
];

const filters = ['All', 'Python', 'DSA', 'Math'];

const ProgressTracker = () => {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? mockProgress : mockProgress.filter(p => p.label.includes(filter));
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-primary">Progress Tracker</h1>
        <div className="mb-4 flex gap-4 items-center">
          <label className="font-medium">Filter:</label>
          <select value={filter} onChange={e => setFilter(e.target.value)} className="px-2 py-1 border rounded">
            {filters.map(f => <option key={f}>{f}</option>)}
          </select>
        </div>
        <div className="mb-6">
          {filtered.map((p, i) => (
            <div key={i} className="mb-4">
              <div className="font-semibold mb-1">{p.label}</div>
              <div className="w-full bg-blue-100 rounded h-4 mb-1">
                <div className="bg-primary h-4 rounded" style={{width: p.percent + '%'}}></div>
              </div>
              <div className="text-xs text-gray-500">{p.percent}% completed</div>
            </div>
          ))}
        </div>
        <div className="mb-4 text-sm text-blue-700">Current Streak: <span className="font-bold">5 days</span></div>
        <div className="mb-4 text-sm text-green-700">Achievements: <span className="font-bold">3 modules completed</span></div>
        <div className="mb-4 text-sm text-gray-500">Quizzes completed: <span className="font-bold">7</span> | Flashcard retention: <span className="font-bold">85%</span></div>
        <button className="w-full py-2 bg-primary text-white font-bold rounded hover:bg-primaryHover transition">Export Progress (PDF/CSV)</button>
      </div>
    </div>
  );
}

export default ProgressTracker;
