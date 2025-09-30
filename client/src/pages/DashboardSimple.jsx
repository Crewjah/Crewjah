import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock, FaBook, FaChartLine, FaSignOutAlt, FaUser, FaCalendarAlt, FaGraduationCap, FaBrain, FaRocket, FaStar, FaRobot, FaTrophy, FaUsers, FaBookOpen } from 'react-icons/fa';

export default function Dashboard() {
  const [user, setUser] = useState({ name: '', email: '' });
  const [stats, setStats] = useState({
    studySessions: 0,
    totalMinutes: 0,
    streak: 0,
    completedTasks: 0
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/signin');
      return;
    }

    // Get user info from localStorage
    const userName = localStorage.getItem('userName') || 'Student';
    const userEmail = localStorage.getItem('userEmail') || 'student@example.com';
    setUser({ name: userName, email: userEmail });

    // Load or initialize stats
    const savedStats = localStorage.getItem('userStats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  const quickActions = [
    {
      title: 'AI Study Buddy',
      description: 'Get instant help with homework & concepts',
      link: '/ai-buddy',
      icon: FaRobot,
      color: 'blue',
      isNew: true
    },
    {
      title: 'Study Rewards',
      description: 'Earn badges, streaks & unlock achievements',
      link: '/rewards',
      icon: FaTrophy,
      color: 'yellow',
      isNew: true
    },
    {
      title: 'Study Groups',
      description: 'Join groups, compete & study together',
      link: '/study-groups',
      icon: FaUsers,
      color: 'purple',
      isNew: true
    },
    {
      title: 'Study Timer',
      description: 'Focus with Pomodoro technique',
      link: '/study-timer',
      icon: FaClock,
      color: 'green'
    },
    {
      title: 'Smart Notes',
      description: 'Upload and organize your notes',
      link: '/smart-notes',
      icon: FaBook,
      color: 'indigo'
    },
    {
      title: 'Flashcards',
      description: 'Practice with interactive flashcards',
      link: '/flashcards',
      icon: FaBookOpen,
      color: 'pink'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaGraduationCap className="text-2xl text-white" />
              <span className="text-xl font-bold text-white">Crewjah</span>
              <span className="text-sm text-purple-300 font-medium">Dashboard</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full">
                <FaUser className="text-purple-300" />
                <span className="text-sm text-white">{user.name}</span>
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-1 text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/10"
              >
                <FaSignOutAlt />
                <span>Sign Out</span>
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <FaStar className="text-yellow-400" />
              <span className="text-white text-sm font-medium">Welcome Back!</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Hello, {user.name}! �
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to continue your learning journey? Let's make today productive with our study tools.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: FaClock, label: "Study Sessions", value: stats.studySessions, color: "blue" },
            { icon: FaBook, label: "Total Minutes", value: stats.totalMinutes, color: "green" },
            { icon: FaCalendarAlt, label: "Study Streak", value: `${stats.streak} days`, color: "purple" },
            { icon: FaChartLine, label: "Completed Tasks", value: stats.completedTasks, color: "pink" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center">
                <div className={`p-3 bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-xl`}>
                  <stat.icon className="text-white text-xl" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-white/70">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🚀 Study Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Link
                  to={action.link}
                  className="block backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all group"
                >
                  {action.isNew && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                      NEW
                    </div>
                  )}
                  <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    <action.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{action.title}</h3>
                  <p className="text-white/70 text-sm">{action.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {stats.studySessions > 0 ? (
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <FaClock className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Last study session completed</p>
                  <p className="text-xs text-gray-500">You're building great study habits!</p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <FaBook className="text-4xl text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-2">No activity yet</p>
                <p className="text-sm text-gray-400">Start your first study session to see your progress here!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}