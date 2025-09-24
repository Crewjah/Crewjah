import React from 'react';

const ChallengeResults = ({ 
  correctCount, 
  totalQuestions, 
  streak = 0, 
  xpEarned = 0,
  message = "Check back tomorrow for a new challenge!" 
}) => {
  return (
    <div className="bg-blue-50 rounded-lg p-4 mt-4 text-center">
      <div className="mb-2 text-lg font-bold text-primary">
        Challenge Complete!
      </div>
      
      <div className="mb-1 text-green-600">
        You got {correctCount} / {totalQuestions} MCQs correct.
      </div>
      
      <div className="mb-1 text-blue-700">
        Streak: <span className="font-bold">{streak} days</span> | 
        XP: <span className="font-bold">+{xpEarned}</span>
      </div>
      
      <div className="mb-1 text-gray-600">
        {message}
      </div>
    </div>
  );
};

export default ChallengeResults;