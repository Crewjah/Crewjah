import React from 'react';

const ProcessStep = ({ step, title, description, className = '' }) => {
  return (
    <div className={`flex items-start space-x-4 p-4 rounded-2xl hover:bg-slate-100 transition-colors duration-200 ${className}`}>
      <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white bg-gradient-to-br from-blue-500 to-indigo-600">
        {step}
      </div>
      <div>
        <h3 className="font-bold text-lg text-slate-800">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;