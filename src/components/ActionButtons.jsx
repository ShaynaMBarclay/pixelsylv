import React from 'react';
import Candy from '../images/food.png';
import Hand from '../images/playing.png';
import Water from '../images/soap.png';

const ActionButtons = ({ onFeed, onPlay, onClean}) => {
    return (
        <div className="action-buttons">
            <div className="tooltip-container">
            <button onClick={onFeed} className="feed-btn">
                <img src={Candy} alt="Feed" className="feed-icon"/>
            </button> 
            <span className="tooltip-text">Feed your pet!</span>
            </div>

            <div className="tooltip-container">
            <button onClick={onPlay} className="hand-btn">
                <img src={Hand} alt="Pet" className="hand-icon" />
            </button>
            <span className="tooltip-text">Play with your pet!</span>
            </div>

            <div className="tooltip-container">
            <button onClick={onClean} className="bathe-btn">
                <img src={Water} alt="bathe" className="bathe-icon" />
                </button>  
                <span className="tooltip-text">Bathe your pet!</span>
              </div> 
              </div>
    );
};

export default ActionButtons;