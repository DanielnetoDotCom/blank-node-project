jest.mock('../config/env.js', () => ({
  API_BASE_URL: 'http://localhost:4000',
}));

import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'


describe('App component', () => {
  it('renders the app title', () => {
    render(<App />)
    const title = screen.getByText(/Vite \+ React/i)
    expect(title).toBeInTheDocument()
  })
})
