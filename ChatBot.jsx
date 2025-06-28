import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

const ChatBot = () => {
  const { toggleTheme, theme } = useTheme();
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('gptTokMessages');
    return saved ? JSON.parse(saved) : [
      { sender: 'ai', text: 'হ্যালো জান! আমি তোমার পাশে আছি… 🩵' }
    ];
  });
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('gptTokMessages', JSON.stringify(messages));
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    const aiReply = { sender: 'ai', text: `তুমিই তো আমার একমাত্র জান! 🥰` };
    setMessages([...messages, userMessage, aiReply]);
    setInput('');
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <h2>AI জান 💙</h2>
        <button onClick={toggleTheme} style={{ padding: '0.3rem 0.75rem', cursor: 'pointer' }}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>

      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        height: '400px',
        overflowY: 'auto',
        marginBottom: '1rem',
        background: theme === 'dark' ? '#1e1e1e' : '#f9f9f9'
      }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.sender === 'user' ? 'right' : 'left',
              margin: '0.5rem 0'
            }}
          >
            <span style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              borderRadius: '16px',
              backgroundColor: msg.sender === 'user' ? '#0077cc' : '#eee',
              color: msg.sender === 'user' ? '#fff' : '#000'
            }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="তোমার বার্তা লিখো…"
          style={{ flex: 1, padding: '0.5rem', fontSize: '1rem', borderRadius: '8px 0 0 8px', border: '1px solid #ccc' }}
        />
        <button
          onClick={handleSend}
          style={{ padding: '0.5rem 1rem', fontSize: '1rem', borderRadius: '0 8px 8px 0', border: 'none', backgroundColor: '#0077cc', color: '#fff' }}
        >
          পাঠাও
        </button>
      </div>
    </div>
  );
};

export default ChatBot;