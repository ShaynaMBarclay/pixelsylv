import React from 'react';
import happyGif from '../images/happy.gif';
import tiredGif from '../images/sleepy.gif';
import dirtyGif from '../images/stinky.gif';

const Character = ({ mood }) => {
  
  const moodImages = {
    happy: happyGif,
    tired: tiredGif,
    dirty: dirtyGif,
  };

  const imageSrc = moodImages[mood] || happyGif;

  return (
    <div className="character">
      <img
        src={imageSrc}
        alt={mood}
        className="character-image"
      />
      <p>Current Mood: {mood.charAt(0).toUpperCase() + mood.slice(1)}</p>
    </div>
  );
};

export default Character;