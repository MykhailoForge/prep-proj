import { MOCK_DELAY } from "../../../constants/apiConstants";
import { stackArrayItem } from "../stackVisualizerModels";
import { dbStackItemArray } from "./stackVIsualizerDB";

export const getStackList = () =>
  new Promise((resolve, reject) => {
    if (!dbStackItemArray) {
      return setTimeout(
        () => reject(new Error("StackList not found")),
        MOCK_DELAY
      );
    }

    setTimeout(() => resolve(dbStackItemArray), MOCK_DELAY);
  });

export const addStackItem = (stackItem: stackArrayItem) =>
  new Promise((resolve, reject) => {
    if (!stackItem) {
      return setTimeout(
        () => reject(new Error("No StackItem provided")),
        MOCK_DELAY
      );
    }

    setTimeout(() => resolve(stackItem), MOCK_DELAY);
  });

export const removeStackItem = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(true), MOCK_DELAY);
  });
