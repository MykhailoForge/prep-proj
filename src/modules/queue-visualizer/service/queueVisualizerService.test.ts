import { v4 } from "uuid";
import {
  addQueueItem,
  getQueueList,
  removeQueueItem,
} from "./queueVisualizerService";
import { dbQueueInitialState } from "./queueVisualizerDB";
import { expect, test } from "vitest";

test("should resolve with proper array", async () => {
  await expect(getQueueList()).resolves.toBe(dbQueueInitialState);
});

test("should resolve with proper item", async () => {
  const mockQueueItem = { id: v4(), item: "item" };
  await expect(addQueueItem(mockQueueItem)).resolves.toBe(mockQueueItem);
});

test("should resolve with true", async () => {
  await expect(removeQueueItem()).resolves.toBe(true);
});
