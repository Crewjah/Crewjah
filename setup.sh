#!/bin/bash
# Start all services for Crewjah development

echo "🚀 Starting Crewjah Development Environment"
echo "📋 Installing dependencies..."

# Install root dependencies
npm install

# Install client dependencies  
echo "📱 Setting up frontend..."
cd client && npm install && cd ..

# Install server dependencies
echo "🔧 Setting up Node.js backend..."
cd server && npm install && cd ..

echo "✅ All dependencies installed!"
echo ""
echo "🌟 Choose your backend:"
echo "1. FastAPI (Recommended)"
echo "2. Node.js/Express" 
echo "3. Flask"
echo ""
echo "To start development:"
echo "npm run dev        # FastAPI + React"
echo "npm run dev-node   # Node.js + React"  
echo "npm run dev-flask  # Flask + React"
echo ""
echo "🎓 Happy learning with Crewjah!"