import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { QueueVisualizer } from "../modules/queue-visualizer/QueueVisualizer";
import { Provider } from "react-redux";
import { store } from "../modules/core/store/store";
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
