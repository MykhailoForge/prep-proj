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
      state.stackVisualizerList = [
        action.payload,
        ...state.stackVisualizerList,
      ];
    },
    stackVisualizerListPop: (state) => {
      state.stackVisualizerList = [...state.stackVisualizerList.slice(1)];
    },
    queueVisualzierEnqueue: (state, action: PayloadAction<number | string>) => {
      state.queueVisualizerQueue = [
        action.payload,
        ...state.queueVisualizerQueue,
      ];
    },
    queueVisualizerDequeue: (state) => {
      const frontItem = state.queueVisualizerQueue.reverse().shift();
      state.queueVisualizerQueue = state.queueVisualizerQueue
        .filter((elem) => elem !== frontItem)
        .reverse();
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
