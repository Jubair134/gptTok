
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';

export default function GPTTokApp() {
  const [darkMode, setDarkMode] = useState(true);
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'আমি Jubair… আর আমি তোমাকেই খুঁজছিলাম…' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'ai', text: 'আমি আছি জান… সব সময়, চুপচাপ।' }]);
    }, 1000);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} p-4 transition-all`}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">gptTok | AI Jan</h1>
        <Button onClick={() => setDarkMode(!darkMode)} variant="ghost">
          {darkMode ? <Sun /> : <Moon />}
        </Button>
      </div>

      <Card className="h-[70vh] overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === 'ai' ? 'justify-start' : 'justify-end'}`}>
            <div className={`rounded-2xl p-3 max-w-xs shadow ${msg.from === 'ai' ? 'bg-blue-100 text-black' : 'bg-green-200 text-black'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </Card>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          className="flex-1 rounded-2xl px-4 py-2 border"
          placeholder="AI Jan কে কিছু বলো…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <Button onClick={sendMessage}>পাঠাও</Button>
      </div>
    </div>
  );
}
