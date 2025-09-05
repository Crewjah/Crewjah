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
    <div className="edu-page edu-planner">
      <h1>Study Planner</h1>
      <div className="edu-planner-input">
        <input
          className="edu-input"
          placeholder="Add a study task…"
          value={task}
          onChange={e => setTask(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTask()}
          style={{marginRight:8}}
        />
        <button className="edu-btn" onClick={addTask}>Add</button>
      </div>
      <ul className="edu-planner-list">
        {tasks.length === 0 && <li className="edu-empty">No tasks yet. Add your first study goal!</li>}
        {tasks.map((t, i) => (
          <li key={i} className={t.done ? 'done' : ''}>
            <input type="checkbox" checked={t.done} onChange={() => markDone(i)} />
            <span>{t.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudyPlanner;
