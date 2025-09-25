import React from 'react';

const LoadingButton = ({
  loading = false,
  loadingText = 'Loading...',
  children,
  className = '',
  variant = 'primary',
  size = 'normal',
  ...props
}) => {
  const baseClass = "w-full font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-50";
  
  const sizes = {
    small: "py-2 px-3 text-sm",
    normal: "py-3 px-4 text-base",
    large: "py-4 px-6 text-lg"
  };
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white focus:ring-blue-500",
    secondary: "bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white focus:ring-slate-500",
    danger: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white focus:ring-red-500",
    success: "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white focus:ring-green-500"
  };
  
  const sizeClass = sizes[size] || sizes.normal;
  const variantClass = variants[variant] || variants.primary;
  
  return (
    <button
      disabled={loading}
      className={`${baseClass} ${sizeClass} ${variantClass} ${className}`}
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