import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StartingScreen from '../components/StartingScreen';

describe('StartingScreen Component', () => {
  it('renders the Start Game and Ranking buttons', () => {
    const onStartGame = jest.fn();
    const onShowRanking = jest.fn();
    render(
      <StartingScreen onStartGame={onStartGame} onShowRanking={onShowRanking} />
    );

    expect(screen.getByText('Start Game')).toBeInTheDocument();
    expect(screen.getByText('Ranking')).toBeInTheDocument();
  });

  it('calls onStartGame when Start Game is clicked', () => {
    const onStartGame = jest.fn();
    const onShowRanking = jest.fn();
    render(
      <StartingScreen onStartGame={onStartGame} onShowRanking={onShowRanking} />
    );

    fireEvent.click(screen.getByText('Start Game'));
    expect(onStartGame).toHaveBeenCalled();
  });

  it('calls onShowRanking when Ranking is clicked', () => {
    const onStartGame = jest.fn();
    const onShowRanking = jest.fn();
    render(
      <StartingScreen onStartGame={onStartGame} onShowRanking={onShowRanking} />
    );

    fireEvent.click(screen.getByText('Ranking'));
    expect(onShowRanking).toHaveBeenCalled();
  });
});
