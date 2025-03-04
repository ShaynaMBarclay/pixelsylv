import React from 'react';
import Candy from '../images/candy.png';
import Hand from '../images/hand.png';
import Water from '../images/water.png';

const ActionButtons = ({ onFeed, onPlay, onClean}) => {
    return (
        <div className="action-buttons">
            <button onClick={onFeed} className="feed-btn">
                <img src={Candy} alt="Feed" className="feed-icon"/>
            </button> 
            <button onClick={onPlay} className="hand-btn">
                <img src={Hand} alt="Pet" className="hand-icon" />
            </button>
            <button onClick={onClean} className="bathe-btn">
                <img src={Water} alt="bathe" className="bathe-icon" />
                </button>   
              </div>
    );
};

export default ActionButtons;