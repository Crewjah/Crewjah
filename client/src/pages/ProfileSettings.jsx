
import { useState } from 'react';

const ProfileSettings = () => {
  const [name, setName] = useState('Jane Doe');
  const [email, setEmail] = useState('jane@example.com');
  const [bio, setBio] = useState('');
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 1200);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-primary">Profile Settings</h1>
        <div className="flex flex-col gap-4 mb-6">
          <label className="font-medium">Name
            <input className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label className="font-medium">Email
            <input className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <label className="font-medium">Bio
            <textarea className="mt-1 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" value={bio} onChange={e => setBio(e.target.value)} rows={3} />
          </label>
        </div>
        <button className="w-full py-2 bg-primary text-white font-bold rounded hover:bg-primaryHover transition" onClick={handleSave}>Save</button>
        {saved && <div className="mt-4 text-green-600 text-sm">Saved!</div>}
        <div className="mt-6 text-xs text-blue-700">Your profile is private. You can export or delete your data anytime.</div>
      </div>
    </div>
  );
}

export default ProfileSettings;
