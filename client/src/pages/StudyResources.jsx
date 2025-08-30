import { useState } from 'react';

const StudyResources = () => {
  const [topic, setTopic] = useState('');
  const [resources, setResources] = useState([]);
  const [done, setDone] = useState([]);
  const search = () => {
    setResources([
      { type: 'Article', url: 'https://example.com/article', title: 'Intro to ' + topic },
      { type: 'Video', url: 'https://youtube.com/example', title: topic + ' Explained' },
      { type: 'Docs', url: 'https://docs.example.com', title: topic + ' Docs' },
      { type: 'Practice', url: 'https://practice.example.com', title: 'Practice ' + topic }
    ]);
    setDone([]);
  };
  const markDone = idx => setDone([...done, idx]);
  return (
    <div>
      <h2>Study Resources</h2>
      <input placeholder="e.g., Dynamic Programming" value={topic} onChange={e=>setTopic(e.target.value)} />
      <button onClick={search}>Find Resources</button>
      <div style={{marginTop:16}}>
        {resources.length === 0 && <div style={{color:'#888'}}>Try: ‘Operating Systems scheduling’ or ‘OOP basics’.</div>}
        {['Article','Video','Docs','Practice'].map(type=>(
          <div key={type} style={{marginBottom:8}}>
            <b>{type}s</b>
            <ul>
              {resources.filter(r=>r.type===type).map((r,i)=>(
                <li key={i} style={{textDecoration:done.includes(i)?'line-through':'none'}}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer">{r.title}</a>
                  {!done.includes(i) && <button style={{marginLeft:8}} onClick={()=>markDone(i)}>Mark as Done</button>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyResources;
