import { createStore, createEvent, createEffect } from "effector";
import * as React from "react";
import { DictionaryRow } from "../../types";

export const $isResultOverlayOpen = createStore<boolean>(false);
export const openResultOverlay = createEvent<React.SyntheticEvent | void>();
export const closeResultOverlay = createEvent<React.SyntheticEvent | void>();

export const mapDictionaryToCSVFx = createEffect<DictionaryRow[], string>();
export const $csv = createStore<string>("");

export const downloadCSV = createEvent<React.SyntheticEvent>();
export const downloadCSVFx = createEffect<string, void>();

export const downloadTXT = createEvent<React.SyntheticEvent>();
export const downloadTXTFx = createEffect<string, void>();