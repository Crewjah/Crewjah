import { useState } from 'react';

const DailyChallenge = () => {
  const [done, setDone] = useState(false);
  const challenge = {
    mcqs: [
      { q: 'What is the output of print(2*3)?', options: ['5', '6', '23', 'Error'], answer: 1 },
      { q: 'Which is a sorting algorithm?', options: ['Bubble', 'Fizz', 'Buzz', 'Pop'], answer: 0 },
      { q: 'What is 10/2?', options: ['2', '5', '10', '20'], answer: 1 }
    ],
    short: 'Explain the difference between a list and a tuple in Python.'
  };
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [xp, setXp] = useState(0);
  const handleMCQ = (idx, ans) => {
    const newAnswers = [...answers];
    newAnswers[idx] = ans;
    setAnswers(newAnswers);
  };
  const submit = () => {
    setShowResult(true);
    setXp(answers.filter((a,i)=>a===challenge.mcqs[i].answer).length * 10 + 10);
    setDone(true);
  };
  if (done) return <div><h2>Daily Challenge</h2><div>Completed! +{xp} XP</div><div>Streak: 3 days</div></div>;
  return (
    <div>
      <h2>Daily Challenge</h2>
      <div>3 MCQs + 1 Short Answer</div>
      {challenge.mcqs.map((mcq,i)=>(
        <div key={i} style={{margin:'12px 0'}}>
          <div>{mcq.q}</div>
          {mcq.options.map((opt,j)=>(
            <label key={j} style={{marginRight:8}}>
              <input type="radio" name={`mcq${i}`} checked={answers[i]===j} onChange={()=>handleMCQ(i,j)} /> {opt}
            </label>
          ))}
        </div>
      ))}
      <div style={{margin:'12px 0'}}>
        <div>{challenge.short}</div>
        <textarea rows={2} style={{width:'100%'}} placeholder="Your answer..." />
      </div>
      {!showResult && <button onClick={submit}>Submit Challenge</button>}
      {showResult && <div>Score: {xp} XP</div>}
    </div>
  );
};

export default DailyChallenge;
