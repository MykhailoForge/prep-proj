import { expect, test } from "vitest";
import {
  addQueueItem,
  getQueueList,
  removeQueueItem,
} from "./queueVisualizerService";
import { v4 } from "uuid";
import { dbQueueInitialState } from "./queueVisualizerDB";

test("should resolve with proper array", async () => {
  const getQueueListCallResult = await getQueueList();
  expect(getQueueListCallResult).toBe(dbQueueInitialState);
});

test("should resolve with proper item", async () => {
  const mockQueueItem = { id: v4(), item: "item" };
  const addQueueItemCallResult = await addQueueItem(mockQueueItem);
  expect(addQueueItemCallResult).toBe(mockQueueItem);
});

test("should resolve with true", async () => {
  const removeQueueItemCallResult = await removeQueueItem();
  expect(removeQueueItemCallResult).toBe(true);
});
