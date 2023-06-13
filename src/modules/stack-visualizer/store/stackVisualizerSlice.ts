import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../core/store/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { stackArrayItem } from "../stackVisualizerModels";
import { fetchStackList } from "./stackVisualizerAsync";

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
};

export const stackVisualierSlice = createSlice({
  name: "stackVisualizer",
  initialState,
  reducers: {
    stackVisualizerListPush: (state, action: PayloadAction<stackArrayItem>) => {
      state.contents.push(action.payload);
    },
    stackVisualizerListPop: (state) => {
      state.contents.pop();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStackList.fulfilled, (state, action) => {
      state.contents = action.payload;
    });
  },
});

export const { stackVisualizerListPop, stackVisualizerListPush } =
  stackVisualierSlice.actions;

export default stackVisualierSlice.reducer;

export const stackVisualizerSelector = (state: RootState) =>
  state.stackVisualizer.contents;
