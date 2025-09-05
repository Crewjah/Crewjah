const SummarizeCode = () => {
  const [code, setCode] = useState('');
  const [lang, setLang] = useState('python');
  const [explain, setExplain] = useState(false);
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
        setSummary(`(Code summary placeholder) [${lang}]\n${code.slice(0, 80)}...`);
        setLoading(false);
      }, 1000);
    } catch {
      setError('Failed to summarize code');
      setLoading(false);
    }
  };
  return (
    <div>
      <h2>Summarize Code</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={code} onChange={e => setCode(e.target.value)} placeholder="Paste code here…" required rows={4} style={{width:'100%'}} />
        <div style={{margin:'8px 0'}}>
          <label>Language: </label>
          <select value={lang} onChange={e => setLang(e.target.value)}>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
          </select>
          <label style={{marginLeft:16}}>
            <input type="checkbox" checked={explain} onChange={()=>setExplain(!explain)} /> Explain complexity
          </label>
        </div>
        <button type="submit" disabled={loading}>{loading ? 'Summarizing…' : 'Summarize'}</button>
      </form>
      {summary && <div style={{marginTop:16, background:'#f6f6f6', padding:12}}>{summary}</div>}
      {error && <div style={{color:'red'}}>{error}</div>}
      {!summary && !loading && <div style={{color:'#888',marginTop:8}}>Paste Python/JS/Java code to get an explanation and key points.</div>}
    </div>
  );
};

export default SummarizeCode;
