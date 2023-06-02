import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { QueueVisualizer } from "./QueueVisualizer";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";

describe("queueVisualizer test", () => {
  test("Should render component", () => {
    render(
      <Provider store={store}>
        <QueueVisualizer />
      </Provider>,
      { wrapper: BrowserRouter }
    );
  });
});
