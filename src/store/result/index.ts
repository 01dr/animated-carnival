import { createStore, createEvent } from "effector";
import * as React from "react";

export const $isResultOverlayOpen = createStore<boolean>(false);
export const openResultOverlay = createEvent<React.SyntheticEvent | void>();
export const closeResultOverlay = createEvent<React.SyntheticEvent | void>();