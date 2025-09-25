import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/study-assistant', label: 'Study Assistant' },
  { to: '/smart-notes', label: 'Smart Notes' },
  { to: '/quiz', label: 'Practice Tests' },
  { to: '/flashcard-generator', label: 'Flashcards' },
  { to: '/planner', label: 'Study Planner' },
  { to: '/progress', label: 'Progress Tracker' },
  { to: '/resources', label: 'Study Resources' },
  { to: '/profile', label: 'Profile & Settings' },
  { to: '/help', label: 'Help' }
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside style={{width:220,background:'#fafbfc',padding:'24px 8px',borderRight:'1px solid #eee',minHeight:'70vh',position:'sticky',top:0}}>
      <nav>
        <ul style={{listStyle:'none',padding:0}}>
          {links.map(link => (
            <li key={link.to} style={{margin:'12px 0'}}>
              <Link to={link.to} style={{color:location.pathname===link.to?'#1976d2':'#222',fontWeight:location.pathname===link.to?'bold':'normal'}}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
