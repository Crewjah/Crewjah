import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = 'http://localhost:5000';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(`${API}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Sign In</button>
      </form>
      <button onClick={() => navigate('/signup')}>Sign Up</button>
      <button onClick={() => navigate('/forgot')}>Forgot password?</button>
      {error && <div style={{color:'red'}}>{error}</div>}
      <p style={{fontSize:'small'}}>By signing in, you agree to our Terms & Privacy.</p>
    </div>
  );
};

export default SignIn;
