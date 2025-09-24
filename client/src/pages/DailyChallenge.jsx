
import { useState } from 'react';
import { MCQQuestion, ShortAnswerQuestion, ChallengeResults } from '../components/dailyChallenge';
import { mcqs, shortChallenge, challengeConfig } from '../constants/dailyChallengeConstants';
import { Button } from '../components/ui';

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
            <MCQQuestion
              key={i}
              question={mcq}
              questionIndex={i}
              selectedAnswer={mcqAnswers[i]}
              onAnswerSelect={(answer) => handleMcq(i, answer)}
              submitted={submitted}
              showFeedback={true}
            />
          ))}
        </div>
        {/* Short Answer */}
        <ShortAnswerQuestion
          question={shortChallenge.desc}
          answer={shortAns}
          onAnswerChange={setShortAns}
          submitted={submitted}
        />
        <Button 
          variant="primary" 
          size="lg"
          className="w-full mb-4" 
          onClick={handleSubmit} 
          disabled={submitted || mcqAnswers.includes(null) || !shortAns}
        >
          {submitted ? 'Submitted!' : 'Submit'}
        </Button>
        {submitted && (
          <ChallengeResults
            correctCount={correctCount}
            totalQuestions={mcqs.length}
            streak={challengeConfig.defaultStreak}
            xpEarned={challengeConfig.defaultXP}
            message={challengeConfig.completionMessage}
          />
        )}
      </div>
    </div>
  );
}

export default DailyChallenge;
