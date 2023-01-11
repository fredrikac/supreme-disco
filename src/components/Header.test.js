import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  const setup = () => render(<Header />);

  test('Should have a title', () => {
    setup();

    const title = screen.getByRole('heading');

    expect(title).toBeInTheDocument();
  });

  test('Title should be Westcoast Education', () => {
    setup();

    const titleText = screen.getByText(/westcoast education/i);

    expect(titleText).toBeInTheDocument();
  });

  test('Should have a nav-element', () => {
    setup();

    const navElement = screen.getByRole('navigation');

    expect(navElement).toBeInTheDocument();
  });

});