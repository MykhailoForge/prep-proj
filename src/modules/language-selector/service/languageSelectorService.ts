import { dbLanguageSelectArr } from "./languageSelectorDB";
import { MOCK_DELAY } from "../../../constants";

export const getLangList = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(dbLanguageSelectArr), MOCK_DELAY)
  );

export const setLangSelection = (language: string) =>
  new Promise((resolve) => setTimeout(() => resolve(language), MOCK_DELAY));
