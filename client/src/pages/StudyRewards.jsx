import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFire, FaStar, FaTrophy, FaClock } from 'react-icons/fa';

const StudyRewards = () => {
  const [userStats, setUserStats] = useState({
    currentStreak: 0,
    totalPoints: 0,
    level: 1,
    studyMinutes: 0,
    badges: []
  });

  const [dailyGoal, setDailyGoal] = useState(30);
  const [todayStudied, setTodayStudied] = useState(0);

  useEffect(() => {
    // Load real data from localStorage
    const studySessions = JSON.parse(localStorage.getItem('studySessions') || '[]');
    const totalMinutes = studySessions.reduce((acc, session) => acc + (session.duration || 0), 0);
    const points = Math.floor(totalMinutes / 10); // 1 point per 10 minutes
    const level = Math.floor(points / 100) + 1; // Level up every 100 points
    
    setUserStats({
      currentStreak: calculateStreak(studySessions),
      totalPoints: points,
      level: level,
      studyMinutes: totalMinutes,
      badges: calculateBadges(studySessions, totalMinutes)
    });

    // Today's study time
    const today = new Date().toDateString();
    const todaySessions = studySessions.filter(session => 
      new Date(session.date).toDateString() === today
    );
    const todayTotal = todaySessions.reduce((acc, session) => acc + (session.duration || 0), 0);
    setTodayStudied(todayTotal);
  }, []);

  const calculateStreak = (sessions) => {
    if (sessions.length === 0) return 0;
    
    const dates = [...new Set(sessions.map(s => new Date(s.date).toDateString()))];
    dates.sort((a, b) => new Date(b) - new Date(a));
    
    let streak = 0;
    const today = new Date().toDateString();
    
    for (let i = 0; i < dates.length; i++) {
      const expectedDate = new Date();
      expectedDate.setDate(expectedDate.getDate() - i);
      
      if (dates[i] === expectedDate.toDateString()) {
        streak++;
      } else {
        break;
      }
    }
    
    return streak;
  };

  const calculateBadges = (sessions, totalMinutes) => {
    const badges = [];
    if (sessions.length >= 1) badges.push('first-session');
    if (sessions.length >= 5) badges.push('dedicated');
    if (totalMinutes >= 60) badges.push('hour-master');
    if (totalMinutes >= 300) badges.push('time-champion');
    return badges;
  };

  const badgeInfo = {
    'first-session': { name: 'First Session', description: 'Completed your first study session' },
    'dedicated': { name: 'Dedicated Learner', description: 'Completed 5 study sessions' },
    'hour-master': { name: 'Hour Master', description: 'Studied for 1 hour total' },
    'time-champion': { name: 'Time Champion', description: 'Studied for 5 hours total' }
  };

  const levelProgress = ((userStats.totalPoints % 500) / 500) * 100;
  const nextLevelPoints = 500 - (userStats.totalPoints % 500);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden py-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Study Progress
          </h1>
          <p className="text-white/80 text-lg">
            Track your study habits and earn achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Current Streak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-center"
          >
            <FaFire className="text-5xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">{userStats.currentStreak} Days</h3>
            <p className="text-white/70">Current Streak</p>
            <div className="mt-4 text-sm text-orange-300">
              🔥 Keep it going! Study today to maintain your streak
            </div>
          </motion.div>

          {/* Level & Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <FaCrown className="text-3xl text-yellow-500" />
              <div className="text-right">
                <div className="text-2xl font-bold text-white">Level {userStats.level}</div>
                <div className="text-sm text-white/70">{userStats.totalPoints} XP</div>
              </div>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3 mb-2">
              <div 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${levelProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-white/70">{nextLevelPoints} XP to next level</p>
          </motion.div>

          {/* Daily Goal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <FaRocket className="text-3xl text-blue-500" />
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{todayStudied}/{dailyGoal}m</div>
                <div className="text-sm text-white/70">Today's Goal</div>
              </div>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3 mb-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${Math.min((todayStudied / dailyGoal) * 100, 100)}%` }}
              ></div>
            </div>
            <p className="text-sm text-white/70">
              {todayStudied >= dailyGoal ? '🎉 Goal completed!' : `${dailyGoal - todayStudied}m remaining`}
            </p>
          </motion.div>
        </div>

        {/* Badges Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FaGem className="text-purple-400" />
            Your Badges
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {Object.entries(badges).map(([key, badge]) => (
              <motion.div
                key={key}
                whileHover={{ scale: 1.05 }}
                className={`relative p-4 rounded-xl text-center transition-all ${
                  badge.earned 
                    ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/50' 
                    : 'bg-white/5 border border-white/10 opacity-50'
                }`}
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <div className="text-xs text-white/80 font-medium">{badge.name}</div>
                {badge.earned && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <FaStar className="text-white text-xs" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FaTrophy className="text-yellow-500" />
            Achievements
          </h2>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-medium">{achievement.name}</h3>
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-500" />
                    <span className="text-white font-bold">{achievement.points} XP</span>
                  </div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      achievement.completed 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500'
                    }`}
                    style={{ width: `${Math.min((achievement.progress / achievement.target) * 100, 100)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-white/70">
                  <span>{achievement.progress}/{achievement.target}</span>
                  {achievement.completed && <span className="text-green-400">✅ Completed!</span>}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudyRewards;