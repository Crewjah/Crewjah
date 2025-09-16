
import { useState } from 'react';

const ForgotPassword = () => {
	const [email, setEmail] = useState('');
	const [sent, setSent] = useState(false);
	const [error, setError] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();
		setError('');
		setSent(false);
		try {
			// Simulate API call
			setTimeout(() => {
				setSent(true);
			}, 1000);
		} catch {
			setError('Failed to send reset link.');
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-blue-50">
			<div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
				<h2 className="text-2xl font-bold mb-6 text-primary">Forgot Password</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<label className="block">
						<span className="text-sm font-medium">Email</span>
						<input type="email" autoComplete="email" className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
					</label>
					<button type="submit" className="w-full py-2 bg-primary text-white font-bold rounded hover:bg-primaryHover transition">Send reset link</button>
				</form>
				{sent && <div className="mt-4 text-green-600 text-sm">We’ve sent a reset link to your email.</div>}
				{error && <div className="mt-4 text-red-600 text-sm">{error}</div>}
			</div>
		</div>
	);
};

export default ForgotPassword;
