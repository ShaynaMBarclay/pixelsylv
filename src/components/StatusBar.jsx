import React from 'react';

const StatusBar = ({ hunger, happiness, cleanliness }) => {
    return (
        <div className="staus-bar">
            <p>Hunger: {hunger}</p>
            <p>Happiness: {happiness}</p>
            <p>cleanliness: {cleanliness}</p>
        </div>
    );
};

export default StatusBar;