import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import GameOver from '../GameOver';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('GameOver Component', () => {
  beforeEach(() => {
    // Mock the axios post request
    mockedAxios.post.mockResolvedValue({ data: {} });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays the correct time and stars', () => {
    const time = 120;
    const stars = 15;
    render(<GameOver time={time} stars={stars} onRestart={() => {}} />);

    expect(screen.getByText(`Time: ${time}`)).toBeInTheDocument();
    expect(screen.getByText(`Stars: ${stars}`)).toBeInTheDocument();
  });

  it('allows the player to submit their name and restart the game', async () => {
    const onRestart = jest.fn();
    render(<GameOver time={120} stars={15} onRestart={onRestart} />);

    const input = screen.getByPlaceholderText('Enter your name');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(input, { target: { value: 'Player 1' } });

    fireEvent.click(submitButton);

    await waitFor(() => expect(mockedAxios.post).toHaveBeenCalledTimes(1));

    expect(onRestart).toHaveBeenCalled();
  });
});