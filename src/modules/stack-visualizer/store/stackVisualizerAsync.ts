import { createAsyncThunk } from "@reduxjs/toolkit";
import { doGetStackList } from "../../../service/service";

export const fetchStackList = createAsyncThunk(
  "stackVisualizer/fetchStackList",
  async () => {
    const res = await doGetStackList();

    return res;
  }
);
