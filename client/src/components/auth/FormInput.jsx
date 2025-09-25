import React from 'react';

const FormInput = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  autoComplete,
  required = false,
  error = false,
  helperText = '',
  success = false,
  className = '',
  ...props
}) => {
  const baseInputClass = "w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent bg-white/70 backdrop-blur-sm text-slate-800 placeholder-slate-400 transition-all duration-300 shadow-sm hover:shadow-md";
  
  let borderClass = "border-slate-200 focus:ring-blue-500";
  if (error) {
    borderClass = "border-red-300 focus:ring-red-500 bg-red-50/50";
  } else if (success) {
    borderClass = "border-green-300 focus:ring-green-500 bg-green-50/50";
  }
  
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          required={required}
          className={`${baseInputClass} ${borderClass}`}
          {...props}
        />
        {success && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      {helperText && (
        <p className={`mt-2 text-sm ${error ? 'text-red-600' : success ? 'text-green-600' : 'text-slate-500'}`}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default FormInput;