import { v4 } from "uuid";
import { queueArrayItem } from "../queueVisualizerModels";

export const dbQueueInitialState: queueArrayItem[] = [
  { id: v4(), item: "1" },
  { id: v4(), item: "2" },
  { id: v4(), item: "Queue" },
];
