import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login page component', () => {
  const setup = () => render(<Login />);

  test('Page should have Login heading', () => {
    setup();
    const heading = screen.getByRole('heading', {name: /Login/i});
    expect(heading).toBeInTheDocument();
  });

  test('there should be an input for username/email', () => {
    setup();
    const usernameInput = screen.getByLabelText('Username/Email');
    expect(usernameInput).toBeInTheDocument();
  });

  test('there should be a password input of type password', () => {
    setup();
    const password = screen.getByLabelText('Password');
    expect(password).toBeInTheDocument();
    expect(password.type).toBe('password');
  });

  test('there should be a login button', () => {
    setup();
    const loginBtn = screen.getByRole('button', { name: /Login/i});
    expect(loginBtn).toBeInTheDocument();
  });
});
