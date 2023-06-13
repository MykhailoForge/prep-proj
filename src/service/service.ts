import { dbQueueInitialState } from "./db";
import { dbStackInitialState } from "./db";

export const getQueueList = () =>
  new Promise((resolve, reject) => {
    if (!dbQueueInitialState) {
      return setTimeout(() => reject(new Error("QueueList not found")), 250);
    }

    setTimeout(() => resolve(dbQueueInitialState), 250);
  });

export const getStackList = () =>
  new Promise((resolve, reject) => {
    if (!dbStackInitialState) {
      return setTimeout(() => reject(new Error("StackList not found")), 250);
    }

    setTimeout(() => resolve(dbStackInitialState), 250);
  });

export const doGetQueueList = async () => {
  try {
    const result = await getQueueList();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const doGetStackList = async () => {
  try {
    const result = await getStackList();
    return result;
  } catch (error) {
    console.log(error);
  }
};
