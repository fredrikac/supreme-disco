import { render, screen } from '@testing-library/react';
import Start from './Start';

//start skall testa att rubriker finns och att tillhörande komponenter renderas
describe('Start page layout', () => {
  const setup = () => render(<Start />);

  test('Start page should have title "Welcome to Westcoast Education"', () => {
    setup();
    const pageTitle = screen.getByRole('heading', { name: 'Welcome to Westcoast Education!' });
    
    expect(pageTitle).toBeInTheDocument();
  });

  test('There should be a subheading with text "Courses"', () => {
    setup();
    const subHeading = screen.getByText('Courses');
    expect(subHeading).toBeInTheDocument();
  });

  test('There should be a subheading with text "Our teachers"', () => {
    setup();
    const subHeading = screen.getByText('Our teachers');
    expect(subHeading).toBeInTheDocument();
  });



  test('Start page should render Course component', () => {
    setup();

    
  })
})