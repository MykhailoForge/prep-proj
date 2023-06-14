import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { coreState } from "./types";
import { RootState } from "./store";
import { LANGUAGE_KEYS } from "../../language-selector/service/languageSelectorDB";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  getLangList,
  setLangSelection,
} from "../../language-selector/service/languageSelectorService";

const initialState: coreState = {
  selectedLanguage: LANGUAGE_KEYS.EN,
  languageSelectArr: [],
};

export const fetchLangList = createAsyncThunk(
  "core/fetchLangList",
  async () => {
    const res = await getLangList();

    return res;
  }
);

export const setLocalization = createAsyncThunk(
  "core/setLocalization",
  async (language: string) => {
    const res = await setLangSelection(language);

    return res;
  }
);

export const coreSlice = createSlice({
  name: "core",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.selectedLanguage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLangList.fulfilled, (state, action) => {
        state.languageSelectArr = action.payload;
      })
      .addCase(setLocalization.fulfilled, (state, action) => {
        state.selectedLanguage = action.payload;
      });
  },
});

export default coreSlice.reducer;

export const selectedLanguageSelector = (state: RootState) =>
  state.core.selectedLanguage;

export const languageArrSelector = (state: RootState) =>
  state.core.languageSelectArr;
