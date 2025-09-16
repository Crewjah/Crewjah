
import { useState } from 'react';

const StudyPlanner = () => {
  const [task, setTask] = useState('');
  const [due, setDue] = useState('');
  const [duration, setDuration] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (!task) return;
    setTasks([...tasks, { text: task, due, duration, done: false }]);
    setTask('');
    setDue('');
    setDuration('');
  }
  function markDone(idx) {
    setTasks(tasks.map((t, i) => i === idx ? { ...t, done: !t.done } : t));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-primary">Study Planner</h1>
        <div className="mb-4 flex flex-col gap-3">
          <input
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Add a study task…"
            value={task}
            onChange={e => setTask(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTask()}
          />
          <input
            type="date"
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={due}
            onChange={e => setDue(e.target.value)}
            placeholder="Due date"
          />
          <input
            type="number"
            min="1"
            className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={duration}
            onChange={e => setDuration(e.target.value)}
            placeholder="Duration (minutes)"
          />
          <button className="py-2 px-6 bg-primary text-white font-bold rounded hover:bg-primaryHover transition" onClick={addTask}>Add Task</button>
        </div>
        <ul className="mt-6">
          {tasks.length === 0 && <li className="text-gray-500">No tasks yet. Add your first study goal!</li>}
          {tasks.map((t, i) => (
            <li key={i} className={`mb-3 p-3 rounded border flex items-center gap-4 ${t.done ? 'bg-blue-100 line-through' : 'bg-white'}`}>
              <input type="checkbox" checked={t.done} onChange={() => markDone(i)} />
              <span className="flex-1">{t.text}</span>
              <span className="text-xs text-gray-500">Due: {t.due || '—'}</span>
              <span className="text-xs text-gray-500">Duration: {t.duration ? t.duration + ' min' : '—'}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudyPlanner;
