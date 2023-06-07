export interface dataVisualizerStateItem {
  id: string;
  item: string;
}

export interface languageItem {
  id: string;
  item: string;
}

export interface coreState {
  languageSelectArr: languageItem[];
  selectedLanguage: string;
}
