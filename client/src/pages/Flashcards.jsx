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
      <div className="edu-flashcard" onClick={handleFlip} tabIndex={0} role="button" aria-pressed={flipped} style={{cursor:'pointer'}}>
        {flipped ? card.back : card.front}
      </div>
      <div className="edu-flashcard-controls">
        <button className="edu-btn" onClick={handlePrev}>Prev</button>
        <button className="edu-btn" onClick={handleNext}>Next</button>
      </div>
      <div className="edu-flashcard-progress">Card {idx + 1} of {mockCards.length}</div>
      <div className="edu-flashcard-tip">Click the card to flip</div>
    </div>
  );
}

export default Flashcards;

