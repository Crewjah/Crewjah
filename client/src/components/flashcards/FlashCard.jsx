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
      className={`w-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 via-blue-100 to-pink-100 rounded-2xl shadow-lg p-4 sm:p-8 mb-4 sm:mb-6 ${className}`}
    >
      <div className="text-base sm:text-lg font-bold text-purple-700 mb-2 sm:mb-4">
        Card {currentIndex + 1} / {totalCards}
      </div>
      
      <div className="w-full flex flex-col items-center">
        <div
          className={`w-full max-w-xs h-40 sm:h-32 flex items-center justify-center text-base sm:text-xl font-semibold rounded-xl shadow cursor-pointer bg-white border-2 border-purple-200 mb-4 transition-transform duration-300 touch-manipulation ${
            showBack ? 'rotate-y-180' : ''
          }`}
          onClick={onFlip}
        >
          <div className="text-center px-3 sm:px-4 leading-relaxed">
            {showBack ? card.back : card.front}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FlashCard;