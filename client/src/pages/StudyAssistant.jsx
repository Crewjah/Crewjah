import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaBook, FaCalculator, FaFlask, FaGlobeAmericas, FaHistory, FaLanguage, FaAtom } from 'react-icons/fa';

const StudyAssistant = () => {
  const [messages, setMessages] = useState([
    {
      type: 'assistant',
      content: 'Hi! I\'m your Study Assistant. I can help you with homework, explain concepts, solve problems, and prepare for exams. What subject would you like help with today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');
  const messagesEndRef = useRef(null);

  const subjects = [
    { name: 'Mathematics', icon: FaCalculator, color: 'text-blue-500' },
    { name: 'Science', icon: FaFlask, color: 'text-green-500' },
    { name: 'History', icon: FaHistory, color: 'text-yellow-500' },
    { name: 'Literature', icon: FaBook, color: 'text-purple-500' },
    { name: 'Geography', icon: FaGlobeAmericas, color: 'text-teal-500' },
    { name: 'Languages', icon: FaLanguage, color: 'text-pink-500' },
    { name: 'Physics', icon: FaAtom, color: 'text-red-500' },
  ];

  const quickPrompts = [
    "Explain this concept in simple terms",
    "Help me solve this step by step",
    "Create practice questions for me",
    "Summarize this topic for exam prep",
    "Give me real-world examples",
    "Check my homework answer"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      type: 'user',
      content: input,
      subject: selectedSubject,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Simulate AI response with more realistic and helpful content
      setTimeout(() => {
        let responseContent = '';
        
        if (selectedSubject === 'Mathematics') {
          responseContent = `📊 **Mathematics Help**\n\nFor "${input}", here's how I can help:\n\n• **Step-by-step solution**: I'll break down complex problems into manageable steps\n• **Practice problems**: Get similar questions to reinforce learning\n• **Concept explanation**: Understand the underlying mathematical principles\n• **Real-world applications**: See how this applies in everyday situations\n\nWhat specific area would you like me to focus on?`;
        } else if (selectedSubject === 'Science') {
          responseContent = `🔬 **Science Support**\n\nRegarding "${input}":\n\n• **Concept breakdown**: I'll explain scientific principles clearly\n• **Visual aids**: Describe diagrams and processes step by step\n• **Lab help**: Guidance on experiments and observations\n• **Exam prep**: Key points and practice questions\n\nWould you like me to explain the concept, provide examples, or help with practice questions?`;
        } else if (selectedSubject === 'History') {
          responseContent = `📚 **History Assistance**\n\nFor your question about "${input}":\n\n• **Timeline context**: Understanding when and why events occurred\n• **Key figures**: Important people and their roles\n• **Cause and effect**: How events influenced each other\n• **Essay writing**: Structure and argument development\n\nWhat aspect interests you most - the chronology, key players, or broader implications?`;
        } else {
          // General response
          responseContent = `🎓 **Study Help**\n\nI'm here to help with "${input}"!\n\n• **Concept explanation**: Break down complex topics into simple terms\n• **Study strategies**: Effective methods for learning and retention\n• **Practice questions**: Test your understanding\n• **Exam preparation**: Focus on key areas and review techniques\n\nHow would you like me to approach this topic? Would you prefer:\n1. A detailed explanation\n2. Step-by-step guidance\n3. Practice questions\n4. Study tips`;
        }
        
        const assistantMessage = {
          type: 'assistant',
          content: responseContent,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        type: 'assistant',
        content: 'I apologize, but I encountered an issue. Please try asking your question again, and I\'ll do my best to help you!',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  const handleQuickPrompt = (prompt) => {
    setInput(prompt);
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setInput(`I need help with ${subject}: `);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Study Assistant
          </h1>
          <p className="text-gray-600 text-lg">
            Your personal AI tutor for homework help, concept explanations, and exam preparation
          </p>
        </motion.div>

        {/* Subject Quick Select */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h3 className="text-lg font-semibold mb-3 text-gray-700">Quick Subject Selection:</h3>
          <div className="flex flex-wrap gap-3">
            {subjects.map((subject) => (
              <button
                key={subject.name}
                onClick={() => handleSubjectSelect(subject.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-200 hover:scale-105 ${
                  selectedSubject === subject.name
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
              >
                <subject.icon className={subject.color} />
                <span className="text-sm font-medium">{subject.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-3xl px-4 py-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    {message.subject && (
                      <span className="text-xs opacity-75 mt-2 block">Subject: {message.subject}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-gray-100 px-4 py-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-6 py-3 bg-gray-50 border-t">
            <p className="text-sm text-gray-600 mb-2">Quick prompts:</p>
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickPrompt(prompt)}
                  className="px-3 py-1 text-xs bg-white border border-gray-200 rounded-full hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-6 border-t bg-white">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about your studies..."
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2"
              >
                <FaPaperPlane className="text-sm" />
                Send
              </button>
            </div>
          </form>
        </motion.div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3">💡 Study Tips</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <strong>• Be specific:</strong> Instead of "help with math", try "explain quadratic equations step by step"
            </div>
            <div>
              <strong>• Show your work:</strong> Share what you've tried so I can guide you better
            </div>
            <div>
              <strong>• Ask for examples:</strong> Request real-world applications to understand better
            </div>
            <div>
              <strong>• Practice mode:</strong> Ask me to create practice problems for any topic
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudyAssistant;