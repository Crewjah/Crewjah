import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { DashboardHeader, StatsCard, MotivationalQuote } from '../components/dashboard';
import EmailVerificationBanner from '../components/dashboard/EmailVerificationBanner';

// Hooks
import { useAuth, useUserStats } from '../hooks/useDashboard';

// Constants
import { STATS_CONFIG, getRandomQuote } from '../constants/dashboardConstants';

// Utils
import { formatStatValue, formatStatUnit } from '../utils/statsFormatter';

const Dashboard = () => {
  const { user } = useAuth();
  const { stats } = useUserStats();

  const handleVerifyEmail = () => {
    // Placeholder for future email verification implementation
    alert('Email verification will be implemented in the next update. For now, you can continue using the platform.');
  };
  
  // Get a random motivational quote
  const currentQuote = getRandomQuote();



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-4 sm:top-20 sm:right-20 w-20 h-20 sm:w-40 sm:h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-10 left-4 sm:bottom-20 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
        <DashboardHeader user={user} />
        
        <EmailVerificationBanner 
          user={user} 
          onVerifyClick={handleVerifyEmail}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {STATS_CONFIG.map((statConfig) => (
            <StatsCard
              key={statConfig.key}
              title={statConfig.title}
              value={formatStatValue(stats[statConfig.key], statConfig.key)}
              unit={formatStatUnit(stats[statConfig.key], statConfig.unit)}
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
