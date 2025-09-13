import { useState } from 'react';

const quizQuestions = [
  { q: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: 1 },
  { q: 'What is the capital of France?', options: ['Berlin', 'London', 'Paris', 'Rome'], answer: 2 },
  { q: 'Which is a Python data type?', options: ['int', 'foo', 'bar', 'baz'], answer: 0 },
];

const Quiz = () => {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

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
    if (selected === quizQuestions[current].answer) setScore(s => s + 1);
    setSelected(null);
    if (current + 1 < quizQuestions.length) setCurrent(current + 1);
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
      <div className="edu-page edu-quiz">
        <h1>Quiz</h1>
        <p>Test your knowledge with quick quizzes!</p>
        <button
          className="edu-btn edu-btn-primary transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={startQuiz}
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="edu-page edu-quiz">
        <h1>Quiz Complete!</h1>
        <div>Your score: {score} / {quizQuestions.length}</div>
        <button
          className="edu-btn transition-all duration-300 ease-in-out bg-gradient-to-r from-gray-400 to-blue-400 hover:from-blue-400 hover:to-gray-400 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={retry}
        >
          Restart
        </button>
      </div>
    );
  }

  const q = quizQuestions[current];

  return (
    <div className="edu-page edu-quiz">
      <h1>Quiz</h1>
      <div className="edu-quiz-q">{q.q}</div>
      <div className="edu-quiz-options">
        {q.options.map((opt, i) => (
          <button
            key={i}
            className={`edu-btn edu-btn-option transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-400 to-pink-400 hover:from-pink-400 hover:to-purple-400 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400${selected === i ? ' selected' : ''}`}
            onClick={() => handleSelect(i)}
            disabled={selected !== null}
          >
            {opt}
          </button>
        ))}
      </div>
      {selected !== null && (
        <div className={selected === q.answer ? 'edu-correct' : 'edu-wrong'}>
          {selected === q.answer ? 'Correct!' : 'Incorrect.'}
        </div>
      )}
      <button
        className="edu-btn edu-btn-primary transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4"
        onClick={handleNext}
        disabled={selected === null}
        style={{marginTop:16}}
      >
        {current + 1 === quizQuestions.length ? 'Finish' : 'Next'}
      </button>
      <div className="edu-quiz-progress">Question {current + 1} of {quizQuestions.length}</div>
    </div>
  );
}

export default Quiz;
