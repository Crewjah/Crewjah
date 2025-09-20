import React from 'react';

export default function TailwindTest() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-red-500 text-white text-3xl font-bold p-8 rounded-xl shadow-lg mb-6">
        Tailwind Test: bg-red-500 text-3xl
      </div>
      <div className="bg-green-500 text-black text-xl p-6 rounded shadow mb-6">
        Tailwind Test: bg-green-500 text-xl
      </div>
      <div className="bg-blue-500 text-white text-lg p-4 rounded shadow">
        Tailwind Test: bg-blue-500 text-lg
      </div>
    </div>
  );
}
