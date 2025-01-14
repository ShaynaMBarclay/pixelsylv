import React, { useState, useEffect } from 'react';
import Character from './components/Character';
import StatusBar  from './components/StatusBar';
import ActionButtons from './components/ActionButtons';
import './App.css'

const App = () => {
  const [hunger, setHunger] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [cleanliness, setCleanliness] = useState(50);

  const [mood, setMood] = useState('happy');

  const updateMood = () => {
    if (hunger < 30) setMood('hungry');
    else if (cleanliness < 30) setMood('dirty');
    else if (happiness < 30) setMood('tired');
    else setMood('happy');
  };

  const feed = () => {
    setHunger((prev) => Math.min(prev + 10, 100));
    updateMood();
  };

  const play = () => {
    setHappiness((prev) => Math.min(prev + 10, 100))
    updateMood();
  };

  const clean = () => {
    setCleanliness((prev) => Math.min(prev + 10, 100))
    updateMood();
  };

  useEffect(() => {
    const interval = setInterval(() =>{
      setHunger((prev) => Math.max(prev - 5, 0));
      setHappiness(( prev) => Math.max(prev - 3, 0));
      setCleanliness((prev) => Math.max(prev - 4, 0));
      updateMood();
    }, 40000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <h1>Pixel Sylv</h1>
      <Character mood={mood} />
      <StatusBar hunger={hunger} happiness={happiness} cleanliness={cleanliness} />
      <ActionButtons onFeed={feed} onPlay={play} onClean={clean} />
    </div>
  );
};

export default App
