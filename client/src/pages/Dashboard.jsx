import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [user, setUser] = useState({ name: '', email: '', avatar: '👨‍🎓' });
  const [stats, setStats] = useState({
    questionsAnswered: 0,
    studyStreak: 0,
    completedQuizzes: 0,
    studyTime: 0
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    
    if (!currentUser) {
      // Redirect to sign in if not logged in
      navigate('/signin');
      return;
    }

    // Set user data from localStorage
    setUser({
      name: currentUser.name || 'User',
      email: currentUser.email || '',
      avatar: '👨‍🎓'
    });

    // Load user stats (in a real app, this would come from the backend)
    const userStats = JSON.parse(localStorage.getItem('userStats') || '{}');
    setStats({
      questionsAnswered: userStats.questionsAnswered || 0,
      studyStreak: userStats.studyStreak || 0,
      completedQuizzes: userStats.completedQuizzes || 0,
      studyTime: userStats.studyTime || 0
    });
  }, [navigate]);

  const handleLogout = () => {
    // Clear user session
    localStorage.removeItem('currentUser');
    // Optionally keep userStats for when they sign back in
    // localStorage.removeItem('userStats');
    
    // Redirect to sign in
    navigate('/signin');
  };

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
              onClick={handleLogout}
              className="px-6 py-2 bg-white/80 backdrop-blur-sm text-slate-700 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-200"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Study Streak</p>
                <p className="text-3xl font-bold text-blue-600">{stats.studyStreak}</p>
                <p className="text-xs text-slate-500">days</p>
              </div>
              <div className="text-3xl">🔥</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Questions</p>
                <p className="text-3xl font-bold text-emerald-600">{stats.questionsAnswered}</p>
                <p className="text-xs text-slate-500">answered</p>
              </div>
              <div className="text-3xl">❓</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Quizzes</p>
                <p className="text-3xl font-bold text-indigo-600">{stats.completedQuizzes}</p>
                <p className="text-xs text-slate-500">completed</p>
              </div>
              <div className="text-3xl">📝</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Study Time</p>
                <p className="text-3xl font-bold text-amber-600">{stats.studyTime}</p>
                <p className="text-xs text-slate-500">hours</p>
              </div>
              <div className="text-3xl">⏰</div>
            </div>
          </motion.div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <div className="text-4xl mb-4">🎓</div>
          <blockquote className="text-xl md:text-2xl font-medium mb-4 italic">
            "The beautiful thing about learning is that no one can take it away from you."
          </blockquote>
          <cite className="text-blue-200">— B.B. King</cite>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
