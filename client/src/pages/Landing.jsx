import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Simple Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-100 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-100 rounded-full opacity-30"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 bg-white/90 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">📚</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Crewjah
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/signin" className="text-slate-600 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">
                Sign In
              </Link>
              <Link to="/signup" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow duration-200">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
                <span className="inline-block hover:scale-105 transition-transform duration-300">Learn</span>
                <span className="block bg-gradient-to-r from-blue-500 via-indigo-600 to-emerald-500 bg-clip-text text-transparent hover:animate-pulse">
                  Smarter
                </span>
                <span className="block text-slate-700 hover:text-blue-600 transition-colors duration-300">Together</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your learning journey with AI-powered tools, interactive content, 
                and a community that grows with you.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center items-center mb-12">
                <Link 
                  to="/signup" 
                  className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <span>Start Learning</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3-3 3m-6-3h9" />
                  </svg>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mb-16">
                <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full border border-emerald-200 hover:bg-emerald-50 hover:scale-105 transition-all duration-200">
                  <span className="text-lg">🔒</span>
                  <span className="text-slate-700 font-medium">Privacy Protected</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full border border-blue-200 hover:bg-blue-50 hover:scale-105 transition-all duration-200">
                  <span className="text-lg">🚫</span>
                  <span className="text-slate-700 font-medium">Ad-Free Experience</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full border border-indigo-200 hover:bg-indigo-50 hover:scale-105 transition-all duration-200">
                  <span className="text-lg">🎓</span>
                  <span className="text-slate-700 font-medium">Expert Designed</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full border border-amber-200 hover:bg-amber-50 hover:scale-105 transition-all duration-200">
                  <span className="text-lg">🌟</span>
                  <span className="text-slate-700 font-medium">Always Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Features Showcase */}
      <div className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Powerful Learning Tools
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the future of education with our AI-powered platform designed to make learning engaging, efficient, and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🤖",
                title: "AI Assistant",
                description: "Get instant answers to any question with our intelligent AI tutor",
                color: "blue",
                delay: "0ms"
              },
              {
                icon: "📚",
                title: "Smart Summaries",
                description: "Transform complex texts into digestible, key insights",
                color: "emerald",
                delay: "200ms"
              },
              {
                icon: "🎯",
                title: "Interactive Quizzes",
                description: "Test your knowledge with adaptive learning assessments",
                color: "indigo",
                delay: "400ms"
              },
              {
                icon: "📊",
                title: "Progress Analytics",
                description: "Track your learning journey with detailed insights",
                color: "amber",
                delay: "600ms"
              }
            ].map((feature, index) => {
              const colors = {
                blue: { bg: 'bg-gradient-to-br from-white to-blue-50', border: 'border-blue-100 hover:border-blue-300', icon: 'bg-gradient-to-br from-blue-400 to-blue-600' },
                emerald: { bg: 'bg-gradient-to-br from-white to-emerald-50', border: 'border-emerald-100 hover:border-emerald-300', icon: 'bg-gradient-to-br from-emerald-400 to-emerald-600' },
                indigo: { bg: 'bg-gradient-to-br from-white to-indigo-50', border: 'border-indigo-100 hover:border-indigo-300', icon: 'bg-gradient-to-br from-indigo-400 to-indigo-600' },
                amber: { bg: 'bg-gradient-to-br from-white to-amber-50', border: 'border-amber-100 hover:border-amber-300', icon: 'bg-gradient-to-br from-amber-400 to-amber-600' }
              };
              const colorSet = colors[feature.color];
              
              return (
                <div 
                  key={index}
                  className={`group ${colorSet.bg} rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border ${colorSet.border}`}
                >
                  <div className={`w-16 h-16 ${colorSet.icon} rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform duration-300`}>
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-slate-600">
              Watch how our tools transform the learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { step: "01", title: "Ask Your Question", desc: "Type any topic or question you want to learn about" },
                { step: "02", title: "Get AI Insights", desc: "Receive comprehensive explanations with examples" },
                { step: "03", title: "Practice & Review", desc: "Reinforce learning with quizzes and flashcards" },
                { step: "04", title: "Track Progress", desc: "Monitor your improvement over time" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-slate-100 transition-colors duration-200">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white bg-gradient-to-br from-blue-500 to-indigo-600">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-200">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-2xl">
                    "Explain photosynthesis in simple terms"
                  </div>
                  <div className="bg-slate-100 p-4 rounded-2xl">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🤖</span>
                      </div>
                      <div>
                        <p className="text-slate-800">Photosynthesis is like a plant's kitchen! Plants use sunlight, water, and carbon dioxide to make their own food (glucose) and release oxygen as a bonus for us to breathe.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Values Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Built for Real Learning
            </h2>
            <p className="text-xl text-slate-600">
              Authentic educational tools designed by educators for students
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { feature: "Free", label: "Always Free Access", icon: "🆓" },
              { feature: "Real", label: "Authentic Content", icon: "✅" },
              { feature: "Smart", label: "AI-Powered Learning", icon: "🧠" },
              { feature: "Open", label: "Open Source", icon: "🌍" }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-2">
                  {value.feature}
                </div>
                <div className="text-slate-600 font-medium">{value.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Educational Philosophy */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Our Educational Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                principle: "Learn at your own pace with personalized AI guidance that adapts to your unique learning style and needs.",
                title: "Personalized Learning",
                category: "Individual Growth",
                icon: "🎯"
              },
              {
                principle: "Build lasting knowledge through interactive practice, immediate feedback, and progressive skill development.",
                title: "Active Learning",
                category: "Skill Building", 
                icon: "�"
              },
              {
                principle: "Access quality education anytime, anywhere with our commitment to keeping learning free and accessible for all.",
                title: "Accessible Education",
                category: "Equal Opportunity",
                icon: "🌍"
              }
            ].map((approach, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="text-slate-600 mb-4 italic">"{approach.principle}"</div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{approach.icon}</div>
                  <div>
                    <div className="font-semibold text-slate-800">{approach.title}</div>
                    <div className="text-sm text-slate-500">{approach.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-white/10 rounded-full animate-pulse animation-delay-4000"></div>
          </div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 inline-block">
              Transform
            </span>
            Your Learning?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Start your authentic learning journey with AI-powered educational tools designed for real student success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/signup" 
              className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started Now</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3-3 3m-6-3h9" />
              </svg>
            </Link>
            <div className="text-blue-100 text-sm">
              <span className="block">✓ No credit card required</span>
              <span className="block">✓ Free forever plan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
			}
