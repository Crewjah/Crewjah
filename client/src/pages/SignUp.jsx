
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = 'http://localhost:5000/api';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirm) return setError('Passwords do not match');
    try {
      const res = await fetch(`${API}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Signup failed');
      navigate('/signin');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-teal-200 to-pink-300">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md animate-fadein border-2 border-purple-200">
        <div className="mb-6 flex flex-col items-center">
          <span className="text-2xl font-extrabold text-purple-700 mb-2 cursor-pointer drop-shadow" onClick={()=>navigate('/')}>Crewjah</span>
          <h2 className="text-3xl font-extrabold mb-2 text-teal-700 text-center drop-shadow">Sign Up</h2>
          <p className="text-base text-purple-700 text-center">Create your account to unlock all study tools and track your progress.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <label className="block">
            <span className="text-base font-semibold text-purple-700">Full Name</span>
            <input
              type="text"
              autoComplete="name"
              className="mt-2 w-full px-4 py-3 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 bg-purple-50 text-purple-900 placeholder-purple-400"
              placeholder="Enter your full name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </label>
          <label className="block">
            <span className="text-base font-semibold text-teal-700">Email</span>
            <input
              type="email"
              autoComplete="email"
              className="mt-2 w-full px-4 py-3 border border-teal-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600 bg-teal-50 text-teal-900 placeholder-teal-400"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="block">
            <span className="text-base font-semibold text-purple-700">Password</span>
            <input
              type="password"
              autoComplete="new-password"
              className="mt-2 w-full px-4 py-3 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 bg-purple-50 text-purple-900 placeholder-purple-400"
              placeholder="Create a password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <label className="block">
            <span className="text-base font-semibold text-teal-700">Confirm Password</span>
            <input
              type="password"
              autoComplete="new-password"
              className="mt-2 w-full px-4 py-3 border border-teal-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600 bg-teal-50 text-teal-900 placeholder-teal-400"
              placeholder="Confirm your password"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              required
            />
          </label>
          <button
            type="submit"
            className="w-full py-3 bg-purple-700 text-white font-bold rounded shadow hover:bg-purple-800 transition"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-center mt-6">
          <button className="text-teal-700 underline font-semibold hover:text-teal-900" onClick={() => navigate('/signin')}>Already have an account? Sign In</button>
        </div>
        {error && <div className="mt-6 text-red-600 text-center text-sm font-semibold">{error}</div>}
        <p className="mt-8 text-xs text-gray-500 text-center">Email verification may be required for full access.</p>
      </div>
    </div>
  );
};

export default SignUp;
