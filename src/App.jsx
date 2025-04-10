import React, { useState, useEffect } from 'react';
import Character from './components/Character';
import StatusBar  from './components/StatusBar';
import ActionButtons from './components/ActionButtons';
import './App.css'

const App = () => {
  const [hunger, setHunger] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [cleanliness, setCleanliness] = useState(50);
  const [tempAction, setTempAction] = useState(null);

  const [mood, setMood] = useState('happy');

  useEffect(() => {
    const determineMood = () => {
  if (hunger === 100 && happiness === 100 && cleanliness === 100) {
    setMood('elated');
  } else if (hunger === 0 && happiness === 0 && cleanliness === 0) {
    setMood('angry');
  } else if (happiness < 40) {
    setMood('tired');
  } else if (cleanliness < 50) {
    setMood('dirty');
  } else if (hunger < 20) {
    setMood('hungry');
  } else {
    setMood('happy');
  }
};

    determineMood();
  }, [hunger, happiness, cleanliness]);

  useEffect(() => {
    const hungerInterval = setInterval(() => {
      setHunger((prev) => Math.max(prev - 6, 0));
    }, 35000);

    return () => clearInterval(hungerInterval);
  }, []);

  useEffect(() => {
    const happinessInterval = setInterval(() => {
      setHappiness((prev) => Math.max(prev - 10, 0));
    }, 30000);

    return () => clearInterval(happinessInterval);
  }, []);

  useEffect(() => {
    const cleanlinessInterval = setInterval(() => {
      setCleanliness((prev) => Math.max(prev - 13, 0));
    }, 25000);

    return () => clearInterval(cleanlinessInterval);
  }, []);
  
  const feed = () => {
    setHunger((prev) => Math.min(prev + 20, 100));
    setTempAction('eating');
    setTimeout(() => setTempAction(null), 2000);
  };

  const play = () => {
    setHappiness((prev) => Math.min(prev + 20, 100));
    setTempAction('playful');
    setTimeout(() => setTempAction(null), 2000);
  };

  const clean = () => {
    setCleanliness((prev) => Math.min(prev + 10, 100));
    setTempAction('bathing');
    setTimeout(() => setTempAction(null), 2000);
  };


  return (
    <div className="app">
      <h1 className="sixtyfour-convergence">Pixel Oliver</h1>

      <div className="main-container">
      <Character mood={mood} tempAction={tempAction} />
      <ActionButtons onFeed={feed} onPlay={play} onClean={clean} />
      {/*<StatusBar hunger={hunger} happiness={happiness} cleanliness={cleanliness} />*/}
      </div>
    </div>
  );
};

export default App
