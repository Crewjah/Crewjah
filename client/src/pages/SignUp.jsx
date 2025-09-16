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
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-primary">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium">Name</span>
            <input type="text" autoComplete="name" className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Email</span>
            <input type="email" autoComplete="email" className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Password</span>
            <input type="password" autoComplete="new-password" className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Confirm Password</span>
            <input type="password" autoComplete="new-password" className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Confirm password" value={confirm} onChange={e => setConfirm(e.target.value)} required />
          </label>
          <button type="submit" className="w-full py-2 bg-primary text-white font-bold rounded hover:bg-primaryHover transition">Create account</button>
        </form>
        <div className="flex justify-between mt-4">
          <button className="text-primary underline" onClick={() => navigate('/signin')}>Sign In</button>
        </div>
        {error && <div className="mt-4 text-red-600 text-sm">{error}</div>}
        <p className="mt-6 text-xs text-gray-500">Email verification may be required for full access.</p>
      </div>
    </div>
  );
};

export default SignUp;
