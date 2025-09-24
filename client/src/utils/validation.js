// Authentication validation utilities
export const validateEmail = (email) => {
  if (!email) return 'Email is required';
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  
  if (email.length > 254) return 'Email address is too long';
  
  // Check for obviously fake domains (common test/fake patterns)
  const fakeDomains = ['fake.com', 'test.com', 'example.com', 'temp.com', 'dummy.com'];
  const domain = email.split('@')[1]?.toLowerCase();
  if (fakeDomains.includes(domain)) {
    return 'Please use a real email address for account verification';
  }
  
  return null;
};

export const validatePassword = (password) => {
  if (!password) return 'Password is required';
  if (password.length < 8) return 'Password must be at least 8 characters long';
  if (password.length > 128) return 'Password is too long (max 128 characters)';
  
  // Check for at least one uppercase, one lowercase, and one number
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  
  if (!hasUppercase || !hasLowercase || !hasNumber) {
    return 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
  }
  
  return null;
};

export const validatePasswordConfirmation = (password, confirmPassword) => {
  if (!confirmPassword) return 'Please confirm your password';
  if (password !== confirmPassword) return 'Passwords do not match';
  return null;
};

export const validateName = (name) => {
  if (!name) return 'Full name is required';
  if (name.trim().length < 2) return 'Name must be at least 2 characters long';
  if (name.trim().length > 50) return 'Name is too long (max 50 characters)';
  
  // Check for valid name characters (letters, spaces, hyphens, apostrophes)
  const nameRegex = /^[a-zA-Z\s\-']+$/;
  if (!nameRegex.test(name.trim())) return 'Name can only contain letters, spaces, hyphens, and apostrophes';
  
  return null;
};

// New validation functions for profile
export const validateAge = (age) => {
  if (!age) return 'Age is required';
  const ageNum = parseInt(age);
  if (isNaN(ageNum) || ageNum < 13 || ageNum > 120) {
    return 'Please enter a valid age (13-120)';
  }
  return null;
};

export const validateEducationLevel = (level) => {
  if (!level) return 'Education level is required';
  const validLevels = ['middle-school', 'high-school', 'undergraduate', 'graduate', 'postgraduate', 'professional'];
  if (!validLevels.includes(level)) return 'Please select a valid education level';
  return null;
};

export const validateLearningGoals = (goals) => {
  if (!goals || goals.length === 0) return 'Please select at least one learning goal';
  if (goals.length > 5) return 'Please select maximum 5 learning goals';
  return null;
};

// Generic form validation function
export const validateForm = (fields, validators) => {
  const errors = {};
  
  Object.keys(validators).forEach(field => {
    const validator = validators[field];
    const value = fields[field];
    const error = validator(value, fields);
    if (error) {
      errors[field] = error;
    }
  });
  
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};