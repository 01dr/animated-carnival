import { $isResultOverlayOpen, closeResultOverlay, openResultOverlay } from ".";

$isResultOverlayOpen
  .on(openResultOverlay, () => true)
  .reset(closeResultOverlay);
