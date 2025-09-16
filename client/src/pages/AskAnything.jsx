import { useState } from 'react';


const AskAnything = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  async function handleAsk() {
    setLoading(true);
    setError('');
    setAnswer(null);
    try {
      // Replace with real API call
      setTimeout(() => {
        setAnswer({
          text: `AI Answer: ${question}`,
          keyPoints: [
            'Key point 1: This is a real educational answer.',
            'Key point 2: Always check references.'
          ],
          resources: ['https://www.khanacademy.org/', 'https://en.wikipedia.org/wiki/Binary_search_algorithm']
        });
        setLoading(false);
      }, 1200);
    } catch {
      setError('Failed to get answer.');
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-primary">Ask Anything</h1>
        <textarea
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary mb-4"
          rows={4}
          placeholder="Ask a question or paste content…"
          value={question}
          onChange={e => setQuestion(e.target.value)}
        />
        <button className="w-full py-2 bg-primary text-white font-bold rounded hover:bg-primaryHover transition mb-4" onClick={handleAsk} disabled={!question || loading}>
          {loading ? 'Thinking…' : 'Get Answer'}
        </button>
        {!answer && !question && (
          <div className="text-gray-500 text-sm mb-4">Try: “Explain binary search like I’m 12” or “Key points from the Paris Agreement”</div>
        )}
        {answer && (
          <div className="bg-blue-50 rounded-lg p-6 mt-4">
            <h2 className="text-lg font-bold mb-2 text-primary">Answer</h2>
            <div className="mb-4 text-gray-800">{answer.text}</div>
            <h3 className="font-semibold mb-1">Key Points</h3>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              {answer.keyPoints.map((pt,i) => <li key={i}>{pt}</li>)}
            </ul>
            <h3 className="font-semibold mb-1">Related Resources</h3>
            <ul className="list-disc list-inside text-blue-700">
              {answer.resources.map((url,i) => <li key={i}><a href={url} target="_blank" rel="noopener noreferrer" className="underline">{url}</a></li>)}
            </ul>
          </div>
        )}
        {error && <div className="mt-4 text-red-600 text-sm">{error}</div>}
      </div>
    </div>
  );
};

export default AskAnything;

