import React from 'react';
import useGameLogic from './hooks/useGameLogic';
import Aircraft from './components/Aircraft';
import Cloud from './components/Cloud';
import Bird from './components/Bird';
import Parachute from './components/Parachute';
import Star from './components/Star';
import GameOver from './components/GameOver';
import Ranking from './components/Ranking';

const App: React.FC = () => {
  const {
    aircraftPosition,
    fuel,
    stars,
    time,
    isGameOver,
    isPaused,
    pauseGame,
    clouds,
    birds,
    parachutes,
    starsElements,
  } = useGameLogic();

  return (
    <div style={{ width: '1024px', height: '768px', position: 'relative', margin: 'auto' }}>
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

      <div>
        <p>Fuel: {fuel}</p>
        <p>Stars: {stars}</p>
        <p>Time: {time}</p>
        <button onClick={pauseGame}>{isPaused ? 'Resume' : 'Pause'}</button>
      </div>

      {isGameOver && <GameOver time={time} stars={stars} />}
    </div>
  );
};

export default App;