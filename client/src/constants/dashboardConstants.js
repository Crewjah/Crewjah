// Dashboard statistics configuration
export const STATS_CONFIG = [
  {
    key: 'studyStreak',
    title: 'Study Streak',
    unit: 'days',
    icon: '🔥',
    color: 'blue',
    delay: 0.1
  },
  {
    key: 'questionsAnswered',
    title: 'Questions',
    unit: 'answered',
    icon: '✅',
    color: 'emerald',
    delay: 0.2
  },
  {
    key: 'completedQuizzes',
    title: 'Quizzes',
    unit: 'completed',
    icon: '📝',
    color: 'indigo',
    delay: 0.3
  },
  {
    key: 'studyTime',
    title: 'Study Time',
    unit: 'hours',
    icon: '📚',
    color: 'amber',
    delay: 0.4
  }
];

// Motivational quotes pool
export const MOTIVATIONAL_QUOTES = [
  {
    quote: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King",
    icon: "🎓"
  },
  {
    quote: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
    icon: "🌍"
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
    icon: "📚"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    icon: "💡"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    icon: "🚀"
  }
];

// Get a random quote from the pool
export const getRandomQuote = () => {
  return MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
};