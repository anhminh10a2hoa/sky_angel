import React, { useState } from 'react';
import axios from 'axios';

interface GameOverProps {
  time: number;
  stars: number;
}

const GameOver: React.FC<GameOverProps> = ({ time, stars }) => {
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://xxxxxxxxx/register.php', {
        name,
        time,
        stars,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Game Over</h1>
      <p>Time: {time}</p>
      <p>Stars: {stars}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit} disabled={!name}>
        Continue
      </button>
    </div>
  );
};

export default GameOver;