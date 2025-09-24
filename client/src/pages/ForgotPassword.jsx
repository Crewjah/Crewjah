import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setLoading(true);

		if (!email.includes('@')) {
			setError('Please enter a valid email address');
			setLoading(false);
			return;
		}

		try {
			// Simulate API delay for realistic UX
			await new Promise(resolve => setTimeout(resolve, 1500));
			
			// In a real app, this would send a reset email
			// For now, just show success message
			setSuccess(true);
		} catch (err) {
			setError('Failed to send reset link. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
			{/* Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30"></div>
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-100 rounded-full opacity-30"></div>
			</div>

			<div className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md border border-slate-200">
				{/* Header */}
				<div className="text-center mb-8">
					<Link 
						to="/" 
						className="inline-flex items-center space-x-3 mb-6 hover:scale-105 transition-transform duration-300"
					>
						<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
							<span className="text-white text-lg font-bold">📚</span>
						</div>
						<span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
							Crewjah
						</span>
					</Link>
					
					{!success ? (
						<>
							<h1 className="text-3xl font-bold text-slate-800 mb-2">Reset Password</h1>
							<p className="text-slate-600">Enter your email and we'll send you a link to reset your password</p>
						</>
					) : (
						<>
							<div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-white text-2xl">✓</span>
							</div>
							<h1 className="text-3xl font-bold text-slate-800 mb-2">Check Your Email</h1>
							<p className="text-slate-600">We've sent a password reset link to <span className="font-semibold text-blue-600">{email}</span></p>
						</>
					)}
				</div>

				{!success ? (
					<>
						{/* Form */}
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label className="block text-sm font-semibold text-slate-700 mb-2">
									Email Address
								</label>
								<input
									type="email"
									autoComplete="email"
									className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 backdrop-blur-sm text-slate-800 placeholder-slate-400 transition-all duration-300"
									placeholder="Enter your email address"
									value={email}
									onChange={e => setEmail(e.target.value)}
									required
								/>
							</div>

							<button
								type="submit"
								disabled={loading}
								className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
							>
								{loading ? (
									<div className="flex items-center justify-center space-x-2">
										<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
										<span>Sending Reset Link...</span>
									</div>
								) : (
									'Send Reset Link'
								)}
							</button>
						</form>

						{/* Error Message */}
						{error && (
							<div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
								{error}
							</div>
						)}

						{/* Back to Sign In */}
						<div className="text-center mt-8">
							<Link 
								to="/signin" 
								className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 inline-flex items-center space-x-1"
							>
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
								</svg>
								<span>Back to Sign In</span>
							</Link>
						</div>
					</>
				) : (
					<>
						{/* Success Actions */}
						<div className="space-y-4">
							<div className="text-center">
								<p className="text-slate-600 mb-6">
									Didn't receive the email? Check your spam folder or try again with a different email address.
								</p>
								
								<button
									onClick={() => {
										setSuccess(false);
										setEmail('');
									}}
									className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
								>
									Try Again
								</button>
							</div>
						</div>

						{/* Back to Sign In */}
						<div className="text-center mt-8 pt-6 border-t border-slate-200">
							<Link 
								to="/signin" 
								className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
							>
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
								</svg>
								<span>Back to Sign In</span>
							</Link>
						</div>
					</>
				)}
			</div>
		</div>
	);
}