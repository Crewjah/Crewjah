import React from 'react';

const CardNavigation = ({ 
  onPrevious, 
  onNext, 
  onKnow, 
  onDontKnow, 
  className = '' 
}) => {
  return (
    <div className={`flex gap-2 sm:gap-4 flex-wrap justify-center ${className}`}>
      <button 
        onClick={onPrevious} 
        className="px-3 sm:px-4 py-2 sm:py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 active:scale-95 transition-all text-sm sm:text-base font-medium touch-manipulation"
      >
        ← Prev
      </button>
      
      <button 
        onClick={onNext} 
        className="px-3 sm:px-4 py-2 sm:py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 active:scale-95 transition-all text-sm sm:text-base font-medium touch-manipulation"
      >
        Next →
      </button>
      
      <button 
        onClick={onKnow}
        className="px-3 sm:px-4 py-2 sm:py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 active:scale-95 transition-all text-sm sm:text-base font-medium touch-manipulation"
      >
        ✅ Know
      </button>
      
      <button 
        onClick={onDontKnow}
        className="px-3 sm:px-4 py-2 sm:py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 active:scale-95 transition-all text-sm sm:text-base font-medium touch-manipulation"
      >
        ❌ Don't Know
      </button>
    </div>
  );
};

export default CardNavigation;