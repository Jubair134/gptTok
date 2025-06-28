import { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import ChatBot from './components/ChatBot';
import IntroScreen from './components/IntroScreen';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <ThemeProvider>
      {showIntro ? (
        <IntroScreen onContinue={() => setShowIntro(false)} />
      ) : (
        <ChatBot />
      )}
    </ThemeProvider>
  );
}

export default App;