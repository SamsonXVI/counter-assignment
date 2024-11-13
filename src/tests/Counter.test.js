import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
});

test('displays counter message', () => {
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should display initial count with value 0', () => {
  const countDisplay = screen.getByTestId("count");
  expect(countDisplay).toHaveTextContent("0");
});

test('clicking the + button increments the count', () => {
  const incrementButton = screen.getByText("+");
  fireEvent.click(incrementButton);
  const countDisplay = screen.getByTestId("count");
  expect(countDisplay).toHaveTextContent("1");
});

test('clicking the - button decrements the count', () => {
  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);
  const countDisplay = screen.getByTestId("count");
  expect(countDisplay).toHaveTextContent("-1");
});
