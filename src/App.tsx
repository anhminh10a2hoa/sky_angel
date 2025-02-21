import React, { useState } from 'react';
import useGameLogic from './hooks/useGameLogic';
import Aircraft from './components/Aircraft';
import Cloud from './components/Cloud';
import Bird from './components/Bird';
import Parachute from './components/Parachute';
import Star from './components/Star';
import GameOver from './components/GameOver';
import StartingScreen from './components/StartingScreen';
import skyImage from './assets/sky.jpg';
import RankingScreen from './components/RankingScreen';

const App: React.FC = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [showRanking, setShowRanking] = useState(false);

  const {
    aircraftPosition,
    fuel,
    stars,
    time,
    isGameOver,
    isPaused,
    pauseGame,
    startGame,
    clouds,
    birds,
    parachutes,
    starsElements,
    resetGame,
  } = useGameLogic();

  const handleStartGame = () => {
    setIsGameStarted(true);
    startGame();
  };

  const handleShowRanking = () => {
    setShowRanking(true);
  };

  const handleRestartGame = () => {
    setIsGameStarted(false);
    setShowRanking(false);
    resetGame();
  };

  return (
    <div
      style={{
        width: '1024px',
        height: '768px',
        position: 'relative',
        margin: 'auto',
        backgroundImage: `url(${skyImage})`,
      }}
    >
      {!isGameStarted && !showRanking && (
        <StartingScreen
          onStartGame={handleStartGame}
          onShowRanking={handleShowRanking}
        />
      )}

      {showRanking && <RankingScreen onBackToStart={handleRestartGame} />}

      {isGameStarted && !isGameOver && (
        <>
          <Aircraft position={aircraftPosition} />

          {/* Render Clouds */}
          {clouds.map((cloud, index) => (
            <Cloud key={`cloud-${index}`} position={cloud} />
          ))}

          {/* Render Birds */}
          {birds.map((bird, index) => (
            <Bird key={`bird-${index}`} position={bird} />
          ))}

          {/* Render Parachutes */}
          {parachutes.map((parachute, index) => (
            <Parachute key={`parachute-${index}`} position={parachute} />
          ))}

          {/* Render Stars */}
          {starsElements.map((star, index) => (
            <Star key={`star-${index}`} position={star} />
          ))}

          <div style={styles.gameInfoContainer}>
            <div style={styles.infoItem}>
              <span style={styles.label}>Fuel:</span>
              <span style={styles.value}>{fuel}</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.label}>Stars:</span>
              <span style={styles.value}>{stars}</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.label}>Time:</span>
              <span style={styles.value}>{time}</span>
            </div>
            <button style={styles.pauseButton} onClick={pauseGame}>
              {isPaused ? 'Resume' : 'Pause'}
            </button>
          </div>
        </>
      )}

      {isGameOver && (
        <GameOver time={time} stars={stars} onRestart={handleRestartGame} />
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  rankingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  gameInfoContainer: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '20px',
    borderRadius: '10px',
    color: '#fff',
    fontFamily: '"Arial", sans-serif',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  value: {
    fontSize: '18px',
  },
  pauseButton: {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
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

export default App;
