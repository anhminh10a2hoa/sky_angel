import React from 'react';
import useRankingStore from '../store/useRankingStore';
import './RankingScreen.css'; // Add a CSS file for styling
import GameButton from './GameButton';

interface RankingScreenProps {
  onBackToStart: () => void;
}
const RankingScreen: React.FC<RankingScreenProps> = ({ onBackToStart }) => {
  const rankings = useRankingStore((state) => state.rankings);

  return (
    <div className="leaderboard">
      <h1>
        <svg className="ico-cup">
          <use xlinkHref="#cup"></use>
        </svg>
        Most Active Players
      </h1>
      <ol>
        {rankings.length === 0 ? (
          <li>No rankings available</li>
        ) : (
          rankings.map((entry, index) => (
            <li key={index}>
              <mark>{entry.name}</mark>
              <small>
                {entry.stars} stars - {entry.time}s
              </small>
            </li>
          ))
        )}
      </ol>
      <GameButton color="blue" onClick={onBackToStart}>
        Back To Start
      </GameButton>
    </div>
  );
};

export default RankingScreen;
