import React from 'react';


const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-purple-200 to-cyan-200">
    <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center animate-fadein">
      <h1 className="text-4xl font-extrabold mb-4 text-blue-900">404 - Page Not Found</h1>
      <p className="mb-6 text-blue-800">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="crewjah-btn-main">Go Home</a>
    </div>
  </div>
);

export default NotFound;
