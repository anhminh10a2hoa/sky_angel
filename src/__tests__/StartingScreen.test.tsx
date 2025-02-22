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

    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText('Ranking')).toBeInTheDocument();
  });

  it('calls onStartGame when Start Game is clicked', () => {
    const onStartGame = jest.fn();
    const onShowRanking = jest.fn();
    render(
      <StartingScreen onStartGame={onStartGame} onShowRanking={onShowRanking} />
    );

    fireEvent.click(screen.getByText('Play'));
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
