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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-4 sm:py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl mx-auto bg-white/90 rounded-3xl shadow-xl p-4 sm:p-8 flex flex-col items-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-2">Flashcards</h2>
        <p className="text-sm sm:text-base text-teal-700 mb-4 sm:mb-6 text-center px-2">
          Practice and remember more with spaced repetition. Flip cards to study and track your progress.
        </p>
        
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
  );
}

export default Flashcards;