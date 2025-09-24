import React from 'react';

const QuizSetup = ({ 
  subject, 
  setSubject, 
  difficulty, 
  setDifficulty, 
  subjects, 
  difficulties, 
  onStart,
  className = '' 
}) => {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-blue-50 ${className}`}>
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-primary">Take a Quiz</h1>
        
        <div className="mb-4">
          <label className="font-medium mr-2">Subject:</label>
          <select 
            value={subject} 
            onChange={e => setSubject(e.target.value)} 
            className="px-2 py-1 border rounded"
          >
            {subjects.map(s => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
          
          <label className="font-medium ml-4 mr-2">Difficulty:</label>
          <select 
            value={difficulty} 
            onChange={e => setDifficulty(e.target.value)} 
            className="px-2 py-1 border rounded"
          >
            {difficulties.map(d => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </div>
        
        <button 
          className="w-full py-2 bg-primary text-white font-bold rounded hover:bg-primaryHover transition" 
          onClick={onStart}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizSetup;