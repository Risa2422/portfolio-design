/**
 * Resolves an image path for the given language.
 * Japanese assets live at their existing paths (e.g. "/mahjong/final-ui.png").
 * English assets are expected to be placed under a mirrored "/en" prefix
 * (e.g. "/en/mahjong/final-ui.png"). Until an English asset is added, the
 * caller should still pass the same base path here so the mechanism is in
 * place ahead of the actual localized files.
 */
export function localizeImage(path, language) {
  if (!path || language !== "en" || /^https?:\/\//.test(path)) return path;

  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized.startsWith("/en/")) return normalized;

  return `/en${normalized}`;
}
