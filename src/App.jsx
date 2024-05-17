import React, { useState, useEffect } from 'react';
import WelcomePage from './components/WelcomePage';
import './App.css';

function App() {
  const [showWelcomePage, setShowWelcomePage] = useState(true);

  const handleDismissWelcome = () => {
    setShowWelcomePage(false);
  };


  return (
        <WelcomePage />
  )
}

export default App;
