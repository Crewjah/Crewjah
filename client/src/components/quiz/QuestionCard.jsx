import React from 'react';

const QuestionCard = ({ 
  question, 
  selected, 
  onSelect, 
  showFeedback = false,
  className = '' 
}) => {
  const { q, options, answer } = question;
  
  return (
    <div className={className}>
      <div className="mb-4 font-semibold text-lg">{q}</div>
      
      <div className="grid grid-cols-1 gap-3 mb-4">
        {options.map((option, index) => (
          <button
            key={index}
            className={`w-full py-3 px-4 rounded border font-medium transition-all duration-200 ${
              selected === index 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-blue-100 text-primary hover:bg-blue-200'
            } ${selected !== null ? 'cursor-default' : 'hover:shadow-sm'}`}
            onClick={() => onSelect(index)}
            disabled={selected !== null}
          >
            {option}
          </button>
        ))}
      </div>
      
      {showFeedback && selected !== null && (
        <div className={`mb-4 text-lg font-bold text-center p-3 rounded ${
          selected === answer 
            ? 'text-green-600 bg-green-50 border border-green-200' 
            : 'text-red-600 bg-red-50 border border-red-200'
        }`}>
          {selected === answer ? '✅ Correct!' : '❌ Incorrect.'}
          {selected !== answer && (
            <div className="text-sm mt-1 text-gray-600">
              Correct answer: {options[answer]}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;