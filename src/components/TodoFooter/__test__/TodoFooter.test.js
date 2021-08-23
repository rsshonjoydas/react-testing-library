import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </BrowserRouter>
);

// ? incomplete multiple tasks
test('render incomplete tasks', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

// ? incomplete single task
test('render incomplete single task', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeInTheDocument();
});

// ? toBeTruthy
test('render incomplete single task', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeTruthy();
});

// ? toBeVisible
test('render incomplete single task', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeVisible();
});

// ? toContainHTML
test('render incomplete single task', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toContainHTML('p');
});

// ? tHaveTextContent
test('render incomplete single task', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toHaveTextContent('1 task left');
});

// ? tHaveTextContent with getByTestId
test('render incomplete single task', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId('para');
  expect(paragraphElement).toHaveTextContent('1 task left');
});
