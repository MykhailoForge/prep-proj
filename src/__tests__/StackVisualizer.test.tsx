import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { StackVisualizer } from "../modules/stack-visualizer/StackVisualizer";
import { Provider } from "react-redux";
import { store } from "../modules/core/store/store";
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
});
