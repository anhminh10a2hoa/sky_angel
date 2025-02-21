import React, { useState } from 'react';
import useGameLogic from './hooks/useGameLogic';
import Aircraft from './components/Aircraft';
import Cloud from './components/Cloud';
import Bird from './components/Bird';
import Parachute from './components/Parachute';
import Star from './components/Star';
import GameOver from './components/GameOver';
import StartingScreen from './components/StartingScreen';
import Ranking from './components/Ranking';

const App: React.FC = () => {
  const {
    aircraftPosition,
    fuel,
    stars,
    time,
    isGameOver,
    isPaused,
    isGameStarted,
    pauseGame,
    startGame,
    clouds,
    birds,
    parachutes,
    starsElements,
  } = useGameLogic();

  const [showRanking, setShowRanking] = useState(false);

  const handleShowRanking = () => {
    setShowRanking(true);
  };

  const handleBackToStart = () => {
    setShowRanking(false);
  };

  return (
    <div style={{ width: '1024px', height: '768px', position: 'relative', margin: 'auto' }}>
      {!isGameStarted && !showRanking && (
        <StartingScreen onStartGame={startGame} onShowRanking={handleShowRanking} />
      )}

      {showRanking && (
        <div style={styles.rankingContainer}>
          <Ranking ranking={[]}/>
          <button style={styles.button} onClick={handleBackToStart}>
            Back to Start
          </button>
        </div>
      )}

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

          <div style={styles.gameInfo}>
            <p>Fuel: {fuel}</p>
            <p>Stars: {stars}</p>
            <p>Time: {time}</p>
            <button onClick={pauseGame}>{isPaused ? 'Resume' : 'Pause'}</button>
          </div>
        </>
      )}

      {isGameOver && <GameOver time={time} stars={stars} onRestart={handleBackToStart} />}
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
    backgroundImage: 'url(/src/assets/images/background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  gameInfo: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    color: '#fff',
    fontSize: '18px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
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