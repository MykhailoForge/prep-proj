import { describe, test, vi } from "vitest";
import {
  render,
  screen,
  cleanup,
  waitFor,
  getByRole,
} from "@testing-library/react";

import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { v4 } from "uuid";
import { store } from "../core/store/store";
import { LanguageSelector } from "./LanguageSelector";

beforeEach(() => vi.resetAllMocks());

afterEach(() => cleanup());

const mockChangeFunc = vi.fn();
const mockLanngArr = [
  { id: v4(), item: "en" },
  { id: v4(), item: "ua" },
];

describe("languageSelector test", () => {
  test("Should render component", () => {
    render(
      <Provider store={store}>
        <LanguageSelector
          changeHandler={mockChangeFunc}
          languageArr={mockLanngArr}
        />
      </Provider>
    );
  });

  test("Should handle select", async () => {
    const { container } = render(
      <Provider store={store}>
        <LanguageSelector
          changeHandler={mockChangeFunc}
          languageArr={mockLanngArr}
        />
      </Provider>
    );

    await waitFor(() => userEvent.click(getByRole(container, "button")));
    await waitFor(() =>
      userEvent.click(screen.getByTestId("language-selector-option-ua"))
    );
    expect(mockChangeFunc.mock.calls).toHaveLength(1);
  });
});
