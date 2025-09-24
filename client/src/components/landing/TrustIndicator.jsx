import React from 'react';

const TrustIndicator = ({ icon, text, color = 'blue' }) => {
  const colorClasses = {
    emerald: 'border-emerald-200 hover:bg-emerald-50',
    blue: 'border-blue-200 hover:bg-blue-50',
    indigo: 'border-indigo-200 hover:bg-indigo-50',
    amber: 'border-amber-200 hover:bg-amber-50',
    purple: 'border-purple-200 hover:bg-purple-50',
    green: 'border-green-200 hover:bg-green-50'
  };

  return (
    <div className={`flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full border ${colorClasses[color] || colorClasses.blue} hover:scale-105 transition-all duration-200`}>
      <span className="text-lg">{icon}</span>
      <span className="text-slate-700 font-medium">{text}</span>
    </div>
  );
};

export default TrustIndicator;