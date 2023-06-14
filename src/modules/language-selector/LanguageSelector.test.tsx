import { describe, test, vi } from "vitest";
import {
  render,
  screen,
  cleanup,
  waitFor,
  getByRole,
} from "@testing-library/react";
import { store } from "../core/store/store";
import { Provider } from "react-redux";
import { LanguageSelector } from "./LanguageSelector";
import userEvent from "@testing-library/user-event";

beforeEach(() => vi.resetAllMocks());

afterEach(() => cleanup());

const mockChangeFunc = vi.fn();
const mockLanngArr = [
  { id: "asdasdasd", item: "en" },
  { id: "asxxdasdasd", item: "ua" },
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
