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
        <label>Name:<br />
          <input className="edu-input" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>Email:<br />
          <input className="edu-input" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>Bio:<br />
          <textarea className="edu-input" value={bio} onChange={e => setBio(e.target.value)} rows={3} />
        </label>
        <button className="edu-btn edu-btn-primary" onClick={handleSave}>Save</button>
        {saved && <span className="edu-success" style={{marginLeft:12}}>Saved!</span>}
      </div>
    </div>
  );
}

export default ProfileSettings;
