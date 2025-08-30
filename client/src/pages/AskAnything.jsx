import { useState } from 'react';

const AskAnything = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setAnswer('');
    try {
      setTimeout(() => {
        setAnswer(`(AI answer placeholder) You asked: "${question}"`);
        setLoading(false);
      }, 1000);
    } catch {
      setError('Failed to get answer');
      setLoading(false);
    }
  };
  return (
    <div>
      <h2>Ask Anything (Q&A)</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={question} onChange={e => setQuestion(e.target.value)} placeholder="Ask a question or paste content…" required rows={3} style={{width:'100%'}} />
        <button type="submit" disabled={loading}>{loading ? 'Thinking…' : 'Ask'}</button>
      </form>
      {answer && <div style={{marginTop:16, background:'#f6f6f6', padding:12}}>{answer}</div>}
      {error && <div style={{color:'red'}}>{error}</div>}
      {!answer && !loading && <div style={{color:'#888',marginTop:8}}>Try: ‘Explain binary search like I’m 12’ or ‘Key points from the Paris Agreement’</div>}
    </div>
  );
};

export default AskAnything;
