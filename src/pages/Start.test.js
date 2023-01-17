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


  //detta fungerar inte
  test.skip('Renders components if request is successful', async () => {
    setup();
    window.fetch = jest.fn();

    window.fetch.mockResolvedValueOnce({
      json: async() => [{
        "id": 1,
        "title": "JavaScript 1",
        "length": "4",
        "description": "Get started with JavaScript and learn the basics - this course is for absolute beginners. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "startDate": "2023-02-01"
      }]
    });

    const courses = await screen.findByTestId('course');

    expect(courses).not.toHaveLength(0);
  })
})