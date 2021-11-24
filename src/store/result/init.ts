import { sample } from "effector";
import { $csv, $isResultOverlayOpen, closeResultOverlay, mapDictionaryToCSVFx, openResultOverlay } from ".";
import { $dictionary } from "../dictionary";

$isResultOverlayOpen
  .on(openResultOverlay, () => true)
  .reset(closeResultOverlay);

sample({
  clock: openResultOverlay,
  source: $dictionary,
  target: mapDictionaryToCSVFx
})

mapDictionaryToCSVFx.use((dictionary) => {
  const string = dictionary.map((d) => {
    if (d.pair[0] && d.pair[1]) {
      return `"${d.pair[0]}";"${d.pair[1]}"\n`;
    }

    return null;
  });

  return string.join("");
});

$csv.on(mapDictionaryToCSVFx.doneData, (_, csv) => csv);