
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
  import React, { useState } from 'react';
  import { motion } from 'framer-motion';

  const sampleDecks = [
    { title: 'Core Python', cards: [
      { front: 'What is a list?', back: 'A mutable sequence type.' },
      { front: 'What does len() do?', back: 'Returns the length of an object.' }
    ] },
    { title: 'Algorithms', cards: [
      { front: 'Binary Search', back: 'Finds an item in sorted array in O(log n) time.' },
      { front: 'DFS', back: 'Depth-first search for traversing graphs.' }
    ] }
  ];

  export default function Flashcards() {
    const [deckIdx, setDeckIdx] = useState(0);
    const [cardIdx, setCardIdx] = useState(0);
    const [showBack, setShowBack] = useState(false);

    const deck = sampleDecks[deckIdx];
    const card = deck.cards[cardIdx];

    const nextCard = () => {
      setShowBack(false);
      setCardIdx((cardIdx + 1) % deck.cards.length);
    };
    const prevCard = () => {
      setShowBack(false);
      setCardIdx((cardIdx - 1 + deck.cards.length) % deck.cards.length);
    };

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl mx-auto bg-white/90 rounded-3xl shadow-xl p-8 flex flex-col items-center"
        >
          <h2 className="text-3xl font-bold text-purple-700 mb-2">Flashcards</h2>
          <p className="text-base text-teal-700 mb-6 text-center">Practice and remember more with spaced repetition. Flip cards to study and track your progress.</p>
          <div className="mb-4 w-full flex gap-4 justify-center">
            {sampleDecks.map((d, i) => (
              <button
                key={d.title}
                onClick={() => { setDeckIdx(i); setCardIdx(0); setShowBack(false); }}
                className={`px-4 py-2 rounded-xl shadow font-semibold transition ${deckIdx === i ? 'bg-purple-700 text-white' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'}`}
              >
                {d.title}
              </button>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 via-blue-100 to-pink-100 rounded-2xl shadow-lg p-8 mb-6"
          >
            <div className="text-lg font-bold text-purple-700 mb-2">Card {cardIdx+1} / {deck.cards.length}</div>
            <div className="w-full flex flex-col items-center">
              <div
                className={`w-full max-w-xs h-32 flex items-center justify-center text-xl font-semibold rounded-xl shadow cursor-pointer bg-white border-2 border-purple-200 mb-4 transition-transform duration-300 ${showBack ? 'rotate-y-180' : ''}`}
                onClick={() => setShowBack(!showBack)}
              >
                {showBack ? card.back : card.front}
              </div>
              <div className="flex gap-4">
                <button onClick={prevCard} className="px-4 py-2 bg-teal-600 text-white rounded shadow hover:bg-teal-700">Prev</button>
                <button onClick={nextCard} className="px-4 py-2 bg-purple-600 text-white rounded shadow hover:bg-purple-700">Next</button>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600">Know</button>
                <button className="px-4 py-2 bg-pink-500 text-white rounded shadow hover:bg-pink-600">Don’t know</button>
              </div>
            </div>
          </motion.div>
          <div className="w-full flex flex-col items-center mb-4">
            <div className="text-sm text-gray-600">Decks studied: <span className="font-bold text-purple-700">{sampleDecks.length}</span></div>
            <div className="text-sm text-gray-600">Cards studied: <span className="font-bold text-teal-700">{deck.cards.length}</span></div>
          </div>
          <div className="flex gap-4 mt-4">
            <button className="px-4 py-2 bg-purple-700 text-white rounded shadow hover:bg-purple-800">Auto-generate from summaries</button>
            <button className="px-4 py-2 bg-teal-600 text-white rounded shadow hover:bg-teal-700">Export deck</button>
          </div>
        </motion.div>
      </div>
    );
  }
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

