import React from 'react';

const ActionButtons = ({ onFeed, onPlay, onClean}) => {
    return (
        <div className="action-buttons">
            <button onClick={onFeed}>Feed</button> 
            <button onClick={onPlay}>Give Pets</button>
            <button onClick={onClean}>Bathe</button>   
              </div>
    );
};

export default ActionButtons;