import React from 'react';

interface RankingProps {
  ranking: Array<{ id: string; name: string; time: number; stars: number }>;
}

const Ranking: React.FC<RankingProps> = ({ ranking }) => {
  return (
    <div>
      <h2>Ranking</h2>
      <ul>
        {ranking.map((player) => (
          <li key={player.id}>
            {player.name} - Time: {player.time} - Stars: {player.stars}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ranking;
