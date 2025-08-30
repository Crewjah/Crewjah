import { useState } from 'react';

const StudyPlanner = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [due, setDue] = useState('');
  const [duration, setDuration] = useState('');
  const addTask = () => {
    if (!title || !topic || !due) return;
    setTasks([...tasks, { title, topic, due, duration, done: false }]);
    setTitle(''); setTopic(''); setDue(''); setDuration('');
  };
  const markDone = idx => {
    const newTasks = [...tasks];
    newTasks[idx].done = !newTasks[idx].done;
    setTasks(newTasks);
  };
  return (
    <div>
      <h2>Study Planner</h2>
      <div>
        <input placeholder="Task title" value={title} onChange={e=>setTitle(e.target.value)} />
        <input placeholder="Topic" value={topic} onChange={e=>setTopic(e.target.value)} />
        <input type="date" value={due} onChange={e=>setDue(e.target.value)} />
        <input placeholder="Duration (min)" value={duration} onChange={e=>setDuration(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div style={{margin:'16px 0'}}>
        <b>Weekly View (placeholder)</b>
        <ul>
          {tasks.map((t,i)=>(
            <li key={i} style={{textDecoration:t.done?'line-through':'none'}}>
              {t.title} ({t.topic}) - Due: {t.due} {t.duration && `| ${t.duration} min`}
              <button style={{marginLeft:8}} onClick={()=>markDone(i)}>{t.done?'Undo':'Mark done'}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudyPlanner;
