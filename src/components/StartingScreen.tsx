import React from 'react';
import backgroundImage from '../assets/background.jpg';

interface StartingScreenProps {
  onStartGame: () => void;
  onShowRanking: () => void;
}

const StartingScreen: React.FC<StartingScreenProps> = ({ onStartGame, onShowRanking }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sky Angel</h1>
      <button style={styles.button} onClick={onStartGame}>
        Start Game
      </button>
      <button style={styles.button} onClick={onShowRanking}>
        Ranking
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
  },
  title: {
    fontSize: '48px',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    marginBottom: '20px',
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

export default StartingScreen;