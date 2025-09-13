import { useState } from 'react';

const mockCards = [
  { front: 'What is the powerhouse of the cell?', back: 'Mitochondria' },
  { front: 'React is a ___ library.', back: 'JavaScript' },
];

const Flashcards = () => {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = mockCards[idx];

  function handleFlip() {
    setFlipped(f => !f);
  }
  function handleNext() {
    setIdx(i => (i + 1) % mockCards.length);
    setFlipped(false);
  }
  function handlePrev() {
    setIdx(i => (i - 1 + mockCards.length) % mockCards.length);
    setFlipped(false);
  }

  return (
    <div className="edu-page edu-flashcards">
      <h1>Flashcards</h1>
      <div
        className="edu-flashcard transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-100 to-purple-100 hover:from-purple-200 hover:to-blue-200 text-gray-800 font-semibold py-8 px-6 rounded-lg shadow-lg hover:scale-105 cursor-pointer"
        onClick={handleFlip}
        tabIndex={0}
        role="button"
        aria-pressed={flipped}
      >
        {flipped ? card.back : card.front}
      </div>
      <div className="edu-flashcard-controls">
        <button
          className="edu-btn transition-all duration-300 ease-in-out bg-gradient-to-r from-green-400 to-blue-400 hover:from-blue-400 hover:to-green-400 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 mr-2"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="edu-btn transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-400 to-pink-400 hover:from-pink-400 hover:to-purple-400 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <div className="edu-flashcard-progress">Card {idx + 1} of {mockCards.length}</div>
      <div className="edu-flashcard-tip">Click the card to flip</div>
    </div>
  );
}

export default Flashcards;

