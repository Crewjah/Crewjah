// Authentication validation utilities
export const validateEmail = (email) => {
  if (!email) return 'Email is required';
  if (!email.includes('@')) return 'Please enter a valid email address';
  return null;
};

export const validatePassword = (password) => {
  if (!password) return 'Password is required';
  if (password.length < 6) return 'Password must be at least 6 characters long';
  return null;
};

export const validatePasswordConfirmation = (password, confirmPassword) => {
  if (password !== confirmPassword) return 'Passwords do not match';
  return null;
};

export const validateName = (name) => {
  if (!name) return 'Name is required';
  if (name.trim().length < 2) return 'Name must be at least 2 characters long';
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