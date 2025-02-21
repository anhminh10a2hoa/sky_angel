import React, { useState } from 'react';
import backgroundImage from '../assets/background.jpg';
import axios from 'axios';

interface GameOverProps {
  time: number;
  stars: number;
  onRestart: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ time, stars, onRestart }) => {
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('http://xxxxxxxxx/register.php', {
        name,
        time,
        stars,
      });
      onRestart();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Game Over</h1>
      <p>Time: {time}</p>
      <p>Stars: {stars}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        style={styles.input}
      />
      <button onClick={handleSubmit} disabled={!name} style={styles.button}>
        Submit
      </button>
      <button onClick={onRestart} style={styles.button}>
        Restart
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    margin: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    transition: 'background-color 0.3s ease',
  },
};

export default GameOver;