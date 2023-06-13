import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../core/store/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { queueArrayItem } from "../queueVisualizerModels";
import { fetchQueueList } from "./queueVisualizerAsync";

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
};

export const queueVisualizerSlice = createSlice({
  name: "queueVisualizer",
  initialState,
  reducers: {
    queueVisualzierEnqueue: (state, action: PayloadAction<queueArrayItem>) => {
      state.contents.push(action.payload);
    },
    queueVisualizerDequeue: (state) => {
      state.contents.shift();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQueueList.fulfilled, (state, action) => {
      state.contents = action.payload;
    });
  },
});

export const { queueVisualzierEnqueue, queueVisualizerDequeue } =
  queueVisualizerSlice.actions;

export default queueVisualizerSlice.reducer;

export const queueVisualizerSelector = (state: RootState) =>
  state.queueVisualizer.contents;
