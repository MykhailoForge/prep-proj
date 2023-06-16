import { describe, test } from "vitest";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  queryByText,
} from "@testing-library/react";
import { StackVisualizer } from "modules/stack-visualizer/StackVisualizer";
import { Provider } from "react-redux";
import { store } from "modules/core/store/store";
import { BrowserRouter } from "react-router-dom";

const TEST_MSG = "stack elem";
const TEST_MSG_MATCHER = new RegExp(TEST_MSG, "i");

describe("stackVisualizer test", () => {
  test("Should render component", () => {
    render(
      <Provider store={store}>
        <StackVisualizer />
      </Provider>,
      { wrapper: BrowserRouter }
    );
  });

  test("Should have back button", () => {
    render(
      <Provider store={store}>
        <StackVisualizer />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByTestId("data-list-back-button")).toBeInTheDocument();
  });

  test("Should process input and add button", async () => {
    render(
      <Provider store={store}>
        <StackVisualizer />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const textInput = screen.getByTestId("data-list-text-input");
    fireEvent.change(textInput, { target: { value: TEST_MSG } });

    fireEvent.click(screen.getByTestId("data-list-add-button"));

    await waitFor(() =>
      expect(screen.getByText(TEST_MSG_MATCHER)).toBeInTheDocument()
    );
  });

  test("Should process pop button", async () => {
    render(
      <Provider store={store}>
        <StackVisualizer />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const removeButton = screen.getByTestId("data-list-remove-button");
    fireEvent.click(removeButton);

    const queueListContainer = screen.getByTestId("stack-list-items-container");

    await waitFor(() => {
      expect(
        queryByText(queueListContainer, TEST_MSG_MATCHER)
      ).not.toBeInTheDocument();
    });
  });
});
