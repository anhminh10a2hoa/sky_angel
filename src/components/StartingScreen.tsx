import React from 'react';
import backgroundImage from '../assets/background.jpg';
import GameButton from './GameButton';

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
        <GameButton color="red" onClick={onStartGame}>
          Play
        </GameButton>
        <GameButton color="orange" onClick={onShowRanking}>
          Ranking
        </GameButton>
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
    fontSize: '64px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    marginBottom: '40px',
    fontFamily: '"Arial", sans-serif',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
  },
};

export default StartingScreen;
