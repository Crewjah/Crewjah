const mockProgress = [
  { label: 'Python Basics', percent: 80 },
  { label: 'Data Structures', percent: 60 },
  { label: 'Algorithms', percent: 40 },
];

const ProgressTracker = () => {
  return (
    <div className="edu-page edu-progress">
      <h1>Progress Tracker</h1>
      <div className="edu-progress-list">
        {mockProgress.map((p, i) => (
          <div key={i} className="edu-progress-item">
            <div className="edu-progress-label">{p.label}</div>
            <div className="edu-progress-bar">
              <div className="edu-progress-bar-inner" style={{width: p.percent + '%'}}></div>
            </div>
            <div className="edu-progress-percent">{p.percent}%</div>
          </div>
        ))}
      </div>
      <div className="edu-progress-streak">
        <b>Current Streak:</b> 5 days
      </div>
      <div className="edu-progress-achievements">
        <b>Achievements:</b> 3 modules completed
      </div>
    </div>
  );
}

export default ProgressTracker;
