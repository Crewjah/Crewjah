// Utility functions for formatting dashboard statistics

export const formatStatValue = (key, value) => {
  if (typeof value !== 'number') return value;
  
  switch (key) {
    case 'studyTime':
      // Format study time to avoid floating point precision issues
      if (value < 1) {
        const minutes = Math.round(value * 60);
        return minutes > 0 ? `${minutes}m` : '0m';
      }
      // Round to 1 decimal place for hours
      return Number(value.toFixed(1));
      
    case 'questionsAnswered':
    case 'completedQuizzes':
    case 'studyStreak':
      // Ensure these are always integers
      return Math.floor(value);
      
    default:
      return value;
  }
};

export const formatStatUnit = (key, value) => {
  switch (key) {
    case 'studyTime':
      if (value < 1) {
        return 'minutes';
      }
      return Number(value) === 1 ? 'hour' : 'hours';
      
    case 'studyStreak':
      return Number(value) === 1 ? 'day' : 'days';
      
    case 'questionsAnswered':
      return 'answered';
      
    case 'completedQuizzes':
      return 'completed';
      
    default:
      return '';
  }
};

export const getMotivationalMessage = (stats) => {
  const { questionsAnswered, completedQuizzes, studyStreak, studyTime } = stats;
  
  if (studyStreak >= 7) {
    return "Amazing streak! You're on fire! 🔥";
  } else if (completedQuizzes >= 5) {
    return "Quiz master in the making! 🎯";
  } else if (questionsAnswered >= 20) {
    return "Great progress! Keep it up! 📈";
  } else if (studyTime >= 2) {
    return "Excellent study session! 💪";
  } else {
    return "Ready to learn something new? 🚀";
  }
};