import React from 'react';
import './GameButton.css';

interface GameButtonProps {
  color?: 'blue' | 'orange' | 'red' | 'green';
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const GameButton: React.FC<GameButtonProps> = ({
  color = 'blue',
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <button
      className={`game-button game-button ${color}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default GameButton;
