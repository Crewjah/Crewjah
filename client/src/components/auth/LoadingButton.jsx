import React from 'react';

const LoadingButton = ({
  loading = false,
  loadingText = 'Loading...',
  children,
  className = '',
  variant = 'primary',
  ...props
}) => {
  const baseClass = "w-full py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white",
    secondary: "bg-gradient-to-r from-slate-500 to-slate-600 text-white",
    danger: "bg-gradient-to-r from-red-500 to-red-600 text-white"
  };
  
  const variantClass = variants[variant] || variants.primary;
  
  return (
    <button
      disabled={loading}
      className={`${baseClass} ${variantClass} ${className}`}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>{loadingText}</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default LoadingButton;