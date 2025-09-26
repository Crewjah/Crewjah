import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SimpleProgress = () => {
  const [studySessions, setStudySessions] = useState([]);
  const [currentSession, setCurrentSession] = useState(null);
  const [sessionTimer, setSessionTimer] = useState(0);

  // Load sessions from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('studySessions');
    if (saved) {
      setStudySessions(JSON.parse(saved));
    }
  }, []);

  // Save sessions to localStorage
  useEffect(() => {
    localStorage.setItem('studySessions', JSON.stringify(studySessions));
  }, [studySessions]);

  // Timer effect
  useEffect(() => {
    let interval;
    if (currentSession) {
      interval = setInterval(() => {
        setSessionTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [currentSession]);

  const startSession = (subject) => {
    const session = {
      id: Date.now(),
      subject,
      startTime: new Date(),
      duration: 0
    };
    setCurrentSession(session);
    setSessionTimer(0);
  };

  const endSession = () => {
    if (currentSession) {
      const endedSession = {
        ...currentSession,
        endTime: new Date(),
        duration: sessionTimer
      };
      setStudySessions(prev => [endedSession, ...prev]);
      setCurrentSession(null);
      setSessionTimer(0);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getTotalStudyTime = () => {
    return studySessions.reduce((total, session) => total + session.duration, 0);
  };

  const getSessionsToday = () => {
    const today = new Date().toDateString();
    return studySessions.filter(session => 
      new Date(session.startTime).toDateString() === today
    ).length;
  };

  const subjects = [
    'Mathematics', 'Science', 'History', 'English', 
    'Programming', 'Languages', 'Other'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Study Progress</h1>
          <p className="text-gray-600">Track your study sessions and progress</p>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {formatTime(getTotalStudyTime())}
            </div>
            <div className="text-gray-600">Total Study Time</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <div className="text-3xl font-bold text-green-600 mb-2">
              {getSessionsToday()}
            </div>
            <div className="text-gray-600">Sessions Today</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {studySessions.length}
            </div>
            <div className="text-gray-600">Total Sessions</div>
          </motion.div>
        </div>

        {/* Current Session */}
        {currentSession ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
          >
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Current Session: {currentSession.subject}
              </h2>
              <div className="text-4xl font-mono text-blue-600 mb-4">
                {formatTime(sessionTimer)}
              </div>
              <button
                onClick={endSession}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                End Session
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Start a New Study Session
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {subjects.map(subject => (
                <button
                  key={subject}
                  onClick={() => startSession(subject)}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  {subject}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Recent Sessions */}
        {studySessions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Sessions</h2>
            <div className="space-y-3">
              {studySessions.slice(0, 10).map(session => (
                <div key={session.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">{session.subject}</div>
                    <div className="text-sm text-gray-600">
                      {new Date(session.startTime).toLocaleString()}
                    </div>
                  </div>
                  <div className="text-blue-600 font-mono">
                    {formatTime(session.duration)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SimpleProgress;