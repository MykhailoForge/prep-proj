import { expect, test } from "vitest";
import {
  addStackItem,
  getStackList,
  removeStackItem,
} from "modules/stack-visualizer/service/stackVisualizerService";
import { v4 } from "uuid";
import { dbStackItemArray } from "modules/stack-visualizer/service/stackVIsualizerDB";

test("should resolve with proper array", async () => {
  await expect(getStackList()).resolves.toBe(dbStackItemArray);
});

test("should resolve with proper item", async () => {
  const mockStackItem = { id: v4(), item: "item" };
  await expect(addStackItem(mockStackItem)).resolves.toBe(mockStackItem);
});

test("should resolve with true", async () => {
  await expect(removeStackItem()).resolves.toBe(true);
});
