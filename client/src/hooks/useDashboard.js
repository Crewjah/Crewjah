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

  useEffect(() => {
    const userStats = JSON.parse(localStorage.getItem('userStats') || '{}');
    setStats({
      questionsAnswered: userStats.questionsAnswered || 0,
      studyStreak: userStats.studyStreak || 0,
      completedQuizzes: userStats.completedQuizzes || 0,
      studyTime: userStats.studyTime || 0
    });
  }, []);

  const updateStats = (newStats) => {
    setStats(prevStats => {
      const updatedStats = { ...prevStats, ...newStats };
      localStorage.setItem('userStats', JSON.stringify(updatedStats));
      return updatedStats;
    });
  };

  return {
    stats,
    updateStats
  };
};