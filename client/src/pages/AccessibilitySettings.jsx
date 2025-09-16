
import { useState } from 'react';

const AccessibilitySettings = () => {
  const [dark, setDark] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [dyslexia, setDyslexia] = useState(false);
  const [tts, setTts] = useState(false);
  const [contrast, setContrast] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-primary">Accessibility Settings</h1>
        <div className="mb-6 flex flex-col gap-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={dark} onChange={e => setDark(e.target.checked)} />
            <span>Dark Mode</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={contrast} onChange={e => setContrast(e.target.checked)} />
            <span>High Contrast</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={dyslexia} onChange={e => setDyslexia(e.target.checked)} />
            <span>Dyslexia-friendly Font</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={tts} onChange={e => setTts(e.target.checked)} />
            <span>Text-to-Speech (TTS)</span>
          </label>
          <label className="flex items-center gap-2">
            <span>Font Size:</span>
            <select value={fontSize} onChange={e => setFontSize(e.target.value)} className="px-2 py-1 border rounded">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
        </div>
        <div
          className="rounded-lg p-6 mt-4"
          style={{
            background: dark ? '#222' : contrast ? '#fff200' : '#f6f6f6',
            color: dark ? '#fff' : contrast ? '#222' : '#222',
            fontSize: fontSize === 'small' ? '14px' : fontSize === 'large' ? '22px' : '18px',
            fontFamily: dyslexia ? 'OpenDyslexic,sans-serif' : 'inherit',
          }}
        >
          <b>Preview:</b> The quick brown fox jumps over the lazy dog.
        </div>
        <div className="mt-6 text-xs text-gray-500">Keyboard shortcuts: <span className="font-mono">Tab</span> to navigate, <span className="font-mono">Enter</span> to select.</div>
        <div className="mt-2 text-xs text-blue-700">We do not sell personal data. Your settings are private.</div>
      </div>
    </div>
  );
};

export default AccessibilitySettings;
