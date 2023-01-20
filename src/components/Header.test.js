import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component',  () => {
  const setup = () => render(<Header />);

  test('Should have a nav-element', () => {
    setup();

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
});