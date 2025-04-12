import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PingPong from '../components/PingPong';

// Mock the fetch response globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: 'pong' }),
  })
);

describe('PingPong component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('renders the Ping button and initial state', () => {
    render(<PingPong baseUrl="http://localhost:5000" />);
    expect(screen.getByText(/Ping Pong Test/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ping/i })).toBeInTheDocument();
  });

  it('fetches and displays "pong" response and count', async () => {
    render(<PingPong baseUrl="http://localhost:5000" />);
    fireEvent.click(screen.getByRole('button', { name: /ping/i }));

    await waitFor(() => {
      expect(screen.getByText('pong')).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();
    });
  });

  it('increments pong count on multiple clicks', async () => {
    render(<PingPong baseUrl="http://localhost:5000" />);
    const button = screen.getByRole('button', { name: /ping/i });

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('3')).toBeInTheDocument();
    });
  });
});
