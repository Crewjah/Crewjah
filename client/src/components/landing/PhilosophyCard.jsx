import React from 'react';

const PhilosophyCard = ({ principle, title, category, icon, className = '' }) => {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${className}`}>
      <div className="text-slate-600 mb-4 italic">"{principle}"</div>
      <div className="flex items-center space-x-3">
        <div className="text-2xl">{icon}</div>
        <div>
          <div className="font-semibold text-slate-800">{title}</div>
          <div className="text-sm text-slate-500">{category}</div>
        </div>
      </div>
    </div>
  );
};

export default PhilosophyCard;