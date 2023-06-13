import { createAsyncThunk } from "@reduxjs/toolkit";
import { doGetQueueList } from "../../../service/service";

export const fetchQueueList = createAsyncThunk(
  "queueVisualizer/fetchQueueList",
  async () => {
    const res = await doGetQueueList();

    return res;
  }
);
