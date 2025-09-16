
const mockNotes = [
  { title: 'Python Basics', url: '#' },
  { title: 'Data Structures', url: '#' },
];

const formats = ['Markdown', 'PDF', 'TXT'];

import { useState } from 'react';

const DownloadNotes = () => {
  const [format, setFormat] = useState('Markdown');
  const [selected, setSelected] = useState([]);

  function toggleSelect(idx) {
    setSelected(sel => sel.includes(idx) ? sel.filter(i => i !== idx) : [...sel, idx]);
  }

  function handleDownload() {
    // Simulate download
    alert(`Downloading ${selected.length ? selected.length : mockNotes.length} notes as ${format}`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-primary">Download Notes</h1>
        <div className="mb-4 flex gap-4 items-center">
          <label className="font-medium">Format:</label>
          <select value={format} onChange={e => setFormat(e.target.value)} className="px-2 py-1 border rounded">
            {formats.map(f => <option key={f}>{f}</option>)}
          </select>
        </div>
        <div className="mb-4 font-medium">Choose notes to export:</div>
        <ul className="mb-6">
          {mockNotes.length === 0 && <li className="text-gray-500">No notes available yet.</li>}
          {mockNotes.map((n, i) => (
            <li key={i} className="mb-2 flex items-center gap-3">
              <input type="checkbox" checked={selected.includes(i)} onChange={() => toggleSelect(i)} />
              <span>{n.title}</span>
            </li>
          ))}
        </ul>
        <button className="w-full py-2 bg-primary text-white font-bold rounded hover:bg-primaryHover transition" onClick={handleDownload} disabled={mockNotes.length === 0}>Download {selected.length ? 'Selected' : 'All'} Notes</button>
      </div>
    </div>
  );
}

export default DownloadNotes;
