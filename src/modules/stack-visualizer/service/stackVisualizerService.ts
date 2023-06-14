import { stackArrayItem } from "../stackVisualizerModels";
import { dbStackItemArray } from "./stackVIsualizerDB";

const MOCK_DELAY = 250;

export const getStackList = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(dbStackItemArray), MOCK_DELAY);
  });

export const addStackItem = (stackItem: stackArrayItem) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(stackItem), MOCK_DELAY);
  });

export const removeStackItem = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(true), MOCK_DELAY);
  });
