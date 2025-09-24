import React from 'react';

const MotivationalQuote = ({ quote, author, icon = "🎓", className = "" }) => {
  return (
    <div className={`bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white shadow-xl ${className}`}>
      <div className="text-4xl mb-4">{icon}</div>
      <blockquote className="text-xl md:text-2xl font-medium mb-4 italic">
        "{quote}"
      </blockquote>
      <cite className="text-blue-200">— {author}</cite>
    </div>
  );
};

export default MotivationalQuote;