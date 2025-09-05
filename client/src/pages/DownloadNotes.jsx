const mockNotes = [
  { title: 'Python Basics', url: '#' },
  { title: 'Data Structures', url: '#' },
];

const DownloadNotes = () => {
  return (
    <div className="edu-page edu-notes">
      <h1>Download Notes</h1>
      <ul className="edu-notes-list">
        {mockNotes.length === 0 && <li className="edu-empty">No notes available yet.</li>}
        {mockNotes.map((n, i) => (
          <li key={i} className="edu-notes-item">
            <span>{n.title}</span>
            <a href={n.url} className="edu-btn edu-btn-link" download>Download</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DownloadNotes;
