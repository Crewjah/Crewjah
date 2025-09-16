
import { useState } from 'react';

const subjects = [
  { value: 'python', label: 'Python' },
  { value: 'dsa', label: 'Data Structures' },
  { value: 'math', label: 'Math' }
];
const difficulties = ['Easy', 'Medium', 'Hard'];

const questionBank = {
  python: [
    { q: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: 1 },
    { q: 'Which is a Python data type?', options: ['int', 'foo', 'bar', 'baz'], answer: 0 },
  ],
  dsa: [
    { q: 'What is a stack?', options: ['Queue', 'LIFO', 'FIFO', 'Array'], answer: 1 },
    { q: 'Best case for binary search?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n^2)'], answer: 2 },
  ],
  math: [
    { q: 'What is the capital of France?', options: ['Berlin', 'London', 'Paris', 'Rome'], answer: 2 },
    { q: 'What is 5 x 6?', options: ['11', '30', '56', '25'], answer: 1 },
  ]
};

const Quiz = () => {
  const [started, setStarted] = useState(false);
  const [subject, setSubject] = useState('python');
  const [difficulty, setDifficulty] = useState('Easy');
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = questionBank[subject];

  function startQuiz() {
    setStarted(true);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  }

  function handleSelect(i) {
    setSelected(i);
  }

  function handleNext() {
    if (selected === questions[current].answer) setScore(s => s + 1);
    setSelected(null);
    if (current + 1 < questions.length) setCurrent(current + 1);
    else setShowResult(true);
  }

  function retry() {
    setStarted(false);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  }

  if (!started) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
          <h1 className="text-2xl font-bold mb-6 text-primary">Take a Quiz</h1>
          <div className="mb-4">
            <label className="font-medium mr-2">Subject:</label>
            <select value={subject} onChange={e => setSubject(e.target.value)} className="px-2 py-1 border rounded">
              {subjects.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
            <label className="font-medium ml-4 mr-2">Difficulty:</label>
            <select value={difficulty} onChange={e => setDifficulty(e.target.value)} className="px-2 py-1 border rounded">
              {difficulties.map(d => <option key={d}>{d}</option>)}
            </select>
          </div>
          <button className="w-full py-2 bg-primary text-white font-bold rounded hover:bg-primaryHover transition" onClick={startQuiz}>Start Quiz</button>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl text-center">
          <h1 className="text-2xl font-bold mb-4 text-primary">Quiz Complete!</h1>
          <div className="mb-2 text-lg">Your score: <span className="font-bold text-primary">{score} / {questions.length}</span></div>
          <div className="mb-2 text-gray-600">Accuracy: {Math.round((score/questions.length)*100)}%</div>
          <button className="mt-4 py-2 px-6 bg-primary text-white font-bold rounded hover:bg-primaryHover transition" onClick={retry}>Retry</button>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-primary">Quiz</h1>
        <div className="mb-4 font-semibold">{q.q}</div>
        <div className="grid grid-cols-1 gap-3 mb-4">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className={`w-full py-2 rounded border font-medium ${selected === i ? 'bg-primary text-white' : 'bg-blue-100 text-primary'} hover:bg-primaryHover transition`}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
            >
              {opt}
            </button>
          ))}
        </div>
        {selected !== null && (
          <div className={`mb-4 text-lg font-bold ${selected === q.answer ? 'text-green-600' : 'text-red-600'}`}>
            {selected === q.answer ? 'Correct!' : 'Incorrect.'}
          </div>
        )}
        <button className="w-full py-2 bg-primary text-white font-bold rounded hover:bg-primaryHover transition" onClick={handleNext} disabled={selected === null}>
          {current + 1 === questions.length ? 'Finish' : 'Next'}
        </button>
        <div className="mt-4 text-sm text-gray-500">Question {current + 1} of {questions.length}</div>
      </div>
    </div>
  );
}

export default Quiz;
