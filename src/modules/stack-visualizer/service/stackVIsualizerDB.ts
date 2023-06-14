import { stackArrayItem } from "../stackVisualizerModels";
import { v4 } from "uuid";

export const dbStackInitialState: stackArrayItem[] = [
  { id: v4(), item: "1" },
  { id: v4(), item: "2" },
  { id: v4(), item: "Стек" },
];
