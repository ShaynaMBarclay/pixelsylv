import React, { useState, useEffect, useRef } from 'react';
import noteIcon from '../images/note.png';


const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize the audio only once
    audioRef.current = new Audio('/background.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    // Cleanup when component unmounts
    return () => {
      audioRef.current.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <button
    onClick={toggleMusic}
    className={`note-button ${isPlaying ? 'playing' : ''}`}
    aria-label={isPlaying ? 'Pause music' : 'Play music'}
  >
    <img src={noteIcon} alt="music note" className="note-icon" />
  </button>
  );
};

export default MusicToggle;
