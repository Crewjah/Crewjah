import React from 'react';

export default function Landing() {
  return (
			<div className="fixed inset-0 min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400">
						<div className="w-full max-w-4xl mx-auto mt-12 mb-0 rounded-3xl shadow-2xl bg-white/80">
							<div className="w-full flex items-center justify-center px-8 py-6 bg-white/90 rounded-t-3xl shadow-lg">
								<span className="font-extrabold text-2xl text-purple-700 drop-shadow-lg">Crewjah</span>
							</div>
							<main className="w-full flex flex-col items-center justify-center p-6 md:p-10">
								<h1 className="text-5xl font-extrabold mb-3 text-purple-700 text-center drop-shadow-lg">Learn smarter with Crewjah</h1>
								<p className="text-lg text-teal-700 mb-8 text-center">Your all-in-one study assistant — ask anything, summarize notes & code, and track progress.</p>
								<div className="flex gap-4 mb-8">
									<a href="/signup" className="px-8 py-3 bg-purple-700 text-white font-bold rounded-xl shadow-lg hover:bg-purple-800 transition">Get Started</a>
								</div>
								<div className="flex gap-6 mb-8">
									<span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-semibold shadow">Privacy-first</span>
									<span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold shadow">No ads</span>
									<span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-semibold shadow">Beginner friendly</span>
								</div>
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full mb-12">
									<div className="rounded-2xl shadow-lg p-6 flex flex-col items-center bg-gradient-to-br from-blue-200 via-purple-100 to-pink-100">
										<div className="text-2xl font-bold mb-2 text-purple-700 drop-shadow">Ask Anything</div>
										<div className="text-teal-700 text-base">Instant answers with references</div>
									</div>
									<div className="rounded-2xl shadow-lg p-6 flex flex-col items-center bg-gradient-to-br from-teal-200 via-purple-100 to-pink-100">
										<div className="text-2xl font-bold mb-2 text-purple-700 drop-shadow">Summarize Text & Code</div>
										<div className="text-teal-700 text-base">Turn long content into key points</div>
									</div>
									<div className="rounded-2xl shadow-lg p-6 flex flex-col items-center bg-gradient-to-br from-pink-200 via-blue-100 to-purple-100">
										<div className="text-2xl font-bold mb-2 text-purple-700 drop-shadow">Quiz & Flashcards</div>
										<div className="text-teal-700 text-base">Practice and remember more</div>
									</div>
									<div className="rounded-2xl shadow-lg p-6 flex flex-col items-center bg-gradient-to-br from-purple-200 via-teal-100 to-blue-100">
										<div className="text-2xl font-bold mb-2 text-purple-700 drop-shadow">Planner & Progress</div>
										<div className="text-teal-700 text-base">Stay consistent and see growth</div>
									</div>
								</div>
								<div className="w-full max-w-xl mx-auto mb-10">
									<h2 className="text-2xl font-bold mb-4 text-teal-700 text-center drop-shadow">How It Works</h2>
									<ol className="list-decimal list-inside text-purple-700 space-y-2 text-left text-lg">
										<li>Paste text or pick a topic</li>
										<li>Get summary, resources & practice</li>
										<li>Track progress over time</li>
									</ol>
								</div>
							</main>
						</div>
					</div>
				);
			}
