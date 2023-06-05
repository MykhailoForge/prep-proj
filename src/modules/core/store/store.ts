import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import stackVisualizerReducer from "../../stack-visualizer/store/stackVisualizerSlice";
import queueVisualizerReducer from "../../queue-visualizer/store/queueVisualizerSlice";

export const store = configureStore({
  reducer: {
    stackVisualizer: stackVisualizerReducer,
    queueVisualizer: queueVisualizerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
