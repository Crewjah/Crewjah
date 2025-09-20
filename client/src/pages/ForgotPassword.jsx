

import React, { useState } from 'react';

export default function ForgotPassword() {
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		// TODO: Integrate with backend
		setSuccess(true);
	};

		return (
			<main className="min-h-screen flex items-center justify-center bg-blue-50">
				<div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
					<h2 className="text-2xl font-bold mb-6 text-primary">Forgot Password</h2>
					<form onSubmit={handleSubmit} className="space-y-4">
						<label className="block">
							<span className="text-sm font-medium">Email</span>
							<input type="email" autoComplete="email" className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
						</label>
						<button type="submit" className="w-full py-2 bg-primary text-white font-bold rounded hover:bg-primaryHover transition">Send reset link</button>
					</form>
					{success && <div className="mt-4 text-green-600 text-sm">We’ve sent a reset link to your email.</div>}
				</div>
			</main>
		);
	}

