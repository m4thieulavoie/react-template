import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import App from "./App";

describe("renders the main app", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("finds the main element in the dom", () => {
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
    expect(store.getState().user.id).toBeFalsy();
  });

  it("finds the wave emoji", () => {
    const emoji = screen.getByText(/👋/i);
    expect(emoji).toBeInTheDocument();
  });

  it("clicks the emoji", () => {
    const emoji = screen.getByText(/👋/i);
    emoji.click();
    expect(screen.getByText(/👻/i)).toBeInTheDocument();

    expect(store.getState().user.id).toBe("👻");
  });
});
