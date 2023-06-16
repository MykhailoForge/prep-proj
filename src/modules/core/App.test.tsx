import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

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
