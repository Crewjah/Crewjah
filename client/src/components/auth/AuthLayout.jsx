import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({ 
  children, 
  title, 
  subtitle, 
  backgroundVariant = 'default',
  showLogo = true 
}) => {
  const backgrounds = {
    default: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8",
    colorful: "min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 via-purple-200 to-pink-300",
    simple: "min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4"
  };
  
  const backgroundClass = backgrounds[backgroundVariant] || backgrounds.default;
  
  return (
    <div className={backgroundClass}>
      {/* Floating Background Elements for default variant */}
      {backgroundVariant === 'default' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        </div>
      )}

      <div className={`relative ${backgroundVariant === 'colorful' ? 'bg-white rounded-3xl shadow-2xl border-2 border-teal-200 animate-fadein' : 'bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-100'} p-6 sm:p-8 w-full max-w-sm sm:max-w-md lg:max-w-lg`}>
        {/* Header */}
        {(showLogo || title) && (
          <div className="text-center mb-8">
            {showLogo && (
              <Link to="/" className="inline-flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-bold">📚</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  Crewjah
                </span>
              </Link>
            )}
            {title && (
              <>
                <h1 className="text-3xl font-bold text-slate-800 mb-2">{title}</h1>
                {subtitle && <p className="text-slate-600">{subtitle}</p>}
              </>
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;