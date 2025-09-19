
import { useState } from 'react';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const initialTasks = [
  { date: '2025-09-20', subject: 'Math', task: 'Review algebra notes', done: false },
  { date: '2025-09-21', subject: 'Biology', task: 'Flashcards: Cell structure', done: true }
];

export default function StudyPlanner() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState({ date: '', subject: '', task: '' });

  const addTask = () => {
    if (newTask.date && newTask.subject && newTask.task) {
      setTasks([...tasks, { ...newTask, done: false }]);
      setNewTask({ date: '', subject: '', task: '' });
    }
  };
  const toggleDone = idx => {
    setTasks(tasks.map((t, i) => i === idx ? { ...t, done: !t.done } : t));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl mx-auto bg-white/90 rounded-3xl shadow-xl p-8 flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-2">Study Planner</h2>
        <p className="text-base text-purple-700 mb-6 text-center">Organize your study schedule, track progress, and stay motivated!</p>
        <div className="w-full mb-6">
          <div className="font-semibold text-lg mb-2">Add Study Task</div>
          <div className="flex gap-2 mb-2">
            <input type="date" value={newTask.date} onChange={e => setNewTask({ ...newTask, date: e.target.value })} className="px-2 py-1 rounded border" />
            <input type="text" placeholder="Subject" value={newTask.subject} onChange={e => setNewTask({ ...newTask, subject: e.target.value })} className="px-2 py-1 rounded border" />
            <input type="text" placeholder="Task" value={newTask.task} onChange={e => setNewTask({ ...newTask, task: e.target.value })} className="px-2 py-1 rounded border" />
            <button onClick={addTask} className="px-4 py-1 bg-blue-600 text-white rounded shadow hover:bg-blue-700">Add</button>
          </div>
        </div>
        <div className="w-full mb-6">
          <div className="font-semibold text-lg mb-2">Upcoming Tasks</div>
          <ul className="divide-y">
            {tasks.map((t, i) => (
              <li key={i} className="py-2 flex items-center justify-between">
                <div>
                  <span className={`font-bold ${t.done ? 'line-through text-gray-400' : 'text-blue-700'}`}>{t.subject}</span>:
                  <span className={`ml-2 ${t.done ? 'line-through text-gray-400' : ''}`}>{t.task}</span>
                  <span className="ml-4 text-xs text-gray-500">{t.date}</span>
                </div>
                <button onClick={() => toggleDone(i)} className={`px-3 py-1 rounded ${t.done ? 'bg-gray-300' : 'bg-green-500 text-white'} shadow hover:bg-green-600`}>{t.done ? 'Done' : 'Mark Done'}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full mb-4">
          <div className="font-semibold text-lg mb-2">Motivational Tip</div>
          <div className="bg-purple-100 text-purple-700 rounded-xl p-4 shadow text-center">Small steps every day lead to big results. Keep going!</div>
        </div>
      </motion.div>
    </div>
  );
}

export default StudyPlanner;
