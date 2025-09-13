import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = 'http://localhost:5000';

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
      const res = await fetch(`${API}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-blue-100 to-purple-200">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 animate-fadein">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input id="signup-name" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required aria-label="Name" className="border border-blue-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input id="signup-email" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required aria-label="Email" className="border border-blue-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input id="signup-password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required aria-label="Password" className="border border-blue-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input id="signup-confirm" type="password" placeholder="Confirm password" value={confirm} onChange={e => setConfirm(e.target.value)} required aria-label="Confirm password" className="border border-blue-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-pink-400 via-blue-400 to-purple-500 text-white font-bold rounded-lg shadow-xl hover:from-blue-400 hover:to-pink-400 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400 animate-slidein"
          >
            Create Account
          </button>
        </form>
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => navigate('/signin')}
            className="text-blue-600 hover:underline font-semibold text-base"
          >
            Already have an account?
          </button>
        </div>
        {error && <div className="mt-4 text-center text-red-500 font-semibold animate-fadein">{error}</div>}
      </div>
    </div>
  );
};

export default SignUp;
