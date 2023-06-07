import { describe, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { QueueVisualizer } from "./QueueVisualizer";
import { Provider } from "react-redux";
import { store } from "../core/store/store";
import { BrowserRouter } from "react-router-dom";

describe("queueVisualizer test", () => {
  test("Should render component ", () => {
    render(
      <Provider store={store}>
        <QueueVisualizer />
      </Provider>,
      { wrapper: BrowserRouter }
    );
  });

  test("Should have back button", () => {
    render(
      <Provider store={store}>
        <QueueVisualizer />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByTestId("back-button")).toBeInTheDocument();
  });

  test("Should process input and add button", () => {
    render(
      <Provider store={store}>
        <QueueVisualizer />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const textInput = screen.getByTestId("text-input");
    fireEvent.change(textInput, { target: { value: "queue elem" } });

    const addButton = screen.getByTestId("add-button");
    fireEvent.click(addButton);
  });

  test("Should process pop button", () => {
    render(
      <Provider store={store}>
        <QueueVisualizer />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const removeButton = screen.getByTestId("remove-button");
    fireEvent.click(removeButton);
  });
});
