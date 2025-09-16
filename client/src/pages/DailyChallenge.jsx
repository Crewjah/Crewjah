
import { useState } from 'react';

const mcqs = [
  {
    q: 'Which is a sorting algorithm?',
    options: ['Binary Search', 'Bubble Sort', 'Stack', 'Queue'],
    answer: 1
  },
  {
    q: 'What is the output of 3 * 4?',
    options: ['7', '12', '9', '14'],
    answer: 1
  },
  {
    q: 'React is a ___ library.',
    options: ['Python', 'JavaScript', 'C++', 'Java'],
    answer: 1
  }
];

const shortChallenge = {
  title: 'Short Answer',
  desc: 'Explain the difference between a stack and a queue.'
};

const DailyChallenge = () => {
  const [mcqAnswers, setMcqAnswers] = useState(Array(mcqs.length).fill(null));
  const [shortAns, setShortAns] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleMcq(idx, val) {
    setMcqAnswers(ans => ans.map((a, i) => i === idx ? val : a));
  }
  function handleSubmit() {
    setSubmitted(true);
  }

  const correctCount = mcqAnswers.filter((a, i) => a === mcqs[i].answer).length;

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-primary">Daily Challenge</h1>
        <div className="mb-6 text-sm text-gray-600">Complete today’s challenge to earn XP and keep your streak!</div>
        {/* MCQs */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2 text-primary">Multiple Choice</h2>
          {mcqs.map((mcq, i) => (
            <div key={i} className="mb-4">
              <div className="mb-1 font-medium">{i+1}. {mcq.q}</div>
              <div className="grid grid-cols-2 gap-2">
                {mcq.options.map((opt, j) => (
                  <button
                    key={j}
                    className={`py-2 px-3 rounded border font-medium ${mcqAnswers[i] === j ? 'bg-primary text-white' : 'bg-blue-100 text-primary'} hover:bg-primaryHover transition`}
                    onClick={() => handleMcq(i, j)}
                    disabled={submitted}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {submitted && (
                <div className={`mt-2 text-sm ${mcqAnswers[i] === mcq.answer ? 'text-green-600' : 'text-red-600'}`}>
                  {mcqAnswers[i] === mcq.answer ? 'Correct!' : 'Incorrect.'}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Short Answer */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2 text-primary">Short Answer</h2>
          <div className="mb-2 font-medium">{shortChallenge.desc}</div>
          <textarea
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            rows={3}
            placeholder="Your answer…"
            value={shortAns}
            onChange={e => setShortAns(e.target.value)}
            disabled={submitted}
          />
        </div>
        <button className="w-full py-2 bg-primary text-white font-bold rounded hover:bg-primaryHover transition mb-4" onClick={handleSubmit} disabled={submitted || mcqAnswers.includes(null) || !shortAns}>
          {submitted ? 'Submitted!' : 'Submit'}
        </button>
        {submitted && (
          <div className="bg-blue-50 rounded-lg p-4 mt-4 text-center">
            <div className="mb-2 text-lg font-bold text-primary">Challenge Complete!</div>
            <div className="mb-1 text-green-600">You got {correctCount} / {mcqs.length} MCQs correct.</div>
            <div className="mb-1 text-blue-700">Streak: <span className="font-bold">6 days</span> | XP: <span className="font-bold">+10</span></div>
            <div className="mb-1 text-gray-600">Check back tomorrow for a new challenge!</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DailyChallenge;
