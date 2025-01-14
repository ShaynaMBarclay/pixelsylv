import React from 'react';

const ActionButtons = ({ onFeed, onPlay, onClean}) => {
    return (
        <div className="action-buttons">
            <button onClick={onFeed}>Feed</button> 
            <button onClick={onPlay}>Play</button>
            <button onClick={onClean}>Clean</button>   
              </div>
    );
};

export default ActionButtons;