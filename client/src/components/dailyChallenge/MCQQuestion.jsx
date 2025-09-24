import React from 'react';

const MCQQuestion = ({ 
  question, 
  questionIndex, 
  selectedAnswer, 
  onAnswerSelect, 
  submitted = false,
  showFeedback = false 
}) => {
  const { q, options, answer } = question;

  return (
    <div className="mb-4">
      <div className="mb-1 font-medium">
        {questionIndex + 1}. {q}
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        {options.map((option, optionIndex) => (
          <button
            key={optionIndex}
            className={`py-2 px-3 rounded border font-medium transition ${
              selectedAnswer === optionIndex 
                ? 'bg-primary text-white' 
                : 'bg-blue-100 text-primary hover:bg-primaryHover'
            }`}
            onClick={() => onAnswerSelect(optionIndex)}
            disabled={submitted}
          >
            {option}
          </button>
        ))}
      </div>
      
      {showFeedback && submitted && selectedAnswer !== null && (
        <div className={`mt-2 text-sm ${
          selectedAnswer === answer ? 'text-green-600' : 'text-red-600'
        }`}>
          {selectedAnswer === answer ? 'Correct!' : 'Incorrect.'}
        </div>
      )}
    </div>
  );
};

export default MCQQuestion;