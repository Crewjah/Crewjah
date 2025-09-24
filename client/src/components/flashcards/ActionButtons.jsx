import React from 'react';

const ActionButtons = ({ 
  onAutoGenerate, 
  onExportDeck, 
  className = '' 
}) => {
  return (
    <div className={`flex gap-4 mt-4 ${className}`}>
      <button 
        onClick={onAutoGenerate}
        className="px-4 py-2 bg-purple-700 text-white rounded shadow hover:bg-purple-800 transition-colors"
      >
        Auto-generate from summaries
      </button>
      
      <button 
        onClick={onExportDeck}
        className="px-4 py-2 bg-teal-600 text-white rounded shadow hover:bg-teal-700 transition-colors"
      >
        Export deck
      </button>
    </div>
  );
};

export default ActionButtons;