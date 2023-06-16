import { expect, test } from "vitest";
import { dbLanguageSelectArr } from "./languageSelectorDB";
import { getLangList, setLangSelection } from "./languageSelectorService";


test("should resolve with proper laguage list", async () => {
  await expect(getLangList()).resolves.toBe(dbLanguageSelectArr);
});

test("should resolve with proper language item", async () => {
  const mockLangItem = "en";
  await expect(setLangSelection(mockLangItem)).resolves.toBe(mockLangItem);
});
