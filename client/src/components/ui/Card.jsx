import React from 'react';

const Card = ({
  children,
  variant = 'default',
  className = '',
  hover = false,
  ...props
}) => {
  const baseStyles = 'rounded-xl shadow-lg transition-all duration-300';
  
  const variants = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-xl',
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100',
    glass: 'bg-white/90 backdrop-blur-sm',
    dark: 'bg-gray-800 text-white border border-gray-700'
  };

  const hoverStyles = hover ? 'hover:shadow-2xl hover:scale-105 hover:-translate-y-2' : '';
  const variantStyles = variants[variant] || variants.default;

  return (
    <div
      className={`${baseStyles} ${variantStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 border-b border-gray-200 ${className}`} {...props}>
    {children}
  </div>
);

const CardBody = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 border-t border-gray-200 rounded-b-xl ${className}`} {...props}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;