# PowerShell Setup Script for Crewjah
Write-Host "🚀 Starting Crewjah Development Environment" -ForegroundColor Green
Write-Host "📋 Installing dependencies..." -ForegroundColor Yellow

# Install root dependencies
Write-Host "Installing root packages..." -ForegroundColor Cyan
npm install

# Install client dependencies  
Write-Host "📱 Setting up frontend..." -ForegroundColor Cyan
Set-Location client
npm install
Set-Location ..

# Install server dependencies
Write-Host "🔧 Setting up Node.js backend..." -ForegroundColor Cyan
Set-Location server
npm install
Set-Location ..

Write-Host "✅ All dependencies installed!" -ForegroundColor Green
Write-Host ""
Write-Host "🌟 Choose your backend:" -ForegroundColor Magenta
Write-Host "1. FastAPI (Recommended)" -ForegroundColor White
Write-Host "2. Node.js/Express" -ForegroundColor White
Write-Host "3. Flask" -ForegroundColor White
Write-Host ""
Write-Host "To start development:" -ForegroundColor Yellow
Write-Host "npm run dev        # FastAPI + React" -ForegroundColor White
Write-Host "npm run dev-node   # Node.js + React" -ForegroundColor White
Write-Host "npm run dev-flask  # Flask + React" -ForegroundColor White
Write-Host ""
Write-Host "🎓 Happy learning with Crewjah!" -ForegroundColor Green