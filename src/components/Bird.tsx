import React from 'react';
import birdImage from '../assets/bird.jpg';

interface BirdProps {
  position: { x: number; y: number };
}

const Bird: React.FC<BirdProps> = ({ position }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: '30px',
        height: '30px',
        backgroundImage: `url(${birdImage})`,
        backgroundSize: 'cover',
      }}
    />
  );
};

export default Bird;