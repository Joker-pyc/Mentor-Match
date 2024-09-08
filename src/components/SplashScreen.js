import React, { useEffect } from 'react';
import { ReactComponent as Logo } from '../logo.svg';
import '../styles/SplashScreen.css';

function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <Logo className="splash-logo" />
      <h1>MentorMatch</h1>
    </div>
  );
}

export default SplashScreen;
