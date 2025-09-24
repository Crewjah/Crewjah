import React from 'react';

const ErrorMessage = ({ error, className = '' }) => {
  if (!error) return null;
  
  return (
    <div className={`p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm ${className}`}>
      {error}
    </div>
  );
};

export default ErrorMessage;