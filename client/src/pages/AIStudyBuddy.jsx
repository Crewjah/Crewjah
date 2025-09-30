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
    const lowerMessage = userMessage.toLowerCase();
    
    // AI/Technology questions
    if (lowerMessage.includes('what is ai') || lowerMessage.includes('artificial intelligence')) {
      return "Artificial Intelligence (AI) refers to computer systems that can perform tasks typically requiring human intelligence.\n\nKey concepts:\n• Machine Learning: Systems that improve through experience\n• Natural Language Processing: Understanding human language\n• Pattern Recognition: Identifying trends in data\n• Problem Solving: Finding solutions to complex challenges\n\nIn education, AI helps personalize learning, provide instant feedback, and adapt to individual student needs.";
    }
    
    // Personal questions
    if (lowerMessage.includes('what is me') || lowerMessage.includes('who am i')) {
      return "I can see you're asking philosophical questions! As your study buddy, I'm here to help you learn and grow academically.\n\nFor self-reflection in your studies, consider:\n• What subjects interest you most?\n• What are your learning goals?\n• What study methods work best for you?\n• What challenges do you want to overcome?\n\nTell me about a specific subject you're working on, and I'll provide targeted help!";
    }
    
    // General "what is this" questions
    if (lowerMessage.includes('what is this') || lowerMessage.includes('what is that')) {
      return "I'm your AI Study Buddy - a learning assistant designed to help you with your studies.\n\nI can help you with:\n• Subject-specific questions and explanations\n• Study strategies and techniques\n• Homework problems and solutions\n• Exam preparation and review\n• Creating study materials\n\nTo get the most helpful response, try asking specific questions like:\n'Explain photosynthesis' or 'Help me solve this algebra problem: 2x + 5 = 15'";
    }
    
    // Math help
    if (lowerMessage.includes('math') || lowerMessage.includes('solve') || lowerMessage.includes('algebra') || lowerMessage.includes('calculus') || lowerMessage.includes('geometry')) {
      return "I'd be happy to help you with mathematics!\n\nPlease share your specific problem, and I'll provide:\n1. Step-by-step solution\n2. Clear explanations for each step\n3. Key concepts involved\n4. Similar practice problems\n\nFor example, if you have '2x + 5 = 15', I'll show you how to isolate x and explain the reasoning behind each step.";
    }
    
    // Science questions
    if (lowerMessage.includes('science') || lowerMessage.includes('physics') || lowerMessage.includes('chemistry') || lowerMessage.includes('biology')) {
      return "Science questions are great for understanding our world!\n\nI can help explain:\n• Scientific concepts and principles\n• Laboratory procedures and safety\n• Problem-solving in physics and chemistry\n• Biological processes and systems\n\nWhat specific science topic would you like to explore? The more details you provide, the better I can tailor my explanation to your level.";
    }
    
    // Study tips
    if (lowerMessage.includes('study tips') || lowerMessage.includes('how to study') || lowerMessage.includes('learning')) {
      return "Here are evidence-based study techniques:\n\n**Active Learning Methods:**\n• Active Recall: Test yourself instead of re-reading\n• Spaced Repetition: Review material at increasing intervals\n• Feynman Technique: Explain concepts in simple terms\n\n**Time Management:**\n• Pomodoro Technique: 25-minute focused sessions\n• Time blocking: Dedicated study periods\n• Regular breaks to maintain concentration\n\n**Memory Techniques:**\n• Create visual associations\n• Use mnemonics for lists\n• Connect new information to existing knowledge\n\nWhat subject are you studying? I can provide more specific strategies.";
    }
    
    // Concept explanation requests
    if (lowerMessage.includes('explain') || lowerMessage.includes('concept') || lowerMessage.includes('understand')) {
      return "I'd be happy to explain any concept!\n\nTo provide the best explanation, please tell me:\n• What specific topic or concept?\n• Your current level (beginner, intermediate, advanced)\n• What aspect is most confusing?\n\nI'll break it down into clear, manageable steps with relevant examples and real-world applications.";
    }
    
    // Quiz and practice
    if (lowerMessage.includes('quiz') || lowerMessage.includes('practice') || lowerMessage.includes('test') || lowerMessage.includes('exam')) {
      return "Practice is essential for mastering any subject!\n\nI can help create:\n• Multiple choice questions\n• Short answer prompts\n• Problem-solving exercises\n• Key concept reviews\n• Study guides\n\nJust specify:\n• Subject and topic\n• Number of questions\n• Difficulty level\n• Question format preference\n\nThis will help reinforce your learning and identify areas that need more attention.";
    }
    
    // Default helpful response
    return "I'm here to support your learning journey!\n\nI can assist with:\n• **Subject Help**: Math, Science, History, English, and more\n• **Study Strategies**: Personalized techniques for effective learning\n• **Problem Solving**: Step-by-step guidance\n• **Exam Preparation**: Practice questions and review methods\n• **Concept Explanation**: Breaking down complex topics\n\nTo get started, try asking something specific like:\n'Explain the water cycle' or 'Help me solve 3x - 7 = 14'\n\nWhat would you like to learn about today?";
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
            Pro tip: Be specific about your questions for the best help!
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIStudyBuddy;