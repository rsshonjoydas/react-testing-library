import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('render header props', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// test('render header props', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole('heading');
//   expect(headingElement).toBeInTheDocument();
// });

test('render header props', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole('heading', { name: 'My Header' });
  expect(headingElement).toBeInTheDocument();
});

test('render header props', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTitle('Header');
  expect(headingElement).toBeInTheDocument();
});
