import { Link } from 'react-router-dom';

const Footer = () => (
  <footer style={{marginTop:32,padding:'16px 0',borderTop:'1px solid #eee',textAlign:'center',fontSize:14}}>
    <Link to="/help">Docs</Link> • <a href="https://github.com/Crewjah/Crewjah/issues" target="_blank" rel="noopener noreferrer">Issues</a> • <a href="https://github.com/Crewjah/Crewjah" target="_blank" rel="noopener noreferrer">Contribute</a> • <Link to="/privacy">Privacy</Link> • <Link to="/terms">Terms</Link> • <Link to="/contact">Contact</Link>
    <div style={{marginTop:8}}>© {new Date().getFullYear()} Crewjah</div>
  </footer>
);

export default Footer;
