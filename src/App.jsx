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

  useEffect(() => {
    const determineMood = () => {
  if (happiness < 30) {
    setMood('tired');
  } else if (cleanliness < 50) {
    setMood('dirty');
  } else if (hunger < 30) {
    setMood('hungry');
  } else {
    setMood('happy');
  }
};

    determineMood();
  }, [hunger, happiness, cleanliness]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHunger((prev) => Math.max(prev - 10, 0));
      setHappiness((prev) => Math.max(prev - 15, 0));
      setCleanliness((prev) => Math.max(prev - 5, 0));
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  
  const feed = () => {
    setHunger((prev) => Math.min(prev + 10, 100));
  };

  const play = () => {
    setHappiness((prev) => Math.min(prev + 10, 100))
  };

  const clean = () => {
    setCleanliness((prev) => Math.min(prev + 10, 100))
  };


  return (
    <div className="app">
      <h1>Pixel Oliver</h1>
      <Character mood={mood} />
      <StatusBar hunger={hunger} happiness={happiness} cleanliness={cleanliness} />
      <ActionButtons onFeed={feed} onPlay={play} onClean={clean} />
    </div>
  );
};

export default App
