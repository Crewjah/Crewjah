import { useState } from 'react';

const quizSubjects = ['Python', 'DSA', 'Math', 'General'];
const quizQuestions = [
  { q: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: 1 },
  { q: 'What is the capital of France?', options: ['Berlin', 'London', 'Paris', 'Rome'], answer: 2 },
  { q: 'Which is a Python data type?', options: ['int', 'foo', 'bar', 'baz'], answer: 0 },
];
const Quiz = () => {
  const [subject, setSubject] = useState('Python');
  const [difficulty, setDifficulty] = useState('Easy');
  const [numQuestions, setNumQuestions] = useState(3);
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const startQuiz = () => {
    setStarted(true);
    setCurrent(0);
    setAnswers([]);
    setScore(0);
    setShowResult(false);
  };
  const handleAnswer = (idx) => {
    setAnswers([...answers, idx]);
    if (quizQuestions[current].answer === idx) setScore(score + 1);
    if (current + 1 < numQuestions) setCurrent(current + 1);
    else setShowResult(true);
  };
  const retry = () => {
    setStarted(false);
    setAnswers([]);
    setScore(0);
    setShowResult(false);
  };
  if (!started) {
    return (
      <div>
        <h2>Take a Quiz</h2>
        <label>Subject: </label>
        <select value={subject} onChange={e => setSubject(e.target.value)}>
          {quizSubjects.map(s => <option key={s}>{s}</option>)}
        </select>
        <label style={{marginLeft:16}}>Difficulty: </label>
        <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
          <option>Easy</option><option>Medium</option><option>Hard</option>
        </select>
        <label style={{marginLeft:16}}>Questions: </label>
        <select value={numQuestions} onChange={e => setNumQuestions(Number(e.target.value))}>
          {[3,5,10].map(n => <option key={n}>{n}</option>)}
        </select>
        <button style={{marginLeft:16}} onClick={startQuiz}>Start Quiz</button>
      </div>
    );
  }
  if (showResult) {
    return (
      <div>
        <h2>Quiz Result</h2>
        <p>Score: {score} / {numQuestions}</p>
        <button onClick={retry}>Retry</button>
      </div>
    );
  }
  const q = quizQuestions[current];
  return (
    <div>
      <h2>Question {current + 1} of {numQuestions}</h2>
      <div>{q.q}</div>
      <div>
        {q.options.map((opt, idx) => (
          <button key={idx} style={{display:'block',margin:'8px 0'}} onClick={() => handleAnswer(idx)}>{opt}</button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
