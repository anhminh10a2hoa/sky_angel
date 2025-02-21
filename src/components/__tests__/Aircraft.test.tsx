import React from 'react';
import { render, screen } from '@testing-library/react';
import Aircraft from '../Aircraft';

describe('Aircraft Component', () => {
  it('renders at the correct position', () => {
    const position = { x: 100, y: 200 };
    render(<Aircraft position={position} />);

    const aircraft = screen.getByTestId('aircraft');
    expect(aircraft).toHaveStyle('left: 100px');
    expect(aircraft).toHaveStyle('top: 200px');
  });
});