import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter/>);
});

test('renders counter message', () => {
  () => beforeEach();
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  () => beforeEach();
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  () => beforeEach();
  const button = screen.getByRole('button', { name: '+' });
  const counter = screen.getByTestId("count");
  userEvent.click(button);
  expect(counter).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  () => beforeEach();
  const button = screen.getByRole('button', { name: '-' });
  const counter = screen.getByTestId("count");
  userEvent.click(button);
  expect(counter).toHaveTextContent("-1");
});
