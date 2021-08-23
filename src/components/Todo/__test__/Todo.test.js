import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

describe('Todo', () => {
  test('should render multiple items', () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button', { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: 'Go Grocery Shopping' } });
    fireEvent.click(buttonElement);
    const divElements = screen.getByText(/Go Grocery Shopping/i);
    expect(divElements).toBeInTheDocument();
  });
});
