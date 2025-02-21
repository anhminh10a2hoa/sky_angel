import React from 'react';
import backgroundImage from '../assets/background.jpg';

interface StartingScreenProps {
  onStartGame: () => void;
  onShowRanking: () => void;
}

const StartingScreen: React.FC<StartingScreenProps> = ({
  onStartGame,
  onShowRanking,
}) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sky Angel</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={onStartGame}>
          Start Game
        </button>
        <button style={styles.button} onClick={onShowRanking}>
          Ranking
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
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
};

export default StartingScreen;
