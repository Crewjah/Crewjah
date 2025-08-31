import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="crewjah-landing-bg">
    {/* Navbar */}
    <nav className="crewjah-navbar">
      <div className="crewjah-navbar-left">
  <img src="/Crewjah-logo.png" alt="Crewjah Logo" className="crewjah-navbar-logo" />
        <span className="crewjah-navbar-brand">Crewjah</span>
      </div>
      <div className="crewjah-navbar-links">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signin" className="crewjah-navbar-signin">Sign In</Link>
      </div>
    </nav>

    {/* Main Hero Section */}
    <main className="crewjah-hero-main">
      <section className="crewjah-hero-content">
        <h1 className="crewjah-hero-title">Study smarter, not harder with <span className="crewjah-ai">Crewjah AI</span></h1>
        <p className="crewjah-hero-tagline">Your AI-powered study assistant. Ask anything, summarize notes & code, plan your learning, and track your progress—all in one place.</p>
        <div className="crewjah-hero-btns">
          <Link to="/signup" className="crewjah-btn crewjah-btn-main">Get Started Free</Link>
          <Link to="/signin" className="crewjah-btn crewjah-btn-outline">Sign In</Link>
        </div>
      </section>
      <section className="crewjah-hero-visual">
        {/* Placeholder for hero illustration - replace with your own SVG/PNG if desired */}
  <img src="/Crewjah-logo.png" alt="AI Study Assistant" className="crewjah-hero-img" />
      </section>
    </main>

    {/* Footer */}
    <footer className="crewjah-footer">
      <div className="crewjah-footer-links">
        <Link to="/privacy">Privacy</Link>
        <span>|</span>
        <Link to="/terms">Terms</Link>
        <span>|</span>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="crewjah-footer-copy">© {new Date().getFullYear()} Crewjah</div>
    </footer>
  </div>
);

export default Landing;
