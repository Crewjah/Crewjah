
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Components
import { AuthLayout, FormInput, LoadingButton, ErrorMessage } from '../components/auth';

// Utilities
import { validateEmail, validatePassword, validatePasswordConfirmation, validateName } from '../utils/validation';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    // Validate form fields
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmError = validatePasswordConfirmation(password, confirm);
    
    const firstError = nameError || emailError || passwordError || confirmError;
    if (firstError) {
      setError(firstError);
      setLoading(false);
      return;
    }
    
    try {
      // Simulate API delay for realistic UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user already exists
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      if (existingUsers.find(user => user.email === email)) {
        throw new Error('Account with this email already exists');
      }
      
      // Create new user
      const newUser = {
        id: Date.now().toString(),
        email,
        name,
        password, // In production, this would be hashed
        createdAt: new Date().toISOString()
      };
      
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      
      // Success - redirect to sign in
      navigate('/signin?message=Account created successfully! Please sign in.');
    } catch (err) {
      setError(err.message || 'Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout 
      title="Create Account" 
      subtitle="Start your learning journey today"
    >
      <ErrorMessage error={error} className="mb-6" />

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete="name"
          required
        />

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
          placeholder="Create a secure password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="new-password"
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          autoComplete="new-password"
          required
        />

        <LoadingButton
          type="submit"
          loading={loading}
          loadingText="Creating Account..."
        >
          Create Account
        </LoadingButton>
      </form>

      <div className="text-center mt-6">
        <p className="text-slate-600">
          Already have an account?{' '}
          <Link 
            to="/signin" 
            className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
          >
            Sign In
          </Link>
        </p>
      </div>
      
      <p className="mt-8 text-xs text-gray-500 text-center">
        Email verification may be required for full access.
      </p>
    </AuthLayout>
  );
};

export default SignUp;
