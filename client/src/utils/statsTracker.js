// Activity tracking service for automatic stats updates
class StatsTracker {
  static instance = null;
  
  constructor() {
    if (StatsTracker.instance) {
      return StatsTracker.instance;
    }
    StatsTracker.instance = this;
    this.listeners = [];
  }

  static getInstance() {
    if (!StatsTracker.instance) {
      StatsTracker.instance = new StatsTracker();
    }
    return StatsTracker.instance;
  }

  addListener(callback) {
    this.listeners.push(callback);
  }

  removeListener(callback) {
    this.listeners = this.listeners.filter(listener => listener !== callback);
  }

  notify(statType, value = 1) {
    this.listeners.forEach(callback => callback(statType, value));
  }

  // Tracking methods for different activities
  trackQuestionAnswered() {
    this.notify('questionsAnswered', 1);
    this.updateUserStats('questionsAnswered', 1);
  }

  trackQuizCompleted() {
    this.notify('completedQuizzes', 1);
    this.updateUserStats('completedQuizzes', 1);
  }

  trackStudyTime(minutes) {
    const hours = Math.floor(minutes / 60 * 10) / 10;
    this.notify('studyTime', hours);
    this.updateUserStats('studyTime', hours);
  }

  trackDailyActivity() {
    this.updateStudyStreak();
  }

  updateUserStats(statType, increment) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (!currentUser.id) return;

    const userStats = JSON.parse(localStorage.getItem(`userStats_${currentUser.id}`) || '{}');
    
    if (statType === 'studyTime') {
      userStats[statType] = (userStats[statType] || 0) + increment;
    } else {
      userStats[statType] = (userStats[statType] || 0) + increment;
    }

    localStorage.setItem(`userStats_${currentUser.id}`, JSON.stringify(userStats));
  }

  updateStudyStreak() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (!currentUser.id) return;

    const today = new Date().toDateString();
    const userStats = JSON.parse(localStorage.getItem(`userStats_${currentUser.id}`) || '{}');
    const lastActiveDate = userStats.lastActiveDate;

    // Only update streak once per day
    if (!lastActiveDate || new Date(lastActiveDate).toDateString() !== today) {
      const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString();
      let newStreak = 1;

      if (lastActiveDate && new Date(lastActiveDate).toDateString() === yesterday) {
        // Continue streak from yesterday
        newStreak = (userStats.studyStreak || 0) + 1;
      }

      userStats.studyStreak = newStreak;
      userStats.lastActiveDate = new Date().toISOString();
      localStorage.setItem(`userStats_${currentUser.id}`, JSON.stringify(userStats));
      
      this.notify('studyStreak', newStreak);
    }
  }

  // Auto-track page visits for study time
  startPageTracking() {
    this.pageStartTime = Date.now();
    this.trackDailyActivity(); // Update streak when starting any activity
  }

  endPageTracking() {
    if (this.pageStartTime) {
      const timeSpent = Math.floor((Date.now() - this.pageStartTime) / (1000 * 60)); // minutes
      if (timeSpent >= 1) { // Only count if at least 1 minute
        this.trackStudyTime(timeSpent);
      }
      this.pageStartTime = null;
    }
  }
}

// Export singleton instance
export const statsTracker = StatsTracker.getInstance();

// Hook for components to use stats tracking
export const useStatsTracking = () => {
  return {
    trackQuestionAnswered: () => statsTracker.trackQuestionAnswered(),
    trackQuizCompleted: () => statsTracker.trackQuizCompleted(),
    trackStudyTime: (minutes) => statsTracker.trackStudyTime(minutes),
    startPageTracking: () => statsTracker.startPageTracking(),
    endPageTracking: () => statsTracker.endPageTracking()
  };
};