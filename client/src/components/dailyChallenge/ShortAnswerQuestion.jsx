import React from 'react';

const ShortAnswerQuestion = ({ 
  question, 
  answer, 
  onAnswerChange, 
  submitted = false,
  placeholder = "Your answer…" 
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-2 text-primary">Short Answer</h2>
      <div className="mb-2 font-medium">{question}</div>
      <textarea
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        rows={3}
        placeholder={placeholder}
        value={answer}
        onChange={(e) => onAnswerChange(e.target.value)}
        disabled={submitted}
      />
    </div>
  );
};

export default ShortAnswerQuestion;