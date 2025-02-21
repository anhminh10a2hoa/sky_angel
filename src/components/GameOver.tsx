import React, { useState } from 'react';
import useRankingStore from '../store/useRankingStore';
import backgroundImage from '../assets/background.jpg';

interface GameOverProps {
  time: number;
  stars: number;
  onRestart: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ time, stars, onRestart }) => {
  const [name, setName] = useState('');
  const addRanking = useRankingStore((state) => state.addRanking);

  const handleSubmit = async () => {
    if (!name) return;

    try {
      await addRanking(name, time, stars);
      onRestart();
    } catch (error) {
      console.error('Error submitting score:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Game Over</h1>
      <p style={styles.info}>Time: {time}</p>
      <p style={styles.info}>Stars: {stars}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        style={styles.input}
      />
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleSubmit} disabled={!name}>
          Submit
        </button>
        <button style={styles.button} onClick={onRestart}>
          Restart
        </button>
      </div>
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
    textAlign: 'center',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    marginBottom: '20px',
    fontFamily: '"Arial", sans-serif',
  },
  info: {
    fontSize: '24px',
    margin: '10px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    margin: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '200px',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    fontFamily: '"Arial", sans-serif',
  },
};

export default GameOver;
