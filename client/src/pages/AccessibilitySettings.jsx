import { useState } from 'react';

const AccessibilitySettings = () => {
  const [dark, setDark] = useState(false);
  const [fontSize, setFontSize] = useState('M');
  const [dyslexia, setDyslexia] = useState(false);
  const [tts, setTts] = useState(false);
  const [contrast, setContrast] = useState(false);
  return (
    <div className="edu-page edu-access">
      <h1>Accessibility Settings</h1>
      <div className="edu-access-controls">
        <label>
          <input type="checkbox" checked={dark} onChange={e => setDark(e.target.checked)} />
          Dark Mode
        </label>
        <label>
          <input type="checkbox" checked={dyslexia} onChange={e => setDyslexia(e.target.checked)} />
          Dyslexia-friendly Font
        </label>
        <label>
          Font Size:
          <select value={fontSize} onChange={e => setFontSize(e.target.value)}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
      </div>
      <div className="edu-access-preview" style={{background:dark?'#222':'#f6f6f6',color:dark?'#fff':'#222',fontSize:fontSize==='small'?'14px':fontSize==='large'?'22px':'18px',fontFamily:dyslexia?'OpenDyslexic,sans-serif':'inherit',padding:24,marginTop:24}}>
        <b>Preview:</b> The quick brown fox jumps over the lazy dog.
      </div>
    </div>
  );
};

export default AccessibilitySettings;
