import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:5000/api/me', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
          navigate('/signin');
        } else {
          setUser(data);
        }
      })
      .catch(() => setError('Failed to load user info'));
  }, [navigate]);
  const handleLogout = async () => {
    await fetch('http://localhost:5000/api/logout', { method: 'POST', credentials: 'include' });
    navigate('/signin');
  };
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
  if (!user) return <div className="min-h-screen flex items-center justify-center text-gray-500">Loading...</div>;
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-10">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-primary">Dashboard</h2>
          <button onClick={handleLogout} className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">Logout</button>
        </div>
        <div className="mb-8">
          <p className="text-lg font-semibold">Welcome back, {user.name} 👋 — continue where you left off.</p>
        </div>
        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <DashboardCard to="/ask" label="Ask Anything" icon="❓" />
          <DashboardCard to="/summarize-text" label="Summarize Text" icon="📝" />
          <DashboardCard to="/summarize-code" label="Summarize Code" icon="💻" />
          <DashboardCard to="/quiz" label="Take a Quiz" icon="🎯" />
          <DashboardCard to="/flashcards" label="Flashcards" icon="📚" />
          <DashboardCard to="/planner" label="Study Planner" icon="📅" />
        </div>
        {/* Today's Snapshot */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8 flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">5</div>
            <div className="text-sm text-gray-600">Streak days</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">42</div>
            <div className="text-sm text-gray-600">Minutes studied</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">3</div>
            <div className="text-sm text-gray-600">Quizzes taken</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">12</div>
            <div className="text-sm text-gray-600">Flashcards reviewed</div>
          </div>
        </div>
        <button className="w-full py-2 bg-primary text-white font-bold rounded mb-8 hover:bg-primaryHover transition">Resume last activity</button>
        {/* Recommended for you */}
        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-lg font-bold mb-2 text-primary">Recommended for you</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Try a quiz on Python basics</li>
            <li>Review flashcards: Data Structures</li>
            <li>Summarize your last study notes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


import { Link } from 'react-router-dom';

function DashboardCard({ to, label, icon }) {
  return (
    <Link to={to} className="flex flex-col items-center justify-center bg-blue-100 rounded-lg p-6 shadow hover:bg-blue-200 transition">
      <span className="text-3xl mb-2">{icon}</span>
      <span className="font-semibold text-primary">{label}</span>
    </Link>
  );
}

export default Dashboard;
