import App from "./App";

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getDoc, onSnapshot } from "firebase/firestore";

jest.mock("firebase/app");

jest.mock("firebase/firestore");

describe("Testing user interactions", () => {
  test("User clicks on counter button and counter increases by one", async () => {
    const mockInitializeApp = jest.fn();
    const mockGetFirestore = jest.fn();
    const mockGetDoc = jest.fn();
    const mockOnSnapshot = jest.fn();

    initializeApp.mockImplementation(mockInitializeApp);

    getFirestore.mockImplementation(mockGetFirestore);

    getDoc.mockImplementation(mockGetDoc);

    onSnapshot.mockImplementation(mockOnSnapshot);

    mockGetDoc.mockResolvedValue({
      exists: jest.fn(() => true),
      data: jest.fn(() => ({ data: 10 })),
    });

    mockOnSnapshot.mockImplementation((docRef, callback) => {
      const mockDoc = {
        data: jest.fn().mockReturnValue({ data: 11 }),
      };

      callback(mockDoc);

      return jest.fn();
    });

    render(<App />);

    await waitFor(() => {
      const counterElement = screen.getByText(/Counter Value: 10/i);
      expect(counterElement).toBeInTheDocument();
    });

    const incrementButton = screen.getByText(/Increment Counter/i);

    fireEvent.click(incrementButton);

    await waitFor(() => {
      const counterElementUpdated = screen.getByText(/Counter Value: 11/i);
      expect(counterElementUpdated).toBeInTheDocument();
    });
  });
});
