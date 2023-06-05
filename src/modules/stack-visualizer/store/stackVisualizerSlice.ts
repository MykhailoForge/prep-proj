import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../core/store/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { stackArrayItem } from "../stackVisualizerModels";

const initialState: stackArrayItem[] = [
  { id: v4(), item: "1" },
  { id: v4(), item: "2" },
  { id: v4(), item: "3" },
];

export const stackVisualierSlice = createSlice({
  name: "stackVisualizer",
  initialState,
  reducers: {
    stackVisualizerListPush: (state, action: PayloadAction<stackArrayItem>) => {
      state.push(action.payload);
    },
    stackVisualizerListPop: (state) => {
      state.pop();
    },
  },
});

export const { stackVisualizerListPop, stackVisualizerListPush } =
  stackVisualierSlice.actions;

export default stackVisualierSlice.reducer;

export const stackVisualizerSelector = (state: RootState) =>
  state.stackVisualizer;
