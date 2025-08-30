import { useState } from 'react';

const SummarizeText = () => {
  const [text, setText] = useState('');
  const [length, setLength] = useState('medium');
  const [tone, setTone] = useState('simple');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSummary('');
    try {
      setTimeout(() => {
        setSummary(`(Summary placeholder) [${length}, ${tone}]\n${text.slice(0, 80)}...`);
        setLoading(false);
      }, 1000);
    } catch {
      setError('Failed to summarize');
      setLoading(false);
    }
  };
  return (
    <div>
      <h2>Summarize Text</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste or type text to summarize…" required rows={4} style={{width:'100%'}} />
        <div style={{margin:'8px 0'}}>
          <label>Length: </label>
          <select value={length} onChange={e => setLength(e.target.value)}>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
          <label style={{marginLeft:16}}>Tone: </label>
          <select value={tone} onChange={e => setTone(e.target.value)}>
            <option value="simple">Simple</option>
            <option value="technical">Technical</option>
          </select>
        </div>
        <button type="submit" disabled={loading}>{loading ? 'Summarizing…' : 'Summarize'}</button>
      </form>
      {summary && <div style={{marginTop:16, background:'#f6f6f6', padding:12}}>{summary}</div>}
      {error && <div style={{color:'red'}}>{error}</div>}
      {!summary && !loading && <button style={{marginTop:8}} onClick={()=>setText('Sample article text for summarization.')}>Summarize sample article</button>}
    </div>
  );
};

export default SummarizeText;
