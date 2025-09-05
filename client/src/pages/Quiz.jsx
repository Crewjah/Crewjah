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
        <button className="edu-btn edu-btn-primary" onClick={startQuiz}>Start Quiz</button>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="edu-page edu-quiz">
        <h1>Quiz Complete!</h1>
        <div>Your score: {score} / {quizQuestions.length}</div>
        <button className="edu-btn" onClick={retry}>Restart</button>
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
            className={`edu-btn edu-btn-option${selected === i ? ' selected' : ''}`}
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
      <button className="edu-btn edu-btn-primary" onClick={handleNext} disabled={selected === null} style={{marginTop:16}}>
        {current + 1 === quizQuestions.length ? 'Finish' : 'Next'}
      </button>
      <div className="edu-quiz-progress">Question {current + 1} of {quizQuestions.length}</div>
    </div>
  );
}

export default Quiz;
