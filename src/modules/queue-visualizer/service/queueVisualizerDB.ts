import { queueArrayItem } from "../queueVisualizerModels";
import { v4 } from "uuid";

export const dbQueueInitialState: queueArrayItem[] = [
  { id: v4(), item: "1" },
  { id: v4(), item: "2" },
  { id: v4(), item: "Черга" },
];
