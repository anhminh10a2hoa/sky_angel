import React from 'react';
import starImage from '../assets/star.png';

interface StarProps {
  position: { x: number; y: number };
}

const Star: React.FC<StarProps> = ({ position }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: '20px',
        height: '20px',
        backgroundImage: `url(${starImage})`,
        backgroundSize: 'cover',
      }}
    />
  );
};

export default Star;
