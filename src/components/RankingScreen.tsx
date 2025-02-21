import React from 'react';
import backgroundImage from '../assets/background.jpg';
import useRankingStore from '../store/useRankingStore';

interface RankingScreenProps {
  onBackToStart: () => void;
}

const RankingScreen: React.FC<RankingScreenProps> = ({ onBackToStart }) => {
  const rankings = useRankingStore((state) => state.rankings);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Ranking</h1>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Rank</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Time</th>
              <th style={styles.th}>Stars</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((player, index) => (
              <tr key={index} style={styles.tr}>
                <td style={styles.td}>{index + 1}</td>
                <td style={styles.td}>{player.name}</td>
                <td style={styles.td}>{player.time}</td>
                <td style={styles.td}>{player.stars}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button style={styles.button} onClick={onBackToStart}>
        Back to Start
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
    textAlign: 'center',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    marginBottom: '20px',
    fontFamily: '"Arial", sans-serif',
  },
  tableContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    padding: '10px',
    borderBottom: '2px solid #fff',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  tr: {
    borderBottom: '1px solid #fff',
  },
  td: {
    padding: '10px',
    fontSize: '16px',
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

export default RankingScreen;
