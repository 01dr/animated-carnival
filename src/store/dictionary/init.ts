import { forward, sample } from "effector";
import { nanoid } from "nanoid";
import * as ls from "local-storage";
import {
  $dictionary,
  $isResetConfirmationOpen,
  addNewRowFx,
  closeResetConfirmation,
  DICTIONARY_STORAGE_KEY,
  handleAddNewRow,
  handleChangeWord,
  handleRemoveRow,
  handleResetDictionary,
  loadDictionaryFx,
  openResetConfirmation,
  removeRowFx,
  saveDictionaryFx,
} from ".";
import {
  DictionaryPair,
  DictionaryRow,
  DictionaryWordPosition,
} from "../../types";
import { AppGate } from "../app";

sample({
  clock: handleAddNewRow,
  source: $dictionary,
  fn: (dictionary) => ({ dictionary }),
  target: addNewRowFx,
});

addNewRowFx.use(({ dictionary }) => {
  const id = nanoid();
  return [...dictionary, { id, pair: ["", ""] }];
});

$dictionary.on(addNewRowFx.doneData, (_, dictionary) => dictionary);

sample({
  clock: handleRemoveRow,
  source: $dictionary,
  fn: (dictionary, id) => ({ dictionary, id }),
  target: removeRowFx,
});

removeRowFx.use(({ dictionary, id }) => {
  return dictionary.filter((row) => row.id !== id);
});

$dictionary.on(removeRowFx.doneData, (_, dictionary) => dictionary);

$dictionary.on(handleChangeWord, (dictionary, { id, position, value }) => {
  const newDictionary: DictionaryRow[] = dictionary.map((row) => {
    if (row.id !== id) return row;

    const pair: DictionaryPair =
      position === DictionaryWordPosition.right
        ? [row.pair[0], value]
        : [value, row.pair[1]];

    return { id: row.id, pair };
  });

  return newDictionary;
});

forward({
  from: AppGate.open,
  to: loadDictionaryFx,
});

loadDictionaryFx.use(() => {
  const dictionary = ls.get<DictionaryRow[]>(DICTIONARY_STORAGE_KEY);

  if (!dictionary) throw new Error("Cannot load dictionary");
  return dictionary;
});

$dictionary.on(loadDictionaryFx.doneData, (_, dictionary) => dictionary);

sample({
  clock: $dictionary.updates,
  source: $dictionary,
  target: saveDictionaryFx,
});

saveDictionaryFx.use((dictionary) => {
  ls.set<DictionaryRow[]>(DICTIONARY_STORAGE_KEY, dictionary);
});

$isResetConfirmationOpen
  .on(openResetConfirmation, () => true)
  .reset(closeResetConfirmation);

$dictionary.reset(handleResetDictionary);
