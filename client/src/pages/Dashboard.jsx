import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import { DashboardHeader, StatsCard, MotivationalQuote } from '../components/dashboard';

// Hooks
import { useAuth, useUserStats } from '../hooks/useDashboard';

// Constants
import { STATS_CONFIG, getRandomQuote } from '../constants/dashboardConstants';

const Dashboard = () => {
  const [error, setError] = useState('');
  const { user, isAuthenticated, logout } = useAuth();
  const { stats } = useUserStats();
  
  // Get a random motivational quote
  const currentQuote = getRandomQuote();

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="text-center">
        <div className="text-red-500 text-xl mb-4"> {error}</div>
        <Link to="/signin" className="text-blue-600 hover:text-blue-700 font-semibold">
          Return to Sign In
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader user={user} onLogout={logout} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {STATS_CONFIG.map((statConfig) => (
            <StatsCard
              key={statConfig.key}
              title={statConfig.title}
              value={stats[statConfig.key]}
              unit={statConfig.unit}
              icon={statConfig.icon}
              color={statConfig.color}
              delay={statConfig.delay}
            />
          ))}
        </div>

        <MotivationalQuote
          quote={currentQuote.quote}
          author={currentQuote.author}
          icon={currentQuote.icon}
        />
      </div>
    </div>
  );
};

export default Dashboard;
