
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Components
import { AuthLayout, FormInput, LoadingButton, ErrorMessage } from '../components/auth';

// Utilities
import { validateEmail, validatePassword, validatePasswordConfirmation, validateName, validateAge, validateEducationLevel, validateLearningGoals } from '../utils/validation';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [age, setAge] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [learningGoals, setLearningGoals] = useState([]);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const educationOptions = [
    { value: '', label: 'Select your education level' },
    { value: 'middle-school', label: 'Middle School' },
    { value: 'high-school', label: 'High School' },
    { value: 'undergraduate', label: 'Undergraduate' },
    { value: 'graduate', label: 'Graduate' },
    { value: 'postgraduate', label: 'Postgraduate' },
    { value: 'professional', label: 'Professional' }
  ];

  const goalOptions = [
    { id: 'academic', label: 'Academic Excellence' },
    { id: 'test-prep', label: 'Test Preparation' },
    { id: 'skill-building', label: 'Skill Building' },
    { id: 'career-dev', label: 'Career Development' },
    { id: 'personal-growth', label: 'Personal Growth' },
    { id: 'language-learning', label: 'Language Learning' },
    { id: 'coding', label: 'Programming & Coding' },
    { id: 'research', label: 'Research Skills' }
  ];

  const handleGoalChange = (goalId) => {
    setLearningGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    // Validate form fields
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmError = validatePasswordConfirmation(password, confirm);
    const ageError = validateAge(age);
    const educationError = validateEducationLevel(educationLevel);
    const goalsError = validateLearningGoals(learningGoals);
    
    if (!agreedToTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy');
      setLoading(false);
      return;
    }
    
    const firstError = nameError || emailError || passwordError || confirmError || ageError || educationError || goalsError;
    if (firstError) {
      setError(firstError);
      setLoading(false);
      return;
    }
    
    try {
      // Simulate API delay for realistic UX
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Check if user already exists
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = existingUsers.find(user => 
        user.email.toLowerCase() === email.toLowerCase()
      );
      
      if (existingUser) {
        setError('An account with this email already exists. Please try signing in instead.');
        return;
      }
      
      // Create new user with complete profile
      const newUser = {
        id: Date.now().toString(),
        email: email.toLowerCase(),
        name: name.trim(),
        password, // WARNING: In production, passwords must be hashed before storage
        age: parseInt(age),
        educationLevel,
        learningGoals,
        bio: '', // Optional field, can be filled later
        avatar: '👨‍🎓',
        createdAt: new Date().toISOString(),
        lastActive: new Date().toISOString(),
        profileCompleted: true,
        emailVerified: false, // Email verification status
        verificationToken: null, // For future email verification
        stats: {
          totalStudyTime: 0,
          currentStreak: 0,
          totalCourses: 0,
          completedActivities: 0
        }
      };
      
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      
      // Show success message
      setSuccess('Account created successfully! Redirecting to sign in...');
      
      // Success - redirect to sign in with success message
      setTimeout(() => {
        navigate('/signin?message=Welcome to Crewjah! Your account has been created successfully. Please sign in to get started.');
      }, 2000);
      
    } catch (err) {
      console.error('Sign up error:', err);
      setError('Something went wrong while creating your account. Please try again.');
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
      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">{success}</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="Full Name *"
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete="name"
          required
        />

        <FormInput
          label="Email Address *"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="email"
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Age *"
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={e => setAge(e.target.value)}
            min="13"
            max="120"
            required
          />

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Education Level *
            </label>
            <select
              value={educationLevel}
              onChange={e => setEducationLevel(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 backdrop-blur-sm text-slate-800 transition-all duration-300"
              required
            >
              {educationOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Learning Goals * (Select 1-5)
          </label>
          <div className="grid grid-cols-2 gap-2">
            {goalOptions.map(goal => (
              <label key={goal.id} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={learningGoals.includes(goal.id)}
                  onChange={() => handleGoalChange(goal.id)}
                  className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-slate-700">{goal.label}</span>
              </label>
            ))}
          </div>
        </div>

        <FormInput
          label="Password *"
          type="password"
          placeholder="Create a secure password (8+ chars, mixed case, number)"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="new-password"
          required
        />

        <FormInput
          label="Confirm Password *"
          type="password"
          placeholder="Confirm your password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          autoComplete="new-password"
          required
        />

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="terms"
            checked={agreedToTerms}
            onChange={e => setAgreedToTerms(e.target.checked)}
            className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 mt-1"
            required
          />
          <label htmlFor="terms" className="text-sm text-slate-600">
            I agree to the{' '}
            <Link to="/terms" className="text-blue-600 hover:text-blue-700 underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-blue-600 hover:text-blue-700 underline">
              Privacy Policy
            </Link>
            *
          </label>
        </div>

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
