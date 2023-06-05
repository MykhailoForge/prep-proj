import { describe, test } from "vitest";
<<<<<<< HEAD
import { render } from "@testing-library/react";
=======
import { render, screen } from "@testing-library/react";
>>>>>>> 8b0d35da601019d633818a4845ae33801b793580
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
