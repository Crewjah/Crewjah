import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock, FaBookOpen, FaBrain, FaChartLine, FaGraduationCap, FaStar, FaRocket } from 'react-icons/fa';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaGraduationCap className="text-2xl text-white" />
              <span className="text-xl font-bold text-white">Crewjah</span>
              <span className="text-sm text-purple-300 font-medium">Learning</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                to="/signin" 
                className="text-white/80 hover:text-white px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/10"
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Sign Up Free
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <FaStar className="text-yellow-400" />
                  <span className="text-white text-sm font-medium">Modern Learning Platform</span>
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Master Your
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Learning Journey
                </span>
              </h1>
              
              <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                Transform your study habits with modern tools, smart analytics, and proven techniques. 
                Start your learning journey with our comprehensive study platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/signup" 
                  className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-xl flex items-center space-x-2"
                >
                  <FaRocket className="group-hover:rotate-12 transition-transform" />
                  <span>Start Learning Free</span>
                </Link>
                <Link 
                  to="/signin" 
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Sign In
                </Link>
              </div>
              
              <div className="mt-12 flex justify-center space-x-8 text-white/60">
                <div className="flex items-center space-x-2">
                  <FaClock className="text-purple-400" />
                  <span className="text-sm">Smart Study Timer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaBrain className="text-pink-400" />
                  <span className="text-sm">AI-Powered Notes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaChartLine className="text-blue-400" />
                  <span className="text-sm">Progress Tracking</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Learning Tools
            </h2>
            <p className="text-xl text-white/80">
              Everything you need to study effectively and achieve your goals
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaClock,
                title: "Study Timer",
                description: "Pomodoro technique timer with progress tracking and subject organization",
                color: "purple"
              },
              {
                icon: FaBookOpen,
                title: "Smart Notes",
                description: "Upload and analyze documents to create organized, structured notes",
                color: "blue"
              },
              {
                icon: FaBrain,
                title: "Flashcards",
                description: "Interactive flashcards for effective learning and memory retention",
                color: "pink"
              },
              {
                icon: FaChartLine,
                title: "Progress Tracking",
                description: "Monitor your study sessions and track learning progress over time",
                color: "indigo"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">4+</div>
              <div className="text-white/80">Study Tools</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">Free</div>
              <div className="text-white/80">To Use</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Start your journey with our modern study tools and improve your learning habits today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/signup" 
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Get Started for Free</span>
                <FaRocket className="group-hover:rotate-12 transition-transform" />
              </Link>
              <Link 
                to="/signin" 
                className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-white/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <FaGraduationCap className="text-2xl text-white" />
              <span className="text-xl font-bold text-white">Crewjah</span>
              <span className="text-sm text-purple-300 font-medium">Learning Platform</span>
            </div>
            <div className="flex space-x-6 text-sm text-white/60">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-white transition-colors cursor-pointer">Support</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 text-center">
            <p className="text-sm text-white/60">
              © 2025 Crewjah. Empowering students worldwide to achieve academic excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}