import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{padding:'16px 0',borderBottom:'1px solid #eee',marginBottom:24}}>
    <Link to="/">
      <img src="/vite.svg" alt="Crewjah Logo" style={{ height: 40, verticalAlign:'middle' }} />
      <span style={{fontWeight:'bold',fontSize:24,marginLeft:8,verticalAlign:'middle'}}>Crewjah</span>
    </Link>
    <nav style={{float:'right'}}>
      <Link to="/dashboard" style={{marginRight:16}}>Dashboard</Link>
      <Link to="/ask" style={{marginRight:16}}>Ask</Link>
      <Link to="/summarize-text" style={{marginRight:16}}>Summarize</Link>
      <Link to="/quiz" style={{marginRight:16}}>Quiz</Link>
      <Link to="/flashcards" style={{marginRight:16}}>Flashcards</Link>
      <Link to="/planner" style={{marginRight:16}}>Planner</Link>
      <Link to="/progress" style={{marginRight:16}}>Progress</Link>
      <Link to="/help">Help</Link>
    </nav>
  </header>
);

export default Header;
