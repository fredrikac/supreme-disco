import { render, screen } from '@testing-library/react';
import AddCourse from './AddCourse';

describe('Add course component', () => {
  const setup = () => render(<AddCourse />);

  test('There should be a heading', () => {
    setup();
    const heading = screen.getByRole('heading', {name: /Add course/i});
    expect(heading).toBeInTheDocument();
  });
});