import React, { useState } from 'react';

const EmailVerificationBanner = ({ user, onVerifyClick, onDismiss }) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || user?.emailVerified) {
    return null;
  }

  const handleDismiss = () => {
    setDismissed(true);
    if (onDismiss) onDismiss();
  };

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
      <div className="flex items-start space-x-3">
        <div className="text-amber-600 text-xl">⚠️</div>
        <div className="flex-1">
          <h3 className="text-amber-800 font-semibold mb-1">
            Verify Your Email Address
          </h3>
          <p className="text-amber-700 text-sm mb-3">
            Please verify <strong>{user?.email}</strong> to secure your account and enable password recovery.
          </p>
          <div className="flex items-center space-x-3">
            <button
              onClick={onVerifyClick}
              className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-700 transition-colors duration-300"
            >
              Send Verification Email
            </button>
            <button
              onClick={handleDismiss}
              className="text-amber-600 text-sm font-medium hover:text-amber-800 transition-colors duration-300"
            >
              Remind me later
            </button>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="text-amber-500 hover:text-amber-700 transition-colors duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EmailVerificationBanner;