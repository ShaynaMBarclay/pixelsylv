import React, { useState, useEffect } from 'react';
import Character from './components/Character';
/*import StatusBar  from './components/StatusBar';*/
import ActionButtons from './components/ActionButtons';
import MusicToggle from './components/MusicToggle';
import './App.css'

const App = () => {
  const [hunger, setHunger] = useState(() => {
    const saved = localStorage.getItem('hunger');
    const value = saved !== null ? JSON.parse(saved) : 50;
    console.log('Initial Hunger:', value);
    return value;
  });
  
  const [happiness, setHappiness] = useState(() => {
    const saved = localStorage.getItem('happiness');
    const value = saved !== null ? JSON.parse(saved) : 50;
    console.log('Initial Happiness:', value);
    return value;
  });
  
  const [cleanliness, setCleanliness] = useState(() => {
    const saved = localStorage.getItem('cleanliness');
    const value = saved !== null ? JSON.parse(saved) : 50;
    console.log('Initial Cleanliness:', value);
    return value;
  });
  
  const [tempAction, setTempAction] = useState(null);

  const [mood, setMood] = useState('happy');

  const angrySound = new Audio('/angry.mp3');
  const eatingSound = new Audio('/eating.wav');
  const bathSound = new Audio('/bath.mp3');
  const playingSound = new Audio('/playing.mp3');
  const elatedSound = new Audio('/elated.mp3');

  useEffect(() => {
    const determineMood = () => {
  if (hunger === 100 && happiness === 100 && cleanliness === 100) {
    setMood('elated');
    elatedSound.play();
  } else if (hunger === 0 && happiness === 0 && cleanliness === 0) {
    setMood('angry');
    angrySound.play();
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
  

    // Persist hunger
    useEffect(() => {
      localStorage.setItem('hunger', JSON.stringify(hunger));
    }, [hunger]);
  
    // Persist happiness
    useEffect(() => {
      localStorage.setItem('happiness', JSON.stringify(happiness));
    }, [happiness]);
  
    // Persist cleanliness
    useEffect(() => {
      localStorage.setItem('cleanliness', JSON.stringify(cleanliness));
    }, [cleanliness]);

    
  const feed = () => {
    setHunger((prev) => Math.min(prev + 20, 100));
    eatingSound.play();
    setTempAction('eating');
    setTimeout(() => setTempAction(null), 2000);
  };

  const play = () => {
    setHappiness((prev) => Math.min(prev + 20, 100));
    playingSound.play();
    setTempAction('playful');
    setTimeout(() => setTempAction(null), 2000);
  };

  const clean = () => {
    setCleanliness((prev) => Math.min(prev + 10, 100));
    bathSound.play();
    setTempAction('bathing');
    setTimeout(() => setTempAction(null), 2000);
  };


  return (
    <div className="app">
      <h1 className="sixtyfour-convergence">Pixel Oliver</h1>
      <MusicToggle />
      <div className="main-container">
      <Character mood={mood} tempAction={tempAction} />
      <ActionButtons onFeed={feed} onPlay={play} onClean={clean} />
      {/*<StatusBar hunger={hunger} happiness={happiness} cleanliness={cleanliness} />*/}
      </div>
    </div>
  );
};

export default App
