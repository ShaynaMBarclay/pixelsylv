import React from 'react';

const StatusBar = ({ hunger, happiness, cleanliness }) => {
    const renderBar = (label, value, color) => (
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{label}</div>
          <div
            style={{
              width: '100%',
              height: '20px',
              backgroundColor: '#e0e0e0',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${value}%`,
                height: '100%',
                backgroundColor: color,
                transition: 'width 0.5s ease',
              }}
            />
          </div>
        </div>
      );
    return (
        <div className="staus-bar">
      {renderBar('Hunger', hunger, 'red')}
      {renderBar('Happiness', happiness, 'green')}
      {renderBar('Cleanliness', cleanliness, 'blue')}
        </div>
    );
};

export default StatusBar;