import { LANGUAGE_KEYS } from "../../../constants";
import { v4 } from "uuid";

export const dbLanguageSelectArr = [
  { id: v4(), item: LANGUAGE_KEYS.EN },
  { id: v4(), item: LANGUAGE_KEYS.UA },
];
