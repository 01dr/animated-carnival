import { createEffect, createEvent, createStore } from "effector";
import * as React from "react";
import { DictionaryRow, DictionaryWordPosition } from "../../types";

export const DICTIONARY_STORAGE_KEY = "dictionary";

export const $dictionary = createStore<DictionaryRow[]>([]);

export const handleChangeWord = createEvent<{
  id: DictionaryRow["id"];
  position: DictionaryWordPosition;
  value: string;
}>();

export const handleAddNewRow = createEvent<React.SyntheticEvent | void>();
export const handleRemoveRow = createEvent<DictionaryRow["id"]>();
export const handleResetDictionary = createEvent<React.SyntheticEvent | void>();

export const addNewRowFx = createEffect<
  { dictionary: DictionaryRow[] },
  DictionaryRow[]
>();
export const removeRowFx = createEffect<
  { dictionary: DictionaryRow[]; id: DictionaryRow["id"] },
  DictionaryRow[]
>();

export const saveDictionaryFx = createEffect<DictionaryRow[], void>();
export const loadDictionaryFx = createEffect<void, DictionaryRow[]>();

export const $isResetConfirmationOpen = createStore<boolean>(false);
export const openResetConfirmation = createEvent<React.SyntheticEvent | void>();
export const closeResetConfirmation = createEvent<React.SyntheticEvent | void>();
