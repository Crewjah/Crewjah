import { useState } from 'react';

const DownloadNotes = () => {
  const [format, setFormat] = useState('md');
  const [scope, setScope] = useState('all');
  const handleDownload = () => {
    alert(`Download notes as ${format.toUpperCase()} (${scope})`);
  };
  return (
    <div>
      <h2>Download Notes</h2>
      <div>
        <label>Export as: </label>
        <select value={format} onChange={e=>setFormat(e.target.value)}>
          <option value="md">Markdown</option>
          <option value="pdf">PDF</option>
          <option value="txt">TXT</option>
        </select>
      </div>
      <div style={{margin:'8px 0'}}>
        <label>Scope: </label>
        <select value={scope} onChange={e=>setScope(e.target.value)}>
          <option value="all">All notes</option>
          <option value="session">This session</option>
          <option value="topics">Selected topics</option>
        </select>
      </div>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default DownloadNotes;
