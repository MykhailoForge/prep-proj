import { getLangList, setLangSelection } from "./languageSelectorService";
import { expect, test } from "vitest";
import { dbLanguageSelectArr } from "./languageSelectorDB";

test("should resolve with proper laguage list", async () => {
  const getLangListCallResult = await getLangList();
  expect(getLangListCallResult).toBe(dbLanguageSelectArr);
});

test("should resolve with proper language item", async () => {
  const mockLangItem = "en";
  const setLangSelectionCallResult = await setLangSelection(mockLangItem);
  expect(setLangSelectionCallResult).toBe(mockLangItem);
});
