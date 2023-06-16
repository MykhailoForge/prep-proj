import { dbLanguageSelectArr } from "modules/language-selector/service/languageSelectorDB";

const MOCK_DELAY = 250;

export const getLangList = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(dbLanguageSelectArr), MOCK_DELAY)
  );

export const setLangSelection = (language: string) =>
  new Promise((resolve) => setTimeout(() => resolve(language), MOCK_DELAY));
