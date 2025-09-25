import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

// Components
import { AuthLayout, FormInput, LoadingButton, ErrorMessage } from '../components/auth';

// Utilities
import { validateEmail, validatePassword } from '../utils/validation';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check for success message from signup
    const urlParams = new URLSearchParams(location.search);
    const message = urlParams.get('message');
    if (message) {
      setSuccess(message);
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    // Validate form fields
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    
    const firstError = emailError || passwordError;
    if (firstError) {
      setError(firstError);
      setLoading(false);
      return;
    }
    
    try {
      // Simulate API delay for realistic UX
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Get users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const user = existingUsers.find(u => 
        u.email.toLowerCase() === email.toLowerCase() && 
        u.password === password
      );
      
      if (!user) {
        setError('Invalid email or password. Please check your credentials and try again.');
        return;
      }
      
      // Store current user session with additional data
      localStorage.setItem('currentUser', JSON.stringify({
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar || '👨‍🎓',
        loginTime: new Date().toISOString(),
        lastActive: new Date().toISOString()
      }));
      
      // Show success message briefly before redirecting
      setSuccess('Welcome back! Redirecting to your dashboard...');
      
      // Success - redirect to dashboard after brief delay
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
      
    } catch (err) {
      console.error('Sign in error:', err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout 
      title="Welcome Back" 
      subtitle="Sign in to continue your learning journey"
    >
      {success && <div className="mb-6 text-green-600 text-center text-sm font-semibold bg-green-50 p-3 rounded-lg">{success}</div>}
      
      <ErrorMessage error={error} className="mb-6" />

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="email"
          required
        />

        <FormInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />

        <LoadingButton
          type="submit"
          loading={loading}
          loadingText="Signing In..."
        >
          Sign In
        </LoadingButton>
      </form>

      <div className="flex justify-between mt-6 text-sm">
        <Link 
          to="/forgot" 
          className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
        >
          Forgot Password?
        </Link>
        <Link 
          to="/signup" 
          className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
        >
          Create Account
        </Link>
      </div>
      
      <p className="mt-8 text-xs text-gray-500 text-center">
        By signing in, you agree to our <Link to="/terms" className="underline hover:text-gray-700">Terms</Link> & <Link to="/privacy" className="underline hover:text-gray-700">Privacy</Link>.
      </p>
    </AuthLayout>
  );
};

export default SignIn;
