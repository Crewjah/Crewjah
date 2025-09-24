import React from 'react';
import { motion } from 'framer-motion';

const StatsCard = ({ 
  title, 
  value, 
  unit, 
  icon, 
  color = 'blue', 
  delay = 0,
  className = '' 
}) => {
  const colorClasses = {
    blue: {
      border: 'border-blue-100',
      text: 'text-blue-600'
    },
    emerald: {
      border: 'border-emerald-100',
      text: 'text-emerald-600'
    },
    indigo: {
      border: 'border-indigo-100',
      text: 'text-indigo-600'
    },
    amber: {
      border: 'border-amber-100',
      text: 'text-amber-600'
    },
    purple: {
      border: 'border-purple-100',
      text: 'text-purple-600'
    },
    green: {
      border: 'border-green-100',
      text: 'text-green-600'
    }
  };

  const selectedColor = colorClasses[color] || colorClasses.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg ${selectedColor.border} hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-medium text-slate-600 truncate">{title}</p>
          <p className={`text-2xl sm:text-3xl font-bold ${selectedColor.text} leading-tight`}>{value}</p>
          <p className="text-xs text-slate-500">{unit}</p>
        </div>
        <div className="text-2xl sm:text-3xl ml-2 flex-shrink-0">{icon}</div>
      </div>
    </motion.div>
  );
};

export default StatsCard;