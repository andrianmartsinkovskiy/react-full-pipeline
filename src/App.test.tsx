import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders add button', () => {
    render(<App />);
    expect(screen.getByText('add')).toBeInTheDocument();
  });
});
