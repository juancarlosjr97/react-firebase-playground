import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders counter value", () => {
  render(<App />);
  const linkElement = screen.getByText(/counter value/i);
  expect(linkElement).toBeInTheDocument();
});
