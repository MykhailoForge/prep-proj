import { expect, test } from "vitest";
import {
  addQueueItem,
  getQueueList,
  removeQueueItem,
} from "modules/queue-visualizer/service/queueVisualizerService";
import { v4 } from "uuid";
import { dbQueueInitialState } from "modules/queue-visualizer/service/queueVisualizerDB";

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
