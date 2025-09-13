const StudyPlanner = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (!task) return;
    setTasks([...tasks, { text: task, done: false }]);
    setTask('');
  }
  function markDone(idx) {
    setTasks(tasks.map((t, i) => i === idx ? { ...t, done: !t.done } : t));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-10 animate-fadein">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700">Study Planner</h1>
        <div className="flex gap-4 mb-8">
          <input
            className="flex-1 border border-blue-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Add a study task…"
            value={task}
            onChange={e => setTask(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTask()}
          />
          <button
            className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-xl hover:from-pink-500 hover:to-blue-500 transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400 animate-slidein"
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <ul className="space-y-4">
          {tasks.length === 0 && (
            <li className="bg-blue-50 rounded-lg p-6 text-center text-lg text-blue-700 shadow">
              <strong>Welcome to your Study Planner!</strong>
              <p className="mt-2 text-base text-blue-500">Organize your learning goals and track your progress. Start by adding your first study task above.</p>
              <span role="img" aria-label="sparkles" style={{fontSize:'2rem'}}>✨</span>
            </li>
          )}
          {tasks.map((t, i) => (
            <li key={i} className={`flex items-center gap-3 bg-blue-50 rounded-lg p-4 shadow ${t.done ? 'opacity-60' : ''}`}>
              <input type="checkbox" checked={t.done} onChange={() => markDone(i)} className="w-5 h-5 accent-blue-500" />
              <span className="flex-1 text-lg text-blue-900">{t.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudyPlanner;
