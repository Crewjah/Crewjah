import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [user, setUser] = useState({ name: '', email: '', avatar: '👨‍🎓' });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    
    if (!currentUser) {
      setIsAuthenticated(false);
      navigate('/signin');
      return;
    }

    setUser({
      name: currentUser.name || 'User',
      email: currentUser.email || '',
      avatar: '👨‍🎓'
    });
    setIsAuthenticated(true);
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem('currentUser');
    setIsAuthenticated(false);
    navigate('/signin');
  };

  return {
    user,
    isAuthenticated,
    logout
  };
};

export const useUserStats = () => {
  const [stats, setStats] = useState({
    questionsAnswered: 0,
    studyStreak: 0,
    completedQuizzes: 0,
    studyTime: 0
  });

  const [sessionStartTime, setSessionStartTime] = useState(null);

  useEffect(() => {
    // Load existing stats
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const userStats = JSON.parse(localStorage.getItem(`userStats_${currentUser.id}`) || '{}');
    
    setStats({
      questionsAnswered: userStats.questionsAnswered || 0,
      studyStreak: calculateStudyStreak(userStats.lastActiveDate),
      completedQuizzes: userStats.completedQuizzes || 0,
      studyTime: userStats.studyTime || 0
    });

    // Start session timer
    setSessionStartTime(Date.now());

    // Update last active date for streak tracking
    updateLastActiveDate();
  }, []);

  const calculateStudyStreak = (lastActiveDate) => {
    if (!lastActiveDate) return 0;
    
    const today = new Date().toDateString();
    const lastActive = new Date(lastActiveDate).toDateString();
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString();
    
    if (lastActive === today) {
      // Active today, return stored streak
      const userStats = JSON.parse(localStorage.getItem(`userStats_${JSON.parse(localStorage.getItem('currentUser') || '{}').id}`) || '{}');
      return userStats.studyStreak || 1;
    } else if (lastActive === yesterday) {
      // Was active yesterday, continue streak
      const userStats = JSON.parse(localStorage.getItem(`userStats_${JSON.parse(localStorage.getItem('currentUser') || '{}').id}`) || '{}');
      return (userStats.studyStreak || 0) + 1;
    } else {
      // Streak broken, start fresh
      return 1;
    }
  };

  const updateLastActiveDate = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (!currentUser.id) return;

    const today = new Date().toISOString();
    const userStats = JSON.parse(localStorage.getItem(`userStats_${currentUser.id}`) || '{}');
    
    // Only update if it's a new day
    const lastActiveDate = userStats.lastActiveDate;
    const isNewDay = !lastActiveDate || new Date(lastActiveDate).toDateString() !== new Date().toDateString();
    
    if (isNewDay) {
      const newStreak = calculateStudyStreak(lastActiveDate);
      updateStats({ 
        studyStreak: newStreak,
        lastActiveDate: today 
      });
    }
  };

  const updateStats = (newStats) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (!currentUser.id) return;

    setStats(prevStats => {
      const updatedStats = { ...prevStats, ...newStats };
      localStorage.setItem(`userStats_${currentUser.id}`, JSON.stringify(updatedStats));
      return updatedStats;
    });
  };

  // Auto-increment study time based on session activity
  useEffect(() => {
    const timer = setInterval(() => {
      if (sessionStartTime && document.visibilityState === 'visible') {
        const sessionTime = Math.floor((Date.now() - sessionStartTime) / (1000 * 60)); // minutes
        if (sessionTime > 0) {
          updateStats({ studyTime: stats.studyTime + Math.floor(sessionTime / 60 * 10) / 10 }); // Convert to hours with 1 decimal
          setSessionStartTime(Date.now()); // Reset timer
        }
      }
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [sessionStartTime, stats.studyTime]);

  // Auto-tracking functions for specific activities
  const trackQuestionAnswered = () => {
    updateStats({ questionsAnswered: stats.questionsAnswered + 1 });
  };

  const trackQuizCompleted = () => {
    updateStats({ completedQuizzes: stats.completedQuizzes + 1 });
  };

  const trackStudySession = (minutes) => {
    const hours = Math.floor(minutes / 60 * 10) / 10; // Convert to hours with 1 decimal
    updateStats({ studyTime: stats.studyTime + hours });
  };

  return {
    stats,
    updateStats,
    trackQuestionAnswered,
    trackQuizCompleted,
    trackStudySession
  };
};