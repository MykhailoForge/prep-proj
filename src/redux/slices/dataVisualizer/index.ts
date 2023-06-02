import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { dataVisulizerState, queueItem, stackItem } from "./types";
import { v4 } from "uuid";

const initialState: dataVisulizerState = {
  queueVisualizerQueue: [
    { id: v4(), item: "1" },
    { id: v4(), item: "2" },
    { id: v4(), item: "3" },
  ],
  stackVisualizerList: [
    { id: v4(), item: "1" },
    { id: v4(), item: "2" },
    { id: v4(), item: "3" },
  ],
};

export const dataVisulizerSlice = createSlice({
  name: "dataVisulizer",
  initialState,
  reducers: {
    stackVisualizerListPush: (state, action: PayloadAction<stackItem>) => {
      state.stackVisualizerList.push(action.payload);
    },
    stackVisualizerListPop: (state) => {
      state.stackVisualizerList.pop();
    },
    queueVisualzierEnqueue: (state, action: PayloadAction<queueItem>) => {
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
