import { MOCK_DELAY } from "../../../constants";
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
