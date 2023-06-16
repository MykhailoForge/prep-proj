import { expect, test } from "vitest";
import { v4 } from "uuid";
import { dbStackItemArray } from "./stackVIsualizerDB";
import { addStackItem, getStackList, removeStackItem } from "./stackVisualizerService";


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
