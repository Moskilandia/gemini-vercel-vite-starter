import { useState } from 'react';
import './styles.css';

export default function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!input.trim()) return;

    setLoading(true);
    setOutput('');

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });

      const data = await res.json();
      setOutput(data.text || 'No response');
    } catch {
      setOutput('Error contacting API');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container">
      <h1>Gemini + Vercel + Vite</h1>

      <textarea
        placeholder="Paste text here…"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating…' : 'Generate'}
      </button>

      {output && <pre>{output}</pre>}
    </main>
  );
}
Add App component
