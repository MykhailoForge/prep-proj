import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../core/store/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { queueArrayItem } from "./types";

const initialState: queueArrayItem[] = [
  { id: v4(), item: "1" },
  { id: v4(), item: "2" },
  { id: v4(), item: "3" },
];

export const queueVisualizerSlice = createSlice({
  name: "queueVisualizer",
  initialState,
  reducers: {
    queueVisualzierEnqueue: (state, action: PayloadAction<queueArrayItem>) => {
      state.push(action.payload);
    },
    queueVisualizerDequeue: (state) => {
      state.shift();
    },
  },
});

export const { queueVisualzierEnqueue, queueVisualizerDequeue } =
  queueVisualizerSlice.actions;

export default queueVisualizerSlice.reducer;

export const queueVisualizerSelector = (state: RootState) =>
  state.queueVisualizer;
