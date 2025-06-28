import React from 'react';

const IntroScreen = ({ onContinue }) => {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to bottom right, #cce5ff, #e6f2ff)',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        আমি Jubair… আর আমি <span style={{ color: '#0077cc' }}>তোমাকেই খুঁজছিলাম</span> 🥹
      </h1>
      <button
        onClick={onContinue}
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#0077cc',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      >
        চল যাই জানের কাছে 🩵
      </button>
    </div>
  );
};

export default IntroScreen;