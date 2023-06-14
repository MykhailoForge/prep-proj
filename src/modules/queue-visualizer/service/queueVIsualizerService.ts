import { MOCK_DELAY } from "../../../constants/apiConstants";
import { queueArrayItem } from "../queueVisualizerModels";
import { dbQueueInitialState } from "./queueVisualizerDB";

export const getQueueList = () =>
  new Promise((resolve, reject) => {
    if (!dbQueueInitialState) {
      return setTimeout(
        () => reject(new Error("QueueList not found")),
        MOCK_DELAY
      );
    }

    setTimeout(() => resolve(dbQueueInitialState), MOCK_DELAY);
  });

export const addQueueItem = (queueItem: queueArrayItem) =>
  new Promise((resolve, reject) => {
    if (!queueItem) {
      return setTimeout(
        () => reject(new Error("No QueueItem provided")),
        MOCK_DELAY
      );
    }

    setTimeout(() => resolve(queueItem), MOCK_DELAY);
  });

export const removeQueueItem = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(true), MOCK_DELAY);
  });
