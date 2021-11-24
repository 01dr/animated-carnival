import { sample } from "effector";
import {
  $csv,
  $isResultOverlayOpen,
  closeResultOverlay,
  downloadCSV,
  downloadCSVFx,
  downloadTXT,
  downloadTXTFx,
  mapDictionaryToCSVFx,
  openResultOverlay,
} from ".";
import { $dictionary } from "../dictionary";

$isResultOverlayOpen
  .on(openResultOverlay, () => true)
  .reset(closeResultOverlay);

sample({
  clock: openResultOverlay,
  source: $dictionary,
  target: mapDictionaryToCSVFx,
});

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

sample({
  clock: downloadCSV,
  source: $csv,
  target: downloadCSVFx,
});

downloadCSVFx.use((csv) => {
  const content = `data:text/csv;charset=utf-8,${csv}`;
  const encodedUri = encodeURI(content);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "stasi_learns_deutsch.csv");
  document.body.appendChild(link);

  link.click();
});

sample({
  clock: downloadTXT,
  source: $csv,
  target: downloadTXTFx,
});

downloadTXTFx.use((csv) => {
  const content = `data:text/plain;charset=utf-8,${csv}`;
  const encodedUri = encodeURI(content);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "stasi_learns_deutsch.txt");
  document.body.appendChild(link);

  link.click();
});
