import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { stackArrayItem } from "../stackVisualizerModels";
import { addStackItem, getStackList, removeStackItem } from "../service/stackVisualizerService";


interface stackSliceInitialState {
  stackItems: stackArrayItem[];
  isLoading: boolean;
}

const initialState: stackSliceInitialState = {
  stackItems: [],
  isLoading: false,
};

export const fetchStackList = createAsyncThunk(
  "stackVisualizer/fetchStackList",
  async () => {
    const res = await getStackList();

    return res;
  }
);

export const pushStackItem = createAsyncThunk(
  "stackVisualizer/pushStackItem",
  async (stackItem: stackArrayItem) => {
    const res = await addStackItem(stackItem);

    return res;
  }
);

export const popStackItem = createAsyncThunk(
  "stackVisualizer/popStackItem",
  async () => {
    const res = await removeStackItem();

    return res;
  }
);

export const stackVisualierSlice = createSlice({
  name: "stackVisualizer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStackList.fulfilled, (state, action) => {
        state.stackItems = action.payload;
      })
      .addCase(pushStackItem.fulfilled, (state, action) => {
        state.stackItems.push(action.payload);
      })
      .addCase(popStackItem.fulfilled, (state) => {
        state.stackItems.pop();
      });
  },
});

export default stackVisualierSlice.reducer;

export const stackVisualizerSelector = (state: RootState) =>
  state.stackVisualizer.stackItems;
