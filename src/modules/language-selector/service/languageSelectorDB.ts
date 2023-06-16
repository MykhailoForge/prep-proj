import { v4 } from "uuid";

export const LANGUAGE_KEYS = {
  EN: "en",
  UA: "ua",
};

export const dbLanguageSelectArr = [
  { id: v4(), item: LANGUAGE_KEYS.EN },
  { id: v4(), item: LANGUAGE_KEYS.UA },
];
