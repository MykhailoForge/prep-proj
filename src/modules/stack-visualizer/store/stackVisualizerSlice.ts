import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../core/store/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { stackArrayItem } from "../stackVisualizerModels";
import { getStackList } from "../service/stackVisualizerService";

const initialState = {
  stackItems: [],
  isLoading: false,
  error: null,
};

export const fetchStackList = createAsyncThunk(
  "stackVisualizer/fetchStackList",
  async () => {
    const res = await getStackList();

    return res;
  }
);

export const stackVisualierSlice = createSlice({
  name: "stackVisualizer",
  initialState,
  reducers: {
    stackVisualizerListPush: (state, action: PayloadAction<stackArrayItem>) => {
      state.stackItems.push(action.payload);
    },
    stackVisualizerListPop: (state) => {
      state.stackItems.pop();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStackList.fulfilled, (state, action) => {
      state.stackItems = action.payload;
    });
  },
});

export const { stackVisualizerListPop, stackVisualizerListPush } =
  stackVisualierSlice.actions;

export default stackVisualierSlice.reducer;

export const stackVisualizerSelector = (state: RootState) =>
  state.stackVisualizer.stackItems;
