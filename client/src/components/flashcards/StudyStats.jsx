import React from 'react';

const StudyStats = ({ 
  decksStudied = 0, 
  cardsStudied = 0, 
  className = '' 
}) => {
  return (
    <div className={`w-full flex flex-col items-center mb-4 ${className}`}>
      <div className="text-sm text-gray-600">
        Decks studied: <span className="font-bold text-purple-700">{decksStudied}</span>
      </div>
      <div className="text-sm text-gray-600">
        Cards studied: <span className="font-bold text-teal-700">{cardsStudied}</span>
      </div>
    </div>
  );
};

export default StudyStats;