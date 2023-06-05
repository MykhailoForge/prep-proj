import { createSlice } from "@reduxjs/toolkit";
import { coreState, lanuageItem } from "./types";
import { RootState } from "./store";
import { v4 } from "uuid";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: coreState = {
  selectedLanguage: "en",
  languageSelectArr: [
    { id: v4(), item: "en" },
    { id: v4(), item: "ua" },
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
