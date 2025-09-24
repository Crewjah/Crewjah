import React from 'react';

const DashboardHeader = ({ user }) => {
  return (
    <div className="mb-6 sm:mb-8">
      <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
        <div className="text-xl sm:text-2xl flex-shrink-0">{user?.avatar || '👨‍🎓'}</div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 truncate">
          {user?.name || 'arjun'} 
        </h1>
      </div>
      <p className="text-base sm:text-xl text-slate-600">
        Ready to continue your learning journey?
      </p>
    </div>
  );
};

export default DashboardHeader;