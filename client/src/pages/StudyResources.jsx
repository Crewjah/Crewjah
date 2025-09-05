import { useState } from 'react';

const mockResources = [
  { title: 'Intro to React', url: 'https://react.dev', category: 'Web Dev' },
  { title: 'MDN Web Docs', url: 'https://developer.mozilla.org', category: 'Web Dev' },
  { title: 'Khan Academy Math', url: 'https://khanacademy.org', category: 'Math' },
];

const categories = ['All', 'Web Dev', 'Math'];

const StudyResources = () => {
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('All');
  const filtered = mockResources.filter(r =>
    (cat === 'All' || r.category === cat) &&
    (r.title.toLowerCase().includes(search.toLowerCase()) || r.category.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="edu-page edu-resources">
      <h1>Study Resources</h1>
      <div style={{marginBottom:16}}>
        <input
          className="edu-input"
          placeholder="Search resources…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{marginRight:8}}
        />
        <select value={cat} onChange={e => setCat(e.target.value)} className="edu-input">
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>
      <div className="edu-resource-list">
        {filtered.length === 0 && <div className="edu-empty">No resources found.</div>}
        {filtered.map((r,i) => (
          <div className="edu-resource-card" key={i}>
            <div className="edu-resource-title">{r.title}</div>
            <div className="edu-resource-cat">{r.category}</div>
            <a href={r.url} target="_blank" rel="noopener noreferrer" className="edu-btn edu-btn-link">Visit</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudyResources;

