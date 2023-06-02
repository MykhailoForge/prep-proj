export interface queueItem {
  id: string;
  item: string;
}

export interface stackItem {
  id: string;
  item: string;
}

export interface dataVisulizerState {
  queueVisualizerQueue: queueItem[];
  stackVisualizerList: stackItem[];
}
