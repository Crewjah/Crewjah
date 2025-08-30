
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing-fadein">
    <header className="landing-header">
      <img src="/vite.svg" alt="Crewjah Logo" className="landing-logo spin" />
      <h1 className="landing-title">Learn smarter with <span className="ai-gradient">AI</span></h1>
      <p className="landing-desc">Your all-in-one study assistant — ask anything, summarize notes & code, and track progress.</p>
      <div className="landing-btns">
        <Link to="/signup" className="cta landing-btn">Get Started — Free</Link>
        <Link to="/signin" className="cta landing-btn secondary">Sign In</Link>
      </div>
    </header>
    <footer className="landing-footer">
      <Link to="/privacy">Privacy</Link> • <Link to="/terms">Terms</Link> • <Link to="/contact">Contact</Link>
      <div>© {new Date().getFullYear()} Crewjah</div>
    </footer>
  </div>
);

export default Landing;
