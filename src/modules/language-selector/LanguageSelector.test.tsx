import { describe, test, vi } from "vitest";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
  getAllByTestId,
  getByRole,
  getByText,
} from "@testing-library/react";
import { store } from "../core/store/store";
import { Provider } from "react-redux";
import { LanguageSelector } from "./LanguageSelector";
import userEvent from "@testing-library/user-event";

beforeEach(() => vi.resetAllMocks());

afterEach(() => cleanup());

const mockChangeFunc = vi.fn().mockImplementation(() => console.log("Hello"));

describe("languageSelector test", () => {
  test("Should render component", () => {
    render(
      <Provider store={store}>
        <LanguageSelector changeHandler={mockChangeFunc} />
      </Provider>
    );
  });

  test("Should handle select", async () => {
    const { container } = render(
      <Provider store={store}>
        <LanguageSelector changeHandler={mockChangeFunc} />
      </Provider>
    );

    await waitFor(() => userEvent.click(getByRole(container, "button")));
    await waitFor(() => userEvent.click(screen.getByText("ua")));
    expect(mockChangeFunc.mock.calls).toHaveLength(1);
  });
});
