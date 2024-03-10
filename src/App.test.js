import App from "./App";
import useCounter from "./hooks/useCounter";
import { render, screen } from "@testing-library/react";

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
  useCounter.mockReturnValue({
    counterValue: 10,
    loading: false,
    updateCounterValue: jest.fn(),
  });

  render(<App />);

  const counterElement = screen.getByText(/Counter Value: 10/i);
  expect(counterElement).toBeInTheDocument();
});
