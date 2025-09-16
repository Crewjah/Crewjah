
import { useState } from 'react';

const decks = [
  { name: 'Biology', cards: [
    { front: 'What is the powerhouse of the cell?', back: 'Mitochondria' },
    { front: 'Photosynthesis occurs in the?', back: 'Chloroplast' }
  ] },
  { name: 'React', cards: [
    { front: 'React is a ___ library.', back: 'JavaScript' },
    { front: 'What hook manages state?', back: 'useState' }
  ] }
];

const Flashcards = () => {
  const [deckIdx, setDeckIdx] = useState(0);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [mode, setMode] = useState('study');

  const deck = decks[deckIdx];
  const card = deck.cards[idx];

  function handleFlip() {
    setFlipped(f => !f);
  }
  function handleNext() {
    setIdx(i => (i + 1) % deck.cards.length);
    setFlipped(false);
  }
  function handlePrev() {
    setIdx(i => (i - 1 + deck.cards.length) % deck.cards.length);
    setFlipped(false);
  }
  function handleDeckChange(e) {
    setDeckIdx(Number(e.target.value));
    setIdx(0);
    setFlipped(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6 text-primary">Flashcards</h1>
        <div className="mb-4 w-full flex gap-4 items-center">
          <label className="font-medium">Deck:</label>
          <select value={deckIdx} onChange={handleDeckChange} className="px-2 py-1 border rounded">
            {decks.map((d, i) => <option key={d.name} value={i}>{d.name}</option>)}
          </select>
          <label className="font-medium ml-4">Mode:</label>
          <select value={mode} onChange={e => setMode(e.target.value)} className="px-2 py-1 border rounded">
            <option value="study">Study</option>
            <option value="review">Review</option>
          </select>
        </div>
        <div
          className={`w-full bg-blue-100 rounded-lg shadow p-8 flex items-center justify-center mb-4 cursor-pointer select-none text-lg font-semibold ${flipped ? 'bg-primary text-white' : 'text-primary'}`}
          onClick={handleFlip}
          tabIndex={0}
          role="button"
          aria-pressed={flipped}
        >
          {flipped ? card.back : card.front}
        </div>
        <div className="flex gap-4 mb-4">
          <button className="py-2 px-6 bg-gray-100 text-gray-700 rounded hover:bg-gray-200" onClick={handlePrev}>Prev</button>
          <button className="py-2 px-6 bg-primary text-white rounded hover:bg-primaryHover" onClick={handleNext}>Next</button>
        </div>
        <div className="mb-2 text-sm text-gray-500">Card {idx + 1} of {deck.cards.length} ({deck.name})</div>
        <div className="mb-2 text-xs text-gray-400">Click the card to flip</div>
      </div>
    </div>
  );
}

export default Flashcards;

