import React from 'react';

const FeatureCard = ({ icon, title, description, color = 'blue', delay = '0ms' }) => {
  const colors = {
    blue: { 
      bg: 'bg-gradient-to-br from-white to-blue-50', 
      border: 'border-blue-100 hover:border-blue-300', 
      icon: 'bg-gradient-to-br from-blue-400 to-blue-600' 
    },
    emerald: { 
      bg: 'bg-gradient-to-br from-white to-emerald-50', 
      border: 'border-emerald-100 hover:border-emerald-300', 
      icon: 'bg-gradient-to-br from-emerald-400 to-emerald-600' 
    },
    indigo: { 
      bg: 'bg-gradient-to-br from-white to-indigo-50', 
      border: 'border-indigo-100 hover:border-indigo-300', 
      icon: 'bg-gradient-to-br from-indigo-400 to-indigo-600' 
    },
    amber: { 
      bg: 'bg-gradient-to-br from-white to-amber-50', 
      border: 'border-amber-100 hover:border-amber-300', 
      icon: 'bg-gradient-to-br from-amber-400 to-amber-600' 
    },
    purple: { 
      bg: 'bg-gradient-to-br from-white to-purple-50', 
      border: 'border-purple-100 hover:border-purple-300', 
      icon: 'bg-gradient-to-br from-purple-400 to-purple-600' 
    }
  };

  const colorSet = colors[color] || colors.blue;
  
  return (
    <div 
      className={`group ${colorSet.bg} rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border ${colorSet.border}`}
      style={{ animationDelay: delay }}
    >
      <div className={`w-16 h-16 ${colorSet.icon} rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform duration-300`}>
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default FeatureCard;