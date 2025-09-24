import React from 'react';

const Spinner = ({
  size = 'md',
  color = 'blue',
  className = '',
  ...props
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colors = {
    blue: 'border-blue-600',
    white: 'border-white',
    gray: 'border-gray-600',
    green: 'border-green-600',
    red: 'border-red-600',
    purple: 'border-purple-600'
  };

  const sizeStyles = sizes[size] || sizes.md;
  const colorStyles = colors[color] || colors.blue;

  return (
    <div
      className={`${sizeStyles} border-2 border-t-transparent rounded-full animate-spin ${colorStyles} ${className}`}
      {...props}
    />
  );
};

export default Spinner;