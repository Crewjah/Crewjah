import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaStop, FaRedo, FaClock, FaBookOpen, FaCoffee, FaChartLine } from 'react-icons/fa';

const StudyTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState('work'); // 'work', 'shortBreak', 'longBreak'
  const [sessions, setSessions] = useState(0);
  const [totalStudyTime, setTotalStudyTime] = useState(0);
  const [currentSubject, setCurrentSubject] = useState('');
  const [studyLog, setStudyLog] = useState([]);
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  const modes = {
    work: { duration: 25 * 60, label: 'Focus Time', color: 'blue', icon: FaBookOpen },
    shortBreak: { duration: 5 * 60, label: 'Short Break', color: 'green', icon: FaCoffee },
    longBreak: { duration: 15 * 60, label: 'Long Break', color: 'purple', icon: FaCoffee }
  };

  const subjects = [
    'Mathematics', 'Science', 'History', 'Literature', 'Languages', 
    'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Art'
  ];

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            handleTimerComplete();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, timeLeft]);

  const handleTimerComplete = () => {
    setIsRunning(false);
    
    // Play notification sound (optional)
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio play failed:', e));
    }

    if (mode === 'work') {
      setSessions(prev => prev + 1);
      setTotalStudyTime(prev => prev + 25);
      
      // Log the study session
      if (currentSubject) {
        const newLog = {
          subject: currentSubject,
          duration: 25,
          timestamp: new Date().toLocaleString(),
          type: 'Focus Session'
        };
        setStudyLog(prev => [newLog, ...prev.slice(0, 9)]); // Keep last 10 sessions
      }

      // Auto-switch to break
      if ((sessions + 1) % 4 === 0) {
        setMode('longBreak');
        setTimeLeft(modes.longBreak.duration);
      } else {
        setMode('shortBreak');
        setTimeLeft(modes.shortBreak.duration);
      }
    } else {
      // Break completed, switch to work
      setMode('work');
      setTimeLeft(modes.work.duration);
    }
  };

  const startTimer = () => {
    if (!currentSubject && mode === 'work') {
      alert('Please select a subject before starting your focus session!');
      return;
    }
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(modes[mode].duration);
  };

  const switchMode = (newMode) => {
    setIsRunning(false);
    setMode(newMode);
    setTimeLeft(modes[newMode].duration);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getProgressPercent = () => {
    const totalDuration = modes[mode].duration;
    return ((totalDuration - timeLeft) / totalDuration) * 100;
  };

  const currentModeConfig = modes[mode];
  const ModeIcon = currentModeConfig.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Study Timer & Pomodoro
          </h1>
          <p className="text-gray-600 text-lg">
            Boost your productivity with the Pomodoro Technique - 25 minutes of focused study, then a 5-minute break
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Timer Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            {/* Mode Selector */}
            <div className="flex justify-center mb-6">
              {Object.entries(modes).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => switchMode(key)}
                  className={`px-4 py-2 rounded-lg font-medium mx-1 transition-all ${
                    mode === key
                      ? `bg-${config.color}-500 text-white shadow-lg`
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {config.label}
                </button>
              ))}
            </div>

            {/* Subject Selector (only for work mode) */}
            {mode === 'work' && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What are you studying?
                </label>
                <select
                  value={currentSubject}
                  onChange={(e) => setCurrentSubject(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject...</option>
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Timer Display */}
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full bg-${currentModeConfig.color}-100 mb-4 relative overflow-hidden`}>
                {/* Progress Circle */}
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className={`text-${currentModeConfig.color}-200`}
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className={`text-${currentModeConfig.color}-500`}
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - getProgressPercent() / 100)}`}
                    style={{ transition: 'stroke-dashoffset 1s ease' }}
                  />
                </svg>
                <ModeIcon className={`text-2xl text-${currentModeConfig.color}-600 z-10`} />
              </div>
              
              <div className="text-6xl font-mono font-bold text-gray-800 mb-2">
                {formatTime(timeLeft)}
              </div>
              <div className={`text-lg font-medium text-${currentModeConfig.color}-600`}>
                {currentModeConfig.label}
              </div>
              {currentSubject && mode === 'work' && (
                <div className="text-sm text-gray-500 mt-1">
                  Studying: {currentSubject}
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4">
              <button
                onClick={isRunning ? pauseTimer : startTimer}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-all hover:scale-105 ${
                  isRunning 
                    ? 'bg-yellow-500 hover:bg-yellow-600' 
                    : `bg-${currentModeConfig.color}-500 hover:bg-${currentModeConfig.color}-600`
                }`}
              >
                {isRunning ? <FaPause /> : <FaPlay />}
                {isRunning ? 'Pause' : 'Start'}
              </button>
              
              <button
                onClick={resetTimer}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all hover:scale-105"
              >
                <FaRedo />
                Reset
              </button>
            </div>
          </motion.div>

          {/* Stats & Log Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaChartLine className="text-blue-500" />
                Today's Progress
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{sessions}</div>
                  <div className="text-sm text-blue-600">Focus Sessions</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{totalStudyTime}</div>
                  <div className="text-sm text-green-600">Minutes Studied</div>
                </div>
              </div>
            </div>

            {/* Study Log */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaClock className="text-purple-500" />
                Recent Sessions
              </h3>
              
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {studyLog.length > 0 ? (
                  studyLog.map((session, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-800">{session.subject}</div>
                        <div className="text-sm text-gray-500">{session.timestamp}</div>
                      </div>
                      <div className="text-sm font-medium text-blue-600">
                        {session.duration} min
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    <FaBookOpen className="text-4xl mx-auto mb-2 opacity-50" />
                    <p>No study sessions yet.</p>
                    <p className="text-sm">Complete a focus session to see your progress!</p>
                  </div>
                )}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-3">💡 Study Tips</h3>
              <ul className="text-sm space-y-2 opacity-90">
                <li>• Focus completely during work sessions - no distractions!</li>
                <li>• Take breaks seriously - they help your brain consolidate information</li>
                <li>• After 4 focus sessions, take a longer 15-minute break</li>
                <li>• Keep your study area organized and comfortable</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Hidden audio element for notifications */}
        <audio ref={audioRef} preload="auto">
          <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DwvmwhBjV9xfDglyEIGVqy4qaiTQ0OUr3pvW0mCCBrt+X9pVAJCJfF8+GFLgcX" type="audio/wav" />
        </audio>
      </div>
    </div>
  );
};

export default StudyTimer;