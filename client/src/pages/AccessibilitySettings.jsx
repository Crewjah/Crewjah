import { useState } from 'react';

const AccessibilitySettings = () => {
  const [dark, setDark] = useState(false);
  const [fontSize, setFontSize] = useState('M');
  const [dyslexia, setDyslexia] = useState(false);
  const [tts, setTts] = useState(false);
  const [contrast, setContrast] = useState(false);
  return (
    <div>
      <h2>Accessibility Settings</h2>
      <div>
        <label><input type="checkbox" checked={dark} onChange={()=>setDark(!dark)} /> Dark Mode</label>
      </div>
      <div>
        <label>Font Size: </label>
        <select value={fontSize} onChange={e=>setFontSize(e.target.value)}>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
      </div>
      <div>
        <label><input type="checkbox" checked={dyslexia} onChange={()=>setDyslexia(!dyslexia)} /> Dyslexia-friendly font</label>
      </div>
      <div>
        <label><input type="checkbox" checked={tts} onChange={()=>setTts(!tts)} /> Text-to-Speech (TTS)</label>
      </div>
      <div>
        <label><input type="checkbox" checked={contrast} onChange={()=>setContrast(!contrast)} /> High Contrast Mode</label>
      </div>
      <div style={{marginTop:16}}>
        <b>Keyboard Shortcuts</b>
        <ul>
          <li>Tab: Navigate</li>
          <li>Enter: Select/Submit</li>
          <li>Esc: Close dialogs</li>
        </ul>
      </div>
    </div>
  );
};

export default AccessibilitySettings;
