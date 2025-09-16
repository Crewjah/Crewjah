
import { useState } from 'react';

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
      // Replace with real API call
      setTimeout(() => {
        setSummary(`What this code does: Explains logic for ${lang} code.\nComplexity: O(n)\nPitfalls: Watch for edge cases.\nRefactor: Use built-in functions for clarity.`);
        setLoading(false);
      }, 1000);
    } catch {
      setError('Failed to summarize code');
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-primary">Summarize Code</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea value={code} onChange={e => setCode(e.target.value)} placeholder="Paste code here…" required rows={4} className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" />
          <div className="flex gap-4 items-center">
            <label className="text-sm">Language:
              <select value={lang} onChange={e => setLang(e.target.value)} className="ml-2 px-2 py-1 border rounded">
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="java">Java</option>
              </select>
            </label>
            <label className="text-sm ml-4">
              <input type="checkbox" checked={explain} onChange={()=>setExplain(!explain)} className="mr-2" /> Explain complexity
            </label>
          </div>
          <button type="submit" className="w-full py-2 bg-primary text-white font-bold rounded hover:bg-primaryHover transition">{loading ? 'Summarizing…' : 'Summarize'}</button>
        </form>
        {summary && <div className="bg-blue-50 rounded-lg p-6 mt-4 whitespace-pre-line">{summary}</div>}
        {error && <div className="mt-4 text-red-600 text-sm">{error}</div>}
        {!summary && !loading && <div className="mt-4 text-gray-500">Paste Python/JS/Java code to get an explanation and key points.</div>}
      </div>
    </div>
  );
};


export default SummarizeCode;
