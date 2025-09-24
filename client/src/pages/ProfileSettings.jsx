
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Utilities
import { validateName, validateEmail, validateAge, validateEducationLevel, validateLearningGoals } from '../utils/validation';

const ProfileSettings = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [age, setAge] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [learningGoals, setLearningGoals] = useState([]);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
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

  // Load current user data
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (!currentUser.id) {
      navigate('/signin');
      return;
    }
    
    setName(currentUser.name || '');
    setEmail(currentUser.email || '');
    setBio(currentUser.bio || '');
    setAge(currentUser.age?.toString() || '');
    setEducationLevel(currentUser.educationLevel || '');
    setLearningGoals(currentUser.learningGoals || []);
  }, [navigate]);

  const handleSave = async () => {
    setLoading(true);
    setError('');
    
    // Validate form fields
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const ageError = validateAge(age);
    const educationError = validateEducationLevel(educationLevel);
    const goalsError = validateLearningGoals(learningGoals);
    
    const firstError = nameError || emailError || ageError || educationError || goalsError;
    if (firstError) {
      setError(firstError);
      setLoading(false);
      return;
    }
    
    try {
      // Get current user and users array
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      if (!currentUser.id) {
        throw new Error('User not authenticated');
      }
      
      // Update user in users array
      const updatedUsers = users.map(user => 
        user.id === currentUser.id 
          ? { 
              ...user, 
              name, 
              email, 
              bio, 
              age: parseInt(age), 
              educationLevel, 
              learningGoals,
              updatedAt: new Date().toISOString() 
            }
          : user
      );
      
      // Update current user session
      const updatedCurrentUser = { 
        ...currentUser, 
        name, 
        email, 
        bio, 
        age: parseInt(age), 
        educationLevel, 
        learningGoals 
      };
      
      // Save to localStorage
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      localStorage.setItem('currentUser', JSON.stringify(updatedCurrentUser));
      
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
      
    } catch (err) {
      setError(err.message || 'Failed to save profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Profile Settings</h1>
            <p className="text-slate-600">Manage your account information and preferences</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {saved && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-600 text-sm font-medium">Profile updated successfully!</p>
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name *
              </label>
              <input 
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                value={name} 
                onChange={e => setName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address *
              </label>
              <input 
                type="email"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                value={email} 
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Age *
                </label>
                <input 
                  type="number"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  value={age} 
                  onChange={e => setAge(e.target.value)}
                  placeholder="Enter your age"
                  min="13"
                  max="120"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Education Level *
                </label>
                <select
                  value={educationLevel}
                  onChange={e => setEducationLevel(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Bio (Optional)
              </label>
              <textarea 
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                value={bio} 
                onChange={e => setBio(e.target.value)}
                rows={4}
                placeholder="Tell us a bit about yourself..."
              />
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <button 
              onClick={handleSave}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
            
            <p className="text-xs text-slate-500 text-center">
              Your profile information is stored securely and privately. You can export or delete your data anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;
