export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-purple-200 to-cyan-200">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center animate-fadein">
        <h1 className="text-3xl font-extrabold mb-4 text-blue-900">Contact Us</h1>
        <p className="mb-6 text-blue-800">Email: <a href="mailto:support@crewjah.com" className="underline text-purple-700">support@crewjah.com</a><br/>We usually reply within 1 business day.</p>
      </div>
    </div>
  );

}
