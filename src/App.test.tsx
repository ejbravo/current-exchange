import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Reload button', () => {
  render(<App />);
  const linkElement = screen.getByText(/reload/i);
  expect(linkElement).toBeInTheDocument();
});
