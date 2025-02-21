import React from 'react';
import cloudImage from '../assets/cloud.png';

interface CloudProps {
  position: { x: number; y: number };
}

const Cloud: React.FC<CloudProps> = ({ position }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: '100px',
        height: '50px',
        backgroundImage: `url(${cloudImage})`,
        backgroundSize: 'cover',
      }}
    />
  );
};

export default Cloud;
