import { sample, forward } from "effector";
import * as ls from "local-storage";
import { $theme, loadThemeFx, saveThemeFx, THEME_STORAGE_KEY, toggleTheme } from ".";
import { Theme } from "../../types";
import { AppGate } from "../app";

$theme.on(toggleTheme, theme => theme === Theme.dark ? Theme.light : Theme.dark);

sample({
  clock: $theme.updates,
  source: $theme,
  target: saveThemeFx
});

saveThemeFx.use((theme) => {
  ls.set<Theme>(THEME_STORAGE_KEY, theme);
});

forward({
  from: AppGate.open,
  to: loadThemeFx
})

loadThemeFx.use(() => {
  const theme = ls.get<Theme>(THEME_STORAGE_KEY);

  return theme;
});

$theme.on(loadThemeFx.doneData, (_, theme) => theme);