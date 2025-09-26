import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  const features = [
    {
      title: "Study Assistant",
      description: "Get subject-specific help with Mathematics, Science, History, and more",
      link: "/study-assistant"
    },
    {
      title: "Smart Notes",
      description: "Upload and analyze study materials to create organized, structured notes",
      link: "/smart-notes"
    },
    {
      title: "Flashcards",
      description: "Interactive flashcards for effective learning and memory retention",
      link: "/flashcards"
    },
    {
      title: "Progress Tracking",
      description: "Track your study sessions and monitor your learning progress over time",
      link: "/progress"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">Crewjah</span>
              <span className="text-sm text-purple-700 font-medium">Learning</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link 
                to="/study-assistant" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Learning Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Enhance your learning with AI-powered study assistance, smart note-taking, 
              and progress tracking. Built for students who want to learn effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/study-assistant" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Learning
              </Link>
              <Link 
                to="/help" 
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Learning Tools That Work
            </h2>
            <p className="text-lg text-gray-600">
              Professional educational features designed to enhance your study experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <Link 
                  to={feature.link}
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  Try it now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Improve Your Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start using our professional learning tools today
          </p>
          <Link 
            to="/study-assistant" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-xl font-bold text-gray-900">Crewjah</span>
              <span className="text-sm text-purple-700 font-medium">Learning Platform</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-600">
              <Link to="/help" className="hover:text-gray-900 transition-colors">Help</Link>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              © 2025 Crewjah. Professional learning platform for students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}