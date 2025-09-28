import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBook, FaCalculator, FaFlask, FaPen, FaRobot, FaLightbulb, FaGraduationCap, FaPaperPlane } from 'react-icons/fa';

const AIStudyBuddy = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    { icon: FaCalculator, text: "Help me solve this math problem", category: "Math" },
    { icon: FaBook, text: "Explain this concept in simple terms", category: "Learning" },
    { icon: FaLightbulb, text: "Give me study tips for my exam", category: "Tips" },
    { icon: FaGraduationCap, text: "Create quiz questions on this topic", category: "Practice" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage) => {
    const responses = {
      // Math help
      'math': "I'd be happy to help you with math! 🧮\n\nPlease share your specific problem, and I'll solve it step-by-step:\n\n1️⃣ I'll break down the problem\n2️⃣ Show you each step\n3️⃣ Explain the reasoning\n4️⃣ Give you similar practice problems\n\nWhat math topic are you working on?",
      
      // Study tips
      'study tips': "Here are some proven study techniques! 📚✨\n\n🎯 **Active Recall**: Test yourself instead of just re-reading\n⏰ **Pomodoro Technique**: 25min study + 5min break\n🔄 **Spaced Repetition**: Review material at increasing intervals\n📝 **Feynman Technique**: Explain concepts in simple words\n🎨 **Mind Maps**: Visual connections between ideas\n\nWhich subject are you studying? I can give more specific tips!",
      
      // Concept explanation
      'explain': "I love explaining concepts! 🎓\n\nTo give you the best explanation, please tell me:\n\n📖 What specific topic or concept?\n🎯 What's your current level (beginner/intermediate/advanced)?\n❓ What part is confusing you most?\n\nI'll break it down into simple, easy-to-understand steps with examples!",
      
      // Quiz creation
      'quiz': "Great idea! Creating quiz questions helps reinforce learning! 🧠✨\n\nI can create:\n\n❓ Multiple choice questions\n✍️ Short answer questions\n🤔 True/false questions\n💭 Essay prompts\n🔍 Fill-in-the-blank\n\nJust tell me:\n📚 What subject/topic?\n📊 How many questions?\n⚡ Difficulty level?\n\nLet's make studying fun and effective!",
      
      // Default helpful response
      'default': "I'm here to help you succeed! 🌟\n\nI can assist with:\n\n📚 **Subject Help**: Math, Science, History, English, etc.\n🧠 **Study Strategies**: Personalized tips for your learning style\n📝 **Homework Support**: Step-by-step problem solving\n⏰ **Time Management**: Creating study schedules\n🎯 **Exam Prep**: Practice questions and review techniques\n\nWhat specific challenge are you facing? The more details you give me, the better I can help you! 💪"
    };

    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('math') || lowerMessage.includes('solve') || lowerMessage.includes('problem')) {
      return responses.math;
    } else if (lowerMessage.includes('study tips') || lowerMessage.includes('how to study')) {
      return responses['study tips'];
    } else if (lowerMessage.includes('explain') || lowerMessage.includes('concept')) {
      return responses.explain;
    } else if (lowerMessage.includes('quiz') || lowerMessage.includes('question')) {
      return responses.quiz;
    } else {
      return responses.default;
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        content: generateAIResponse(inputMessage),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickPrompt = (prompt) => {
    setInputMessage(prompt);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 relative z-10 h-screen flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2 flex items-center justify-center gap-3">
            <FaRobot className="text-purple-400" />
            AI Study Buddy
          </h1>
          <p className="text-white/80">Your personal AI tutor - ask me anything about your studies!</p>
        </motion.div>

        {/* Quick Prompts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {quickPrompts.map((prompt, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleQuickPrompt(prompt.text)}
                className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg p-3 text-left hover:bg-white/20 transition-all"
              >
                <prompt.icon className="text-purple-400 mb-2" />
                <div className="text-xs text-white/80 font-medium">{prompt.category}</div>
                <div className="text-sm text-white">{prompt.text}</div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Chat Messages */}
        <div className="flex-1 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 mb-4 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-white/10 border border-white/20 text-white'
                  }`}>
                    {message.type === 'ai' && (
                      <div className="flex items-center gap-2 mb-2">
                        <FaRobot className="text-purple-400" />
                        <span className="text-sm text-purple-300 font-medium">AI Study Buddy</span>
                      </div>
                    )}
                    <div className="whitespace-pre-line">{message.content}</div>
                    <div className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="bg-white/10 border border-white/20 text-white p-4 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <FaRobot className="text-purple-400" />
                    <span className="text-sm text-purple-300 font-medium">AI Study Buddy</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce animation-delay-200"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce animation-delay-400"></div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4"
        >
          <div className="flex gap-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about your studies... (e.g., 'Help me solve this algebra problem' or 'Explain photosynthesis')"
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <FaPaperPlane />
            </motion.button>
          </div>
          <div className="mt-2 text-xs text-white/50 text-center">
            💡 Pro tip: Be specific about your questions for the best help!
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIStudyBuddy;