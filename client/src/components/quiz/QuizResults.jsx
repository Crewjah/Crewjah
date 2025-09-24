import React from 'react';

const QuizResults = ({ 
  score, 
  totalQuestions, 
  subject, 
  difficulty, 
  onRestart, 
  onBackToDashboard = null 
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getScoreMessage = () => {
    if (percentage >= 90) return "Outstanding! 🏆";
    if (percentage >= 80) return "Excellent work! 🎉";
    if (percentage >= 70) return "Good job! 👍";
    if (percentage >= 60) return "Not bad! 📚";
    return "Keep practicing! 💪";
  };

  const getScoreColor = () => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="text-center">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-600">🎯 Quiz Complete!</h2>
        <div className="text-gray-600 mb-4">
          {subject} - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </div>
      </div>

      <div className="mb-6">
        <div className={`text-6xl font-bold mb-2 ${getScoreColor()}`}>
          {percentage}%
        </div>
        <div className="text-xl mb-2">
          {score} out of {totalQuestions} correct
        </div>
        <div className="text-lg font-semibold text-gray-700">
          {getScoreMessage()}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRestart}
          className="bg-primary text-white px-6 py-3 rounded font-medium hover:bg-primaryHover transition-colors"
        >
          Retry
        </button>
        {onBackToDashboard && (
          <button
            onClick={onBackToDashboard}
            className="bg-gray-600 text-white px-6 py-3 rounded font-medium hover:bg-gray-700 transition-colors"
          >
            Back to Dashboard
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizResults;