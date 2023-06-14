import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../core/store/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { queueArrayItem } from "../queueVisualizerModels";
import { getQueueList } from "../service/queueVIsualizerService";

const initialState = {
  queueItems: [],
  isLoading: false,
  error: null,
};

export const fetchQueueList = createAsyncThunk(
  "queueVisualizer/fetchQueueList",
  async () => {
    const res = await getQueueList();

    return res;
  }
);

export const queueVisualizerSlice = createSlice({
  name: "queueVisualizer",
  initialState,
  reducers: {
    queueVisualzierEnqueue: (state, action: PayloadAction<queueArrayItem>) => {
      state.queueItems.push(action.payload);
    },
    queueVisualizerDequeue: (state) => {
      state.queueItems.shift();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQueueList.fulfilled, (state, action) => {
      state.queueItems = action.payload;
    });
  },
});

export const { queueVisualzierEnqueue, queueVisualizerDequeue } =
  queueVisualizerSlice.actions;

export default queueVisualizerSlice.reducer;

export const queueVisualizerSelector = (state: RootState) =>
  state.queueVisualizer.queueItems;
