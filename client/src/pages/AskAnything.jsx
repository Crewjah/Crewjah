import { useState } from 'react';

const AskAnything = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  function handleAsk() {
    setLoading(true);
    setError('');
    setAnswer('');
    setTimeout(() => {
      setAnswer({
        text: 'Sample answer for: ' + question,
        keyPoints: ['Key point 1', 'Key point 2'],
        resources: ['https://en.wikipedia.org/wiki/Example']
      });
      setLoading(false);
    }, 1200);
  }

  return (
    <div className="edu-page edu-ask">
      <h1>Ask Anything</h1>
      <textarea
        className="edu-input"
        rows={4}
        placeholder="Ask a question or paste content…"
        value={question}
        onChange={e => setQuestion(e.target.value)}
        style={{width:'100%',maxWidth:600,marginBottom:16}}
      />
      <br />
      <button className="edu-btn edu-btn-primary" onClick={handleAsk} disabled={!question || loading}>
        {loading ? 'Thinking…' : 'Get Answer'}
      </button>
      {!answer && !question && (
        <div className="edu-empty">Try: “Explain binary search like I’m 12” or “Key points from the Paris Agreement”</div>
      )}
      {answer && (
        <div className="edu-answer-block">
          <h2>Answer</h2>
          <div>{answer.text}</div>
          <h3>Key Points</h3>
          <ul>{answer.keyPoints.map((pt,i) => <li key={i}>{pt}</li>)}</ul>
          <h3>Related Resources</h3>
          <ul>{answer.resources.map((url,i) => <li key={i}><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></li>)}</ul>
        </div>
      )}
    </div>
  );
};

export default AskAnything;

