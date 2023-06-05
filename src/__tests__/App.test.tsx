import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../modules/core/App";
import { Provider } from "react-redux";
import { store } from "../modules/core/store/store";
import { BrowserRouter } from "react-router-dom";

describe("App test", () => {
  test("Should render component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { wrapper: BrowserRouter }
    );
  });
});
