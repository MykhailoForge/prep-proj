import { queueArrayItem } from "../queueVisualizerModels";
import { dbQueueInitialState } from "./queueVisualizerDB";

const MOCK_DELAY = 250;

export const getQueueList = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(dbQueueInitialState), MOCK_DELAY);
  });

export const addQueueItem = (queueItem: queueArrayItem) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(queueItem), MOCK_DELAY);
  });

export const removeQueueItem = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(true), MOCK_DELAY);
  });
