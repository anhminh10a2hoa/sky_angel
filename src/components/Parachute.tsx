import React from 'react';
import parachuteImage from '../assets/parachute.png';

interface ParachuteProps {
  position: { x: number; y: number };
}

const Parachute: React.FC<ParachuteProps> = ({ position }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: '30px',
        height: '30px',
        backgroundImage: `url(${parachuteImage})`,
        backgroundSize: 'cover',
      }}
    />
  );
};

export default Parachute;
