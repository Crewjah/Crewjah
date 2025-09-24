import React from 'react';

const DashboardHeader = ({ user, onLogout }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
      <div className="mb-6 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
          {user.name || 'Welcome to Your Learning Dashboard'} {user.avatar}
        </h1>
        <p className="text-xl text-slate-600">
          {user.name ? 'Ready to continue your learning journey?' : 'Start your educational journey today!'}
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-4xl">{user.avatar || ''}</div>
        <button
          onClick={onLogout}
          className="px-6 py-2 bg-white/80 backdrop-blur-sm text-slate-700 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-200"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;