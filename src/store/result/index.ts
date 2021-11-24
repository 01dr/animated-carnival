import { createStore, createEvent, createEffect } from "effector";
import * as React from "react";
import { DictionaryRow } from "../../types";

export const $isResultOverlayOpen = createStore<boolean>(false);
export const openResultOverlay = createEvent<React.SyntheticEvent | void>();
export const closeResultOverlay = createEvent<React.SyntheticEvent | void>();

export const mapDictionaryToCSVFx = createEffect<DictionaryRow[], string>();
export const $csv = createStore<string>("");
