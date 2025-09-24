import React from 'react';

const CardNavigation = ({ 
  onPrevious, 
  onNext, 
  onKnow, 
  onDontKnow, 
  className = '' 
}) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <button 
        onClick={onPrevious} 
        className="px-4 py-2 bg-teal-600 text-white rounded shadow hover:bg-teal-700 transition-colors"
      >
        Prev
      </button>
      
      <button 
        onClick={onNext} 
        className="px-4 py-2 bg-purple-600 text-white rounded shadow hover:bg-purple-700 transition-colors"
      >
        Next
      </button>
      
      <button 
        onClick={onKnow}
        className="px-4 py-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600 transition-colors"
      >
        Know
      </button>
      
      <button 
        onClick={onDontKnow}
        className="px-4 py-2 bg-pink-500 text-white rounded shadow hover:bg-pink-600 transition-colors"
      >
        Don't know
      </button>
    </div>
  );
};

export default CardNavigation;