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
