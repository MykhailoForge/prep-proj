export interface dataVisualizerStateItem {
  id: string;
  item: string;
}

export interface lanuageItem {
  id: string;
  item: string;
}

export interface coreState {
  languageSelectArr: lanuageItem[];
  selectedLanguage: string;
}
