import App from "./App";
import useCounter from "./hooks/useCounter";
import { render, screen, fireEvent } from "@testing-library/react";

jest.mock("./hooks/useCounter");

test("renders learn react link", () => {
  useCounter.mockReturnValue({
    counterValue: 10,
    loading: false,
    updateCounterValue: jest.fn(),
  });

  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("increments counter value on button click", () => {
  const mockUpdateCounterValue = jest.fn();

  useCounter.mockReturnValue({
    counterValue: 10,
    loading: false,
    updateCounterValue: mockUpdateCounterValue,
  });

  const { rerender } = render(<App />);

  const counterElement = screen.getByText(/Counter Value: 10/i);
  expect(counterElement).toBeInTheDocument();

  const incrementButton = screen.getByText(/Increment Counter/i);
  fireEvent.click(incrementButton);

  expect(mockUpdateCounterValue).toHaveBeenCalledWith(11);

  useCounter.mockReturnValue({
    counterValue: 11,
    loading: false,
    updateCounterValue: mockUpdateCounterValue,
  });

  rerender(<App />);

  const counterElementUpdated = screen.getByText(/Counter Value: 11/i);
  expect(counterElementUpdated).toBeInTheDocument();
});
