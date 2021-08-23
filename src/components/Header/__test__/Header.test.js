import { render, screen } from '@testing-library/react';
import Header from '../Header';

// ! getBy

// ? getByText
test('render header props', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// ? getByRole single heading
// test('render header props', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole('heading');
//   expect(headingElement).toBeInTheDocument();
// });

// ? getByRole multiple heading
test('render header props', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole('heading', { name: 'My Header' });
  expect(headingElement).toBeInTheDocument();
});

// ? getByTitle
test('render header props', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTitle('Header');
  expect(headingElement).toBeInTheDocument();
});

// ? getByTestId
test('render header props', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTestId('header-1');
  expect(headingElement).toBeInTheDocument();
});

// ! findBy

// ? findByText
test('render header props', async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// ! queryBy

// ? queryByText
test('render header props', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument();
});
