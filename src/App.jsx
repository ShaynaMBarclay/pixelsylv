import React, { useState } from 'react';
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
    setHunger(hunger + 10);
    updateMood();
  };

  const play = () => {
    setHappiness(happiness + 10);
    updateMood();
  };

  const clean = () => {
    setCleanliness(cleanliness + 10);
    updateMood();
  };

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
