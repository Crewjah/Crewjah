import React from 'react';

const QuizSetup = ({ 
  selectedSubject, 
  onSubjectChange, 
  selectedDifficulty, 
  onDifficultyChange, 
  subjects, 
  difficulties, 
  onStartQuiz,
  className = '' 
}) => {
  return (
    <div className={className}>
      <div className="text-center mb-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-2 text-blue-600">Take a Quiz</h1>
        <p className="text-gray-600 text-sm sm:text-base">Test your knowledge and track your progress!</p>
      </div>
        
      <div className="space-y-6">
        <div>
          <label className="block font-medium mb-3 text-gray-700 text-sm sm:text-base">
            📚 Choose Subject:
          </label>
          <select 
            value={selectedSubject} 
            onChange={e => onSubjectChange(e.target.value)} 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 text-sm sm:text-base transition-all"
          >
            {subjects.map(s => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block font-medium mb-3 text-gray-700 text-sm sm:text-base">
            🎯 Select Difficulty:
          </label>
          <select 
            value={selectedDifficulty} 
            onChange={e => onDifficultyChange(e.target.value)} 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 text-sm sm:text-base transition-all"
          >
            {difficulties.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
      </div>
        
      <button 
        className="w-full mt-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 touch-manipulation" 
        onClick={onStartQuiz}
      >
        🚀 Start Quiz
      </button>
    </div>
  );
};

export default QuizSetup;