import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaPlus, FaSearch, FaStar, FaCrown, FaFire, FaTrophy, FaComments } from 'react-icons/fa';

const StudyGroups = () => {
  const [activeTab, setActiveTab] = useState('discover');
  const [searchTerm, setSearchTerm] = useState('');

  const myGroups = [
    {
      id: 1,
      name: "JavaScript Ninjas 🥷",
      subject: "Programming",
      members: 24,
      level: "Intermediate",
      streak: 12,
      isOwner: true,
      recentActivity: "Sarah shared new notes on React Hooks",
      nextSession: "Tomorrow 7 PM"
    },
    {
      id: 2,
      name: "Math Masters Club 📐",
      subject: "Mathematics",
      members: 18,
      level: "Advanced", 
      streak: 8,
      isOwner: false,
      recentActivity: "Alex solved 5 calculus problems",
      nextSession: "Friday 6 PM"
    }
  ];

  const discoverGroups = [
    {
      id: 3,
      name: "Physics Warriors ⚡",
      subject: "Physics",
      members: 32,
      level: "Beginner",
      description: "Learn physics concepts together with fun experiments!",
      tags: ["mechanics", "electricity", "waves"],
      rating: 4.8,
      isPublic: true
    },
    {
      id: 4,
      name: "Chemistry Lab Crew 🧪",
      subject: "Chemistry",
      members: 28,
      level: "Intermediate",
      description: "Understand chemical reactions and organic chemistry",
      tags: ["organic", "reactions", "lab"],
      rating: 4.9,
      isPublic: true
    },
    {
      id: 5,
      name: "History Detectives 🕵️",
      subject: "History",
      members: 15,
      level: "All Levels",
      description: "Explore historical events and their impact on today's world",
      tags: ["world-war", "ancient", "modern"],
      rating: 4.7,
      isPublic: true
    },
    {
      id: 6,
      name: "English Literature Circle 📚",
      subject: "English Literature",
      members: 22,
      level: "Advanced",
      description: "Analyze classic and modern literature together",
      tags: ["shakespeare", "poetry", "novels"],
      rating: 4.6,
      isPublic: true
    }
  ];

  const leaderboard = [
    { name: "Emma Wilson", subject: "Computer Science", points: 2850, streak: 23, badge: "🥇" },
    { name: "Alex Chen", subject: "Mathematics", points: 2720, streak: 19, badge: "🥈" },
    { name: "Sofia Garcia", subject: "Biology", points: 2650, streak: 17, badge: "🥉" },
    { name: "You", subject: "JavaScript", points: 2450, streak: 12, badge: "🔥" },
    { name: "Marcus Johnson", subject: "Physics", points: 2380, streak: 15, badge: "⭐" }
  ];

  const challenges = [
    {
      title: "30-Day Study Streak",
      description: "Study with your group every day for 30 days",
      reward: "500 XP + Golden Badge",
      progress: 12,
      target: 30,
      participants: 156
    },
    {
      title: "Knowledge Sharing Champion",
      description: "Help 10 group members with their questions",
      reward: "300 XP + Helper Badge", 
      progress: 7,
      target: 10,
      participants: 89
    },
    {
      title: "Group Quiz Master",
      description: "Create and share 5 quiz sets with your group",
      reward: "400 XP + Quiz Master Badge",
      progress: 3,
      target: 5,
      participants: 67
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden py-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-3">
            <FaUsers className="text-purple-400" />
            Study Groups
          </h1>
          <p className="text-white/80 text-lg">
            Join study groups, compete with friends, and learn together!
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {[
            { id: 'my-groups', label: 'My Groups', icon: FaUsers },
            { id: 'discover', label: 'Discover', icon: FaSearch },
            { id: 'challenges', label: 'Challenges', icon: FaTrophy },
            { id: 'leaderboard', label: 'Leaderboard', icon: FaCrown }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'backdrop-blur-sm bg-white/10 border border-white/20 text-white/80 hover:bg-white/20'
              }`}
            >
              <tab.icon />
              {tab.label}
            </button>
          ))}
        </div>

        {/* My Groups Tab */}
        {activeTab === 'my-groups' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">My Study Groups</h2>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all flex items-center gap-2">
                <FaPlus /> Create Group
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {myGroups.map((group) => (
                <div key={group.id} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{group.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-white/70">
                        <span>📚 {group.subject}</span>
                        <span>👥 {group.members} members</span>
                        <span>⭐ {group.level}</span>
                      </div>
                    </div>
                    {group.isOwner && <FaCrown className="text-yellow-500" />}
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FaFire className="text-orange-500" />
                      <span className="text-white font-medium">{group.streak} day streak</span>
                    </div>
                    <div className="text-sm text-white/70">
                      <strong>Recent:</strong> {group.recentActivity}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-purple-300">
                      Next session: {group.nextSession}
                    </div>
                    <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm transition-all">
                      <FaComments className="inline mr-2" />
                      Chat
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Discover Tab */}
        {activeTab === 'discover' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" />
                <input
                  type="text"
                  placeholder="Search study groups by subject, name, or topic..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {discoverGroups.map((group) => (
                <div key={group.id} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white mb-2">{group.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-white/70 mb-3">
                      <span>📚 {group.subject}</span>
                      <span>👥 {group.members}</span>
                      <span>⭐ {group.level}</span>
                    </div>
                    <p className="text-white/80 text-sm mb-3">{group.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {group.tags.map((tag) => (
                        <span key={tag} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-lg text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i < Math.floor(group.rating) ? '' : 'opacity-30'} />
                        ))}
                      </div>
                      <span className="text-white/70 text-sm">{group.rating}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
                    Join Group
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Challenges Tab */}
        {activeTab === 'challenges' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-white">Group Challenges</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white mb-2">{challenge.title}</h3>
                    <p className="text-white/80 text-sm mb-3">{challenge.description}</p>
                    
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-lg text-sm font-medium mb-3 inline-block">
                      🏆 {challenge.reward}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-white/70 mb-2">
                      <span>Progress</span>
                      <span>{challenge.progress}/{challenge.target}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/50">{challenge.participants} participating</span>
                    <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm transition-all">
                      Join Challenge
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-white">Group Leaderboard</h2>
            
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="space-y-4">
                {leaderboard.map((user, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                      user.name === 'You' 
                        ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-400/50' 
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{user.badge}</div>
                      <div>
                        <div className="font-bold text-white">{user.name}</div>
                        <div className="text-sm text-white/70">{user.subject}</div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-bold text-white">{user.points} XP</div>
                      <div className="text-sm text-white/70 flex items-center gap-1">
                        <FaFire className="text-orange-500" />
                        {user.streak} streak
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default StudyGroups;