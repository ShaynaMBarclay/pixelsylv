import React from 'react';
import happyGif from '../images/happy.gif';
import tiredGif from '../images/sleepy.gif';
import dirtyGif from '../images/stinky.gif';
import hungryGif from '../images/hungry.gif';
import playingGif from '../images/playful.gif';
import eatingGif from '../images/feeding.gif';


const Character = ({ mood, tempAction }) => {
  
  const moodImages = {
    happy: happyGif,
    tired: tiredGif,
    dirty: dirtyGif,
    hungry: hungryGif,
  };

  const actionImages = {
    playful: playingGif,
    eating: eatingGif,
  };

  const imageSrc =  tempAction ? actionImages[tempAction] : moodImages[mood] || happyGif;

  return (
    <div className="character">
      <img
        src={imageSrc}
        alt={mood}
        className="character-image"
      />
      <p>Oliver is {tempAction ? tempAction : mood.charAt(0).toUpperCase() + mood.slice(1)}!</p>
    </div>
  );
};

export default Character;