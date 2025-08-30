import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return navigate('/signin');
    fetch('http://localhost:5000/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
          localStorage.removeItem('token');
          navigate('/signin');
        } else {
          setUser(data);
        }
      })
      .catch(() => setError('Failed to load user info'));
  }, [navigate]);
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };
  if (error) return <div>{error}</div>;
  if (!user) return <div>Loading...</div>;
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome back, {user.name} 👋 — continue where you left off.</p>
      <button onClick={handleLogout}>Logout</button>
      {/* Add dashboard features here */}
    </div>
  );
};

export default Dashboard;
