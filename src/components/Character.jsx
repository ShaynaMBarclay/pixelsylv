import React from 'react';
import happyGif from '../images/happy.gif';
import tiredGif from '../images/sleepy.gif';
import dirtyGif from '../images/stinky.gif';
import hungryGif from '../images/hungry.gif';

const Character = ({ mood }) => {
  
  const moodImages = {
    happy: happyGif,
    tired: tiredGif,
    dirty: dirtyGif,
    hungry: hungryGif,
  };

  const imageSrc = moodImages[mood] || happyGif;

  return (
    <div className="character">
      <img
        src={imageSrc}
        alt={mood}
        className="character-image"
      />
      <p>Oliver is {mood.charAt(0) + mood.slice(1)}!</p>
    </div>
  );
};

export default Character;