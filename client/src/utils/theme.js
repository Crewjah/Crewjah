// Design system utilities for consistent theming

// Common CSS class generators
export const buttonVariants = {
  primary: `bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:scale-105`,
  secondary: `bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 hover:border-indigo-600`,
  success: `bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl`,
  warning: `bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg hover:shadow-xl`,
  danger: `bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg hover:shadow-xl`,
  purple: `bg-purple-700 text-white hover:bg-purple-800 shadow hover:shadow-lg`,
  teal: `bg-teal-600 text-white hover:bg-teal-700 shadow hover:shadow-lg`,
  pink: `bg-pink-500 text-white hover:bg-pink-600 shadow hover:shadow-lg`,
  yellow: `bg-yellow-500 text-white hover:bg-yellow-600 shadow hover:shadow-lg`
};

export const cardVariants = {
  default: `bg-white rounded-xl shadow-lg`,
  elevated: `bg-white rounded-xl shadow-2xl`,
  gradient: `bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg`,
  glass: `bg-white/90 backdrop-blur-sm rounded-xl shadow-lg`,
  interactive: `bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300`
};

export const textVariants = {
  heading: `font-bold text-slate-800`,
  subheading: `font-semibold text-slate-700`,
  body: `text-slate-600`,
  caption: `text-sm text-slate-500`,
  link: `text-blue-600 hover:text-indigo-600 font-medium`,
  gradient: `bg-gradient-to-r from-blue-500 via-indigo-600 to-emerald-500 bg-clip-text text-transparent`
};

// Common animation classes
export const animations = {
  fadeIn: `opacity-0 animate-[fadeIn_1.2s_cubic-bezier(0.4,0,0.2,1)_forwards]`,
  slideUp: `translate-y-10 opacity-0 animate-[slideUp_0.6s_cubic-bezier(0.4,0,0.2,1)_forwards]`,
  scaleIn: `scale-95 opacity-0 animate-[scaleIn_0.3s_cubic-bezier(0.4,0,0.2,1)_forwards]`,
  pulse: `animate-pulse`,
  spin: `animate-spin`,
  bounce: `animate-bounce`,
  float: `animate-[float_3s_ease-in-out_infinite_alternate]`
};

// Common spacing utilities
export const layout = {
  container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
  section: `py-20`,
  gap: {
    sm: `gap-2`,
    md: `gap-4`,
    lg: `gap-6`,
    xl: `gap-8`
  }
};

// Form input styles
export const inputStyles = {
  base: `w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2`,
  normal: `border-gray-300 focus:border-blue-500 focus:ring-blue-500`,
  error: `border-red-300 focus:border-red-500 focus:ring-red-500`,
  success: `border-green-300 focus:border-green-500 focus:ring-green-500`
};

// Navigation styles
export const navigation = {
  nav: `bg-white/90 backdrop-blur-sm border-b border-blue-100`,
  navLink: `text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200`,
  logo: `text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent`
};

// Utility function to combine classes
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};