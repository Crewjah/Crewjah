import { useState } from 'react';

const todayChallenge = {
  title: "Reverse a String",
  desc: "Write a function that reverses a string. For example, 'hello' becomes 'olleh'.",
  example: "Input: 'world' → Output: 'dlrow'"
};

const DailyChallenge = () => {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    setSubmitted(true);
  }

  return (
    <div className="edu-page edu-challenge">
      <h1>Daily Challenge</h1>
      <div className="edu-challenge-block">
        <h2>{todayChallenge.title}</h2>
        <div>{todayChallenge.desc}</div>
        <div className="edu-challenge-example">{todayChallenge.example}</div>
      </div>
      <textarea
        className="edu-input"
        rows={3}
        placeholder="Your solution…"
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{width:'100%',maxWidth:600,margin:'16px 0'}}
        disabled={submitted}
      />
      <br />
      <button
        className="edu-btn edu-btn-primary transition-all duration-300 ease-in-out bg-gradient-to-r from-yellow-500 to-red-500 hover:from-red-500 hover:to-yellow-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        onClick={handleSubmit}
        disabled={!input || submitted}
      >
        {submitted ? 'Submitted!' : 'Submit'}
      </button>
      {submitted && <div className="edu-success">Your solution was submitted. Check back tomorrow for a new challenge!</div>}
    </div>
  );
}

export default DailyChallenge;
