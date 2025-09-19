
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = 'http://localhost:5000/api';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(`${API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Incorrect email or password.');
      navigate('/dashboard'); // Redirect to dashboard on successful login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 via-purple-200 to-pink-300">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md animate-fadein border-2 border-teal-200">
        <div className="mb-6 flex flex-col items-center">
          <span className="text-2xl font-extrabold text-teal-700 mb-2 cursor-pointer drop-shadow" onClick={()=>navigate('/')}>Crewjah</span>
          <h2 className="text-3xl font-extrabold mb-2 text-purple-700 text-center drop-shadow">Sign In</h2>
          <p className="text-base text-teal-700 text-center">Welcome back! Sign in to access your dashboard and study tools.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <label className="block">
            <span className="text-base font-semibold text-teal-700">Email / Username</span>
            <input
              type="email"
              autoComplete="email"
              className="mt-2 w-full px-4 py-3 border border-teal-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600 bg-teal-50 text-teal-900 placeholder-teal-400"
              placeholder="Enter your email or username"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="block">
            <span className="text-base font-semibold text-purple-700">Password</span>
            <input
              type="password"
              autoComplete="current-password"
              className="mt-2 w-full px-4 py-3 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 bg-purple-50 text-purple-900 placeholder-purple-400"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white font-bold rounded shadow hover:bg-teal-700 transition"
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-between mt-6">
          <button className="text-teal-700 underline font-semibold hover:text-teal-900" onClick={() => navigate('/forgot')}>Forgot Password?</button>
          <button className="text-purple-700 underline font-semibold hover:text-purple-900" onClick={() => navigate('/signup')}>Don’t have an account? Sign Up</button>
        </div>
        {error && <div className="mt-6 text-red-600 text-center text-sm font-semibold">{error}</div>}
        <p className="mt-8 text-xs text-gray-500 text-center">By signing in, you agree to our <a href="/terms" className="underline">Terms</a> & <a href="/privacy" className="underline">Privacy</a>.</p>
      </div>
    </div>
  );
};

export default SignIn; // Exporting the SignIn component
