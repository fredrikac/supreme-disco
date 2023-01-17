import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  const setup = () => render(<Header />);

  test('Should have title Westcoast Education', () => {
    setup();

    const title = screen.getByText(/westcoast education/i);

    expect(title).toBeInTheDocument();
  });

  //detta funkar inte heller 
  test('Title should be a link', () => {
    setup();

    const titleLink = screen.getByRole('link', { name: 'Westcoast Education' });
    fireEvent.click(titleLink);

    expect(screen.getByRole("heading", { name: "Welcome to Westcoast Education!" })).toBeInTheDocument();
  })

  test.skip('Should have a nav-element', () => {
    setup();

    const navElement = screen.getByRole('navigation');

    expect(navElement).toBeInTheDocument();
  });

});