// dictionary
export enum DictionaryWordPosition {
  left = 0,
  right = 1
}
export type DictionaryPair = [string, string];
export type DictionaryRow = { id: string; pair: DictionaryPair };

// theme
export enum Theme {
  dark = "dark",
  light = "light",
}
