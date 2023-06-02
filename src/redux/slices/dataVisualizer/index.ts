import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { dataVisulizerState } from "./types";

const initialState: dataVisulizerState = {
  queueVisualizerQueue: [1, 2, 3],
  stackVisualizerList: [1, 2, 3],
};

export const dataVisulizerSlice = createSlice({
  name: "dataVisulizer",
  initialState,
  reducers: {
    stackVisualizerListPush: (
      state,
      action: PayloadAction<number | string>
    ) => {
      state.stackVisualizerList.push(action.payload);
    },
    stackVisualizerListPop: (state) => {
      state.stackVisualizerList.pop();
    },
    queueVisualzierEnqueue: (state, action: PayloadAction<number | string>) => {
      state.queueVisualizerQueue.push(action.payload);
    },
    queueVisualizerDequeue: (state) => {
      state.queueVisualizerQueue.shift();
    },
  },
});

export const {
  stackVisualizerListPush,
  stackVisualizerListPop,
  queueVisualzierEnqueue,
  queueVisualizerDequeue,
} = dataVisulizerSlice.actions;

export default dataVisulizerSlice.reducer;

export const dataVisualizerQueueSelektor = (state: RootState) =>
  state.dataVisualizer.queueVisualizerQueue;

export const dataVisualizerStackSelektor = (state: RootState) =>
  state.dataVisualizer.stackVisualizerList;
