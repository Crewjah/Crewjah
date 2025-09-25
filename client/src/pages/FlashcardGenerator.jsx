import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaRandom, FaCheck, FaTimes, FaStar, FaEye, FaEyeSlash, FaBrain } from 'react-icons/fa';

const FlashcardGenerator = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studyMode, setStudyMode] = useState('create');
  const [newCard, setNewCard] = useState({ front: '', back: '', difficulty: 'medium', subject: '' });
  const [studyStats, setStudyStats] = useState({ correct: 0, incorrect: 0, total: 0 });
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [showBulkCreate, setShowBulkCreate] = useState(false);
  const [bulkText, setBulkText] = useState('');

  const subjects = ['Mathematics', 'Science', 'History', 'Literature', 'Languages', 'Geography'];
  const difficulties = [
    { value: 'easy', label: 'Easy', color: 'bg-green-100 text-green-800' },
    { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'hard', label: 'Hard', color: 'bg-red-100 text-red-800' }
  ];

  // Sample flashcards for demonstration
  useEffect(() => {
    const sampleCards = [
      {
        id: 1,
        front: "What is photosynthesis?",
        back: "The process by which plants convert light energy into chemical energy (glucose) using carbon dioxide and water.",
        difficulty: "medium",
        subject: "Science",
        mastered: false,
        attempts: 0,
        correct: 0
      },
      {
        id: 2,
        front: "What is the capital of France?",
        back: "Paris",
        difficulty: "easy",
        subject: "Geography",
        mastered: true,
        attempts: 3,
        correct: 3
      },
      {
        id: 3,
        front: "Solve: x² + 5x + 6 = 0",
        back: "x = -2 or x = -3 (using factoring: (x+2)(x+3) = 0)",
        difficulty: "hard",
        subject: "Mathematics",
        mastered: false,
        attempts: 2,
        correct: 1
      }
    ];
    setFlashcards(sampleCards);
  }, []);

  const filteredCards = flashcards.filter(card => 
    selectedSubject === 'all' || card.subject === selectedSubject
  );

  const addFlashcard = () => {
    if (newCard.front.trim() && newCard.back.trim()) {
      const card = {
        id: Date.now(),
        ...newCard,
        mastered: false,
        attempts: 0,
        correct: 0
      };
      setFlashcards([...flashcards, card]);
      setNewCard({ front: '', back: '', difficulty: 'medium', subject: '' });
    }
  };

  const deleteFlashcard = (id) => {
    setFlashcards(flashcards.filter(card => card.id !== id));
    if (currentCard >= flashcards.length - 1) {
      setCurrentCard(0);
    }
  };

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % filteredCards.length);
    setIsFlipped(false);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
    setIsFlipped(false);
  };

  const shuffleCards = () => {
    const shuffled = [...filteredCards].sort(() => Math.random() - 0.5);
    setFlashcards(prev => prev.map(card => 
      shuffled.find(s => s.id === card.id) || card
    ));
    setCurrentCard(0);
    setIsFlipped(false);
  };

  const markAnswer = (correct) => {
    const cardId = filteredCards[currentCard]?.id;
    if (cardId) {
      setFlashcards(prev => prev.map(card => {
        if (card.id === cardId) {
          const newAttempts = card.attempts + 1;
          const newCorrect = card.correct + (correct ? 1 : 0);
          return {
            ...card,
            attempts: newAttempts,
            correct: newCorrect,
            mastered: newCorrect >= 3 && (newCorrect / newAttempts) >= 0.8
          };
        }
        return card;
      }));
      
      setStudyStats(prev => ({
        correct: prev.correct + (correct ? 1 : 0),
        incorrect: prev.incorrect + (correct ? 0 : 1),
        total: prev.total + 1
      }));
    }
    
    setTimeout(() => {
      nextCard();
    }, 1000);
  };

  const createBulkFlashcards = () => {
    const lines = bulkText.split('\n').filter(line => line.trim());
    const newCards = [];
    
    lines.forEach(line => {
      const parts = line.split('|').map(part => part.trim());
      if (parts.length >= 2) {
        newCards.push({
          id: Date.now() + Math.random(),
          front: parts[0],
          back: parts[1],
          difficulty: parts[2] || 'medium',
          subject: parts[3] || 'General',
          mastered: false,
          attempts: 0,
          correct: 0
        });
      }
    });
    
    setFlashcards([...flashcards, ...newCards]);
    setBulkText('');
    setShowBulkCreate(false);
  };

  const modes = [
    { id: 'create', label: 'Create Cards', icon: FaPlus },
    { id: 'study', label: 'Study Mode', icon: FaBrain },
    { id: 'review', label: 'Review All', icon: FaEye }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Flashcard Generator
          </h1>
          <p className="text-gray-600 text-lg">
            Create, study, and master concepts with intelligent spaced repetition
          </p>
        </motion.div>

        {/* Mode Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2 flex">
            {modes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setStudyMode(mode.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  studyMode === mode.id
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <mode.icon />
                {mode.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Stats Bar */}
        {studyMode === 'study' && studyStats.total > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 mb-8"
          >
            <div className="flex justify-around text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">{studyStats.correct}</div>
                <div className="text-sm text-gray-600">Correct</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">{studyStats.incorrect}</div>
                <div className="text-sm text-gray-600">Incorrect</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {Math.round((studyStats.correct / studyStats.total) * 100)}%
                </div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
            </div>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {/* Create Mode */}
          {studyMode === 'create' && (
            <motion.div
              key="create"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Create Form */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Create New Flashcard</h2>
                  <button
                    onClick={() => setShowBulkCreate(!showBulkCreate)}
                    className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                  >
                    Bulk Create
                  </button>
                </div>

                {showBulkCreate ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bulk Import (Format: Question | Answer | Difficulty | Subject)
                      </label>
                      <textarea
                        value={bulkText}
                        onChange={(e) => setBulkText(e.target.value)}
                        placeholder="What is 2+2? | 4 | easy | Mathematics&#10;Capital of France? | Paris | easy | Geography&#10;Define photosynthesis? | Process plants use to make food | medium | Science"
                        className="w-full h-32 p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={createBulkFlashcards}
                        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      >
                        Import Cards
                      </button>
                      <button
                        onClick={() => setShowBulkCreate(false)}
                        className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Question/Front</label>
                        <textarea
                          value={newCard.front}
                          onChange={(e) => setNewCard({...newCard, front: e.target.value})}
                          placeholder="Enter your question or term..."
                          className="w-full h-24 p-3 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                          <select
                            value={newCard.subject}
                            onChange={(e) => setNewCard({...newCard, subject: e.target.value})}
                            className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                          >
                            <option value="">Select Subject</option>
                            {subjects.map(subject => (
                              <option key={subject} value={subject}>{subject}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                          <select
                            value={newCard.difficulty}
                            onChange={(e) => setNewCard({...newCard, difficulty: e.target.value})}
                            className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                          >
                            {difficulties.map(diff => (
                              <option key={diff.value} value={diff.value}>{diff.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Answer/Back</label>
                        <textarea
                          value={newCard.back}
                          onChange={(e) => setNewCard({...newCard, back: e.target.value})}
                          placeholder="Enter the answer or definition..."
                          className="w-full h-24 p-3 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                      <button
                        onClick={addFlashcard}
                        disabled={!newCard.front.trim() || !newCard.back.trim()}
                        className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        Add Flashcard
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Cards List */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Your Flashcards ({flashcards.length})</h2>
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="all">All Subjects</option>
                    {subjects.map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredCards.map((card) => (
                    <div key={card.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex justify-between items-start mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          difficulties.find(d => d.value === card.difficulty)?.color
                        }`}>
                          {difficulties.find(d => d.value === card.difficulty)?.label}
                        </span>
                        <div className="flex gap-2">
                          {card.mastered && <FaStar className="text-yellow-500" />}
                          <button
                            onClick={() => deleteFlashcard(card.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="font-medium text-gray-800 text-sm mb-1">{card.front}</div>
                        <div className="text-gray-600 text-xs">{card.back}</div>
                      </div>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>{card.subject}</span>
                        <span>{card.attempts > 0 && `${card.correct}/${card.attempts}`}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Study Mode */}
          {studyMode === 'study' && filteredCards.length > 0 && (
            <motion.div
              key="study"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Controls */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="text-lg font-medium text-gray-700">
                    Card {currentCard + 1} of {filteredCards.length}
                  </span>
                  <select
                    value={selectedSubject}
                    onChange={(e) => {
                      setSelectedSubject(e.target.value);
                      setCurrentCard(0);
                    }}
                    className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="all">All Subjects</option>
                    {subjects.map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={shuffleCards}
                  className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors flex items-center gap-2"
                >
                  <FaRandom />
                  Shuffle
                </button>
              </div>

              {/* Flashcard */}
              <div className="flex justify-center">
                <div
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="relative w-full max-w-lg h-80 cursor-pointer"
                  style={{ perspective: '1000px' }}
                >
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-full"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front */}
                    <div
                      className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-2xl flex items-center justify-center p-8"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div className="text-center">
                        <div className="text-white text-xl font-medium mb-4">
                          {filteredCards[currentCard]?.front}
                        </div>
                        <div className="text-amber-100 text-sm">Click to reveal answer</div>
                      </div>
                    </div>

                    {/* Back */}
                    <div
                      className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl shadow-2xl flex items-center justify-center p-8"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <div className="text-center">
                        <div className="text-white text-lg mb-6">
                          {filteredCards[currentCard]?.back}
                        </div>
                        <div className="flex justify-center gap-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              markAnswer(false);
                            }}
                            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
                          >
                            <FaTimes />
                            Wrong
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              markAnswer(true);
                            }}
                            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
                          >
                            <FaCheck />
                            Correct
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={prevCard}
                  className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={nextCard}
                  className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Next
                </button>
              </div>
            </motion.div>
          )}

          {/* Review Mode */}
          {studyMode === 'review' && (
            <motion.div
              key="review"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Review All Cards</h2>
              <div className="space-y-4">
                {filteredCards.map((card) => (
                  <div key={card.id} className="border border-gray-200 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          difficulties.find(d => d.value === card.difficulty)?.color
                        }`}>
                          {difficulties.find(d => d.value === card.difficulty)?.label}
                        </span>
                        <span className="text-sm text-gray-600">{card.subject}</span>
                        {card.mastered && <FaStar className="text-yellow-500" />}
                      </div>
                      {card.attempts > 0 && (
                        <span className="text-sm text-gray-500">
                          {card.correct}/{card.attempts} ({Math.round((card.correct/card.attempts)*100)}%)
                        </span>
                      )}
                    </div>
                    <div className="mb-2">
                      <div className="font-medium text-gray-800 mb-2">{card.front}</div>
                      <div className="text-gray-600 text-sm">{card.back}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {filteredCards.length === 0 && studyMode !== 'create' && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No flashcards yet</h3>
            <p className="text-gray-500 mb-4">Create your first flashcard to start studying!</p>
            <button
              onClick={() => setStudyMode('create')}
              className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
            >
              Create Flashcards
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashcardGenerator;