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
      // Replace with real API call
      setTimeout(() => {
        setSummary(`Summary (${length}, ${tone}):\n• Key point 1\n• Key point 2\nHighlights: Focus on main ideas.\nAction items: Review and practice.`);
        setLoading(false);
      }, 1000);
    } catch {
      setError('Failed to summarize');
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-primary">Summarize Text</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste or type text to summarize…" required rows={4} className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" />
          <div className="flex gap-4 items-center">
            <label className="text-sm">Length:
              <select value={length} onChange={e => setLength(e.target.value)} className="ml-2 px-2 py-1 border rounded">
                <option value="short">Short</option>
                <option value="medium">Medium</option>
                <option value="long">Long</option>
              </select>
            </label>
            <label className="text-sm">Tone:
              <select value={tone} onChange={e => setTone(e.target.value)} className="ml-2 px-2 py-1 border rounded">
                <option value="simple">Simple</option>
                <option value="technical">Technical</option>
              </select>
            </label>
          </div>
          <button type="submit" className="w-full py-2 bg-primary text-white font-bold rounded hover:bg-primaryHover transition">{loading ? 'Summarizing…' : 'Summarize'}</button>
        </form>
        {summary && <div className="bg-blue-50 rounded-lg p-6 mt-4 whitespace-pre-line">{summary}</div>}
        {error && <div className="mt-4 text-red-600 text-sm">{error}</div>}
        {!summary && !loading && <button className="mt-4 text-primary underline" onClick={()=>setText('Sample article text for summarization.')}>Summarize sample article</button>}
      </div>
    </div>
  );
};

export default SummarizeText;
