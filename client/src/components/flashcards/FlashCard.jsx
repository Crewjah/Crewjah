import React from 'react';
import { motion } from 'framer-motion';

const FlashCard = ({ 
  card, 
  currentIndex, 
  totalCards, 
  showBack, 
  onFlip, 
  className = '' 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 via-blue-100 to-pink-100 rounded-2xl shadow-lg p-8 mb-6 ${className}`}
    >
      <div className="text-lg font-bold text-purple-700 mb-2">
        Card {currentIndex + 1} / {totalCards}
      </div>
      
      <div className="w-full flex flex-col items-center">
        <div
          className={`w-full max-w-xs h-32 flex items-center justify-center text-xl font-semibold rounded-xl shadow cursor-pointer bg-white border-2 border-purple-200 mb-4 transition-transform duration-300 ${
            showBack ? 'rotate-y-180' : ''
          }`}
          onClick={onFlip}
        >
          <div className="text-center px-4">
            {showBack ? card.back : card.front}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FlashCard;