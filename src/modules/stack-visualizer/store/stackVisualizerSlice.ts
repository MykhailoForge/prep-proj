import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../core/store/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { dataVisualizerStateItem } from "../../core/store/types";
import { v4 } from "uuid";

const initialState: dataVisualizerStateItem[] = [
  { id: v4(), item: "1" },
  { id: v4(), item: "2" },
  { id: v4(), item: "3" },
];

export const stackVisualierSlice = createSlice({
  name: "stackVisualizer",
  initialState,
  reducers: {
    stackVisualizerListPush: (
      state,
      action: PayloadAction<dataVisualizerStateItem>
    ) => {
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

export const stackVisualizerSelektor = (state: RootState) =>
  state.stackVisualizer;
