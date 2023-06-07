import { createSlice } from "@reduxjs/toolkit";
import { coreState } from "./types";
import { RootState } from "./store";
import { LANGUAGE_KEYS } from "../../../constants";
import { v4 } from "uuid";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: coreState = {
  selectedLanguage: LANGUAGE_KEYS.EN,
  languageSelectArr: [
    { id: v4(), item: LANGUAGE_KEYS.EN },
    { id: v4(), item: LANGUAGE_KEYS.UA },
  ],
};

export const coreSlice = createSlice({
  name: "core",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { setLanguage } = coreSlice.actions;

export default coreSlice.reducer;

export const selectedLanguageSelector = (state: RootState) =>
  state.core.selectedLanguage;

export const languageArrSelector = (state: RootState) =>
  state.core.languageSelectArr;
