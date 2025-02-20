import React from 'react';
import aircraftImage from '../assets/aircraft.png';

interface AircraftProps {
  position: { x: number; y: number };
}

const Aircraft: React.FC<AircraftProps> = ({ position }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: '50px',
        height: '50px',
        backgroundImage: `url(${aircraftImage})`,
        backgroundSize: 'cover',
      }}
    />
  );
};

export default Aircraft;