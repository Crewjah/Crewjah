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
  className = '',
  ...props
}) => {
  const baseInputClass = "w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 backdrop-blur-sm text-slate-800 placeholder-slate-400 transition-all duration-300";
  const errorClass = error ? "border-red-300 focus:ring-red-500" : "border-slate-200";
  
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        required={required}
        className={`${baseInputClass} ${errorClass}`}
        {...props}
      />
    </div>
  );
};

export default FormInput;