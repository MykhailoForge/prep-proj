import { v4 } from "uuid";
import { queueArrayItem } from "../modules/queue-visualizer/queueVisualizerModels";
import { stackArrayItem } from "../modules/stack-visualizer/stackVisualizerModels";

export const dbQueueInitialState: queueArrayItem[] = [
  { id: v4(), item: "1" },
  { id: v4(), item: "2" },
  { id: v4(), item: "Черга" },
];

export const dbStackInitialState: stackArrayItem[] = [
  { id: v4(), item: "1" },
  { id: v4(), item: "2" },
  { id: v4(), item: "Стек" },
];
