import { describe, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { StackVisualizer } from "./StackVisualizer";
import { Provider } from "react-redux";
import { store } from "../core/store/store";
import { BrowserRouter } from "react-router-dom";

describe("stackVisualizer test", () => {
  test("Should render component", () => {
    render(
      <Provider store={store}>
        <StackVisualizer />
      </Provider>,
      { wrapper: BrowserRouter }
    );
  });

  test("Should process input and add button", () => {
    render(
      <Provider store={store}>
        <StackVisualizer />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const textInput = screen.getByTestId("text-input");
    fireEvent.change(textInput, { target: { value: "stack elem" } });

    const addButton = screen.getByTestId("add-button");
    fireEvent.click(addButton);
  });

  test("Should process pop button", () => {
    render(
      <Provider store={store}>
        <StackVisualizer />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const removeButton = screen.getByTestId("remove-button");
    fireEvent.click(removeButton);
  });
});
