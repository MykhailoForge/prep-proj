import { v4 } from "uuid";
import { stackArrayItem } from "../stackVisualizerModels";

export const dbStackItemArray: stackArrayItem[] = [
  { id: v4(), item: "1" },
  { id: v4(), item: "2" },
  { id: v4(), item: "Stack" },
];
