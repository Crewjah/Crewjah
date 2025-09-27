import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  DeckSelector, 
  FlashCard, 
  CardNavigation, 
  StudyStats, 
  ActionButtons 
} from '../components/flashcards';
import { sampleDecks } from '../constants/flashcardConstants';
import { useStatsTracking } from '../utils/statsTracker';

function Flashcards() {
  const [deckIdx, setDeckIdx] = useState(0);
  const [cardIdx, setCardIdx] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const { startPageTracking, endPageTracking, trackQuestionAnswered } = useStatsTracking();

  const deck = sampleDecks[deckIdx];
  const card = deck.cards[cardIdx];

  useEffect(() => {
    startPageTracking();
    return () => endPageTracking();
  }, [startPageTracking, endPageTracking]);

  const nextCard = () => {
    setShowBack(false);
    setCardIdx((cardIdx + 1) % deck.cards.length);
  };
  
  const prevCard = () => {
    setShowBack(false);
    setCardIdx((cardIdx - 1 + deck.cards.length) % deck.cards.length);
  };

  const handleDeckSelect = (index) => {
    setDeckIdx(index);
    setCardIdx(0);
    setShowBack(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden py-4 sm:py-10 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-4 sm:p-8 flex flex-col items-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2"
          >
            Flashcards
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6 text-center px-2"
          >
            Practice and remember more with spaced repetition. Flip cards to study and track your progress.
          </motion.p>
        
        <DeckSelector
          decks={sampleDecks}
          selectedDeckIndex={deckIdx}
          onDeckSelect={handleDeckSelect}
        />
        
        <FlashCard
          card={card}
          currentIndex={cardIdx}
          totalCards={deck.cards.length}
          showBack={showBack}
          onFlip={() => setShowBack(!showBack)}
        />
        
        <CardNavigation
          onPrevious={prevCard}
          onNext={nextCard}
          onKnow={() => {
            trackQuestionAnswered();
            nextCard();
          }}
          onDontKnow={() => {
            trackQuestionAnswered();
            nextCard();
          }}
        />
        
        <StudyStats
          decksStudied={sampleDecks.length}
          cardsStudied={deck.cards.length}
        />
        
          <ActionButtons
            onAutoGenerate={() => {/* Handle auto-generate */}}
            onExportDeck={() => {/* Handle export */}}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Flashcards;