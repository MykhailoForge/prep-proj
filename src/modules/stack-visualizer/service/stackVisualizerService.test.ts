import { expect, test } from "vitest";
import {
  addStackItem,
  getStackList,
  removeStackItem,
} from "./stackVisualizerService";
import { v4 } from "uuid";
import { dbStackItemArray } from "./stackVIsualizerDB";

test("should resolve with proper array", async () => {
  const getStackListCallResult = await getStackList();
  expect(getStackListCallResult).toBe(dbStackItemArray);
});

test("should resolve with proper item", async () => {
  const mockStackItem = { id: v4(), item: "item" };
  const addStackItemCallResult = await addStackItem(mockStackItem);
  expect(addStackItemCallResult).toBe(mockStackItem);
});

test("should resolve with true", async () => {
  const removeStackItemCallResult = await removeStackItem();
  expect(removeStackItemCallResult).toBe(true);
});
