import { renderHook, act } from '@testing-library/react';
import useGameLogic from '../hooks/useGameLogic';

describe('useGameLogic Hook', () => {
  it('initializes with correct default values', () => {
    const { result } = renderHook(() => useGameLogic());

    expect(result.current.aircraftPosition).toEqual({ x: 512, y: 384 });
    expect(result.current.fuel).toBe(10);
    expect(result.current.stars).toBe(0);
    expect(result.current.time).toBe(0);
    expect(result.current.isGameOver).toBe(false);
    expect(result.current.isPaused).toBe(false);
    expect(result.current.isGameStarted).toBe(false);
  });

  it('starts the game when startGame is called', () => {
    const { result } = renderHook(() => useGameLogic());

    act(() => {
      result.current.startGame();
    });

    expect(result.current.isGameStarted).toBe(true);
  });
});
