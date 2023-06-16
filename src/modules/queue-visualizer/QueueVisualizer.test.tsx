import { describe, test, expect } from "vitest";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  queryByText,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../core/store/store";
import { QueueVisualizer } from "./QueueVisualizer";

const TEST_MSG = "queue elem";
const QUEUE_FIRST_ELEM_MATCHER = new RegExp("1");
const TEST_MSG_MATCHER = new RegExp(TEST_MSG, "i");

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

    expect(screen.getByTestId("data-list-back-button")).toBeInTheDocument();
  });

  test("Should process input and add button", async () => {
    render(
      <Provider store={store}>
        <QueueVisualizer />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const textInput = screen.getByTestId("data-list-text-input");
    fireEvent.change(textInput, { target: { value: TEST_MSG } });

    const addButton = screen.getByTestId("data-list-add-button");
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getByText(TEST_MSG_MATCHER)).toBeInTheDocument();
    });
  });

  test("Should process pop button", async () => {
    render(
      <Provider store={store}>
        <QueueVisualizer />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const removeButton = screen.getByTestId("data-list-remove-button");
    fireEvent.click(removeButton);

    const queueListContainer = screen.getByTestId("queue-list-items-container");

    await waitFor(() => {
      expect(
        queryByText(queueListContainer, QUEUE_FIRST_ELEM_MATCHER)
      ).not.toBeInTheDocument();
    });
  });
});
