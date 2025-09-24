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
      <div className="mb-4 sm:mb-6 font-semibold text-base sm:text-lg leading-relaxed">{q}</div>
      
      <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-4 sm:mb-6">
        {options.map((option, index) => (
          <button
            key={index}
            className={`w-full py-3 sm:py-4 px-4 sm:px-5 rounded-lg border font-medium transition-all duration-200 text-left ${
              selected === index 
                ? 'bg-primary text-white shadow-md transform scale-[0.98]' 
                : 'bg-blue-100 text-primary hover:bg-blue-200 active:scale-[0.98]'
            } ${selected !== null ? 'cursor-default' : 'hover:shadow-sm cursor-pointer touch-manipulation'}`}
            onClick={() => onSelect(index)}
            disabled={selected !== null}
          >
            <span className="text-sm sm:text-base">{option}</span>
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