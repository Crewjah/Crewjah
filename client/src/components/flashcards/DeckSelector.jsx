import React from 'react';

const DeckSelector = ({ 
  decks, 
  selectedDeckIndex, 
  onDeckSelect, 
  className = '' 
}) => {
  const handleDeckSelect = (index) => {
    onDeckSelect(index);
  };

  return (
    <div className={`mb-4 w-full flex gap-4 justify-center ${className}`}>
      {decks.map((deck, index) => (
        <button
          key={deck.title}
          onClick={() => handleDeckSelect(index)}
          className={`px-4 py-2 rounded-xl shadow font-semibold transition ${
            selectedDeckIndex === index 
              ? 'bg-purple-700 text-white' 
              : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
          }`}
        >
          {deck.title}
        </button>
      ))}
    </div>
  );
};

export default DeckSelector;