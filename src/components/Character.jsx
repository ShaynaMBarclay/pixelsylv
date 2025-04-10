import React from 'react';
import happyGif from '../images/happy.gif';
import tiredGif from '../images/sleepy.gif';
import dirtyGif from '../images/stinky.gif';
import hungryGif from '../images/hungry.gif';
import playingGif from '../images/playful.gif';
import eatingGif from '../images/feeding.gif';
import bathingGif from '../images/bathing.gif';
import angryGif from '../images/angy.gif';
import elatedGif from '../images/elated.gif';


const Character = ({ mood, tempAction }) => {
  
  const moodImages = {
    happy: happyGif,
    tired: tiredGif,
    dirty: dirtyGif,
    hungry: hungryGif,
    angry: angryGif,
    elated: elatedGif,
  };

  const actionImages = {
    playful: playingGif,
    eating: eatingGif,
    bathing: bathingGif,
  };

  const imageSrc =  tempAction ? actionImages[tempAction] : moodImages[mood] || happyGif;

  return (
    <div className="character">
      <p className="action-title">Oliver is {tempAction ? tempAction : mood.charAt(0).toUpperCase() + mood.slice(1)}!</p>
      <img
        src={imageSrc}
        alt={mood}
        className="character-image"
      />
      
    </div>
  );
};

export default Character;