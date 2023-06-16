import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addQueueItem, getQueueList, removeQueueItem } from "../service/queueVisualizerService";
import { queueArrayItem } from "../queueVisualizerModels";
import { RootState } from "../../core/store/store";


interface queueSliceInitialState {
  queueItems: queueArrayItem[];
  isLoading: boolean;
}

const initialState: queueSliceInitialState = {
  queueItems: [],
  isLoading: false,
};

export const fetchQueueList = createAsyncThunk(
  "queueVisualizer/fetchQueueList",
  async () => {
    const res = await getQueueList();

    return res;
  }
);

export const enqueueItem = createAsyncThunk(
  "queueVisualizer/enqueueItem",
  async (queueItem: queueArrayItem) => {
    const res = await addQueueItem(queueItem);

    return res;
  }
);

export const dequeueItem = createAsyncThunk(
  "queueVisualizer/dequeueItem",
  async () => {
    const res = await removeQueueItem();

    return res;
  }
);

export const queueVisualizerSlice = createSlice({
  name: "queueVisualizer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQueueList.fulfilled, (state, action) => {
        state.queueItems = action.payload;
      })
      .addCase(enqueueItem.fulfilled, (state, action) => {
        state.queueItems.push(action.payload);
      })
      .addCase(dequeueItem.fulfilled, (state) => {
        state.queueItems.shift();
      });
  },
});

export default queueVisualizerSlice.reducer;

export const queueVisualizerSelector = (state: RootState) =>
  state.queueVisualizer.queueItems;
