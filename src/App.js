import React, { useState } from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './App.css';
import SplashScreen from './components/SplashScreen';
import Auth from './components/Auth';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  if (!isLoggedIn) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="App-header glass">
        <Logo className="App-logo" />
        <label className="switch">
          <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
          <span className="slider">
            <span className="sun">☀️</span>
            <span className="moon">🌙</span>
          </span>
        </label>
      </header>
      <main className="App-main">
        <section className="feature-section glass">
          <h2>Find Your Mentor</h2>
          <p>Connect with experts in your field</p>
          <button className="cta-button glow">Get Started</button>
        </section>
        <section className="feature-section glass">
          <h2>Share Your Knowledge</h2>
          <p>Become a mentor and inspire others</p>
          <button className="cta-button secondary glow">Join as Mentor</button>
        </section>
      </main>
      <footer className="App-footer glass">
        <p>© 2023 MentorMatch. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;