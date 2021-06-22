import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const mainElement = screen.getByRole("main");
  expect(mainElement).toBeInTheDocument();

  const emoji = screen.getByText(/👋/i);
  expect(emoji).toBeInTheDocument();
});
