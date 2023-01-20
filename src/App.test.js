import { render, screen } from '@testing-library/react';
import App from "./App";


describe('Routing', () => {
  const setup = () => render(<App />);

  test.each`
    path | componentTestId
    ${'/'} | ${'start-component'}
    ${'/login'} | ${'login-component'}
    ${'/admin'} | ${'admin-component'}
  `('display $componentTestId when path is $path', ({ path, componentTestId }) => {
    
    window.history.pushState({}, '', path);
    setup();
    
    const elem = screen.queryByTestId(componentTestId);
   
    expect(elem).toBeInTheDocument();
  })
});
