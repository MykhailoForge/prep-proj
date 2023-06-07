import { describe, test, vi } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { store } from "../core/store/store";
import { Provider } from "react-redux";
import { LanguageSelector } from "./LanguageSelector";

beforeEach(() => vi.resetAllMocks());

afterEach(() => cleanup());

const mockChangeFunc = vi.fn();

describe("languageSelector test", () => {
  test("Should render component", () => {
    render(
      <Provider store={store}>
        <LanguageSelector changeHandler={mockChangeFunc} />
      </Provider>
    );
  });

  test("Should handle select", () => {
    render(
      <Provider store={store}>
        <LanguageSelector changeHandler={mockChangeFunc} />
      </Provider>
    );

    const selectBody = screen.getByTestId("select");
    fireEvent.change(selectBody, { target: { value: "en" } });
  });
});
