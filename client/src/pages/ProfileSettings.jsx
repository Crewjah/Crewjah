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
    <div className="edu-page edu-profile">
      <h1>Profile Settings</h1>
      <div className="edu-profile-form">
        <label htmlFor="profile-name">Name:<br />
          <input id="profile-name" className="edu-input" value={name} onChange={e => setName(e.target.value)} aria-label="Name" />
        </label>
        <label htmlFor="profile-email">Email:<br />
          <input id="profile-email" className="edu-input" value={email} onChange={e => setEmail(e.target.value)} aria-label="Email" />
        </label>
        <label htmlFor="profile-bio">Bio:<br />
          <textarea id="profile-bio" className="edu-input" value={bio} onChange={e => setBio(e.target.value)} rows={3} aria-label="Bio" />
        </label>
        <button
          className="edu-btn edu-btn-primary transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleSave}
        >
          Save
        </button>
        {saved && <span className="edu-success" style={{marginLeft:12}}>Saved!</span>}
      </div>
    </div>
  );
}

export default ProfileSettings;
