import React from 'react';

const Character = ({ mood }) => {
    const moodEmojis = {
    happy: '😊',
    hungry: '😋',
    tired: '😴',
    dirty: '😷',
    };

    return (
        <div className="character">
            <span style={{ fontSize: '5rem' }}>{moodEmojis[mood]}</span>
        </div>
    );
};

export default Character;