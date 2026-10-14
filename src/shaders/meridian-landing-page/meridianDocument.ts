/**
 * Public-build stub for Meridian's sibling bodies.
 *
 * The full (Pro) builder returns the authored document with the moon / mars /
 * saturn re-dressings applied. On the public site that entry is never mounted,
 * so this seam returns `undefined`; the frame then loads the packaged
 * `sourceUrl` byte-for-byte instead of a derived `srcDoc`.
 */
export function buildMeridianDocument(
  _variant: string,
  _presentation: string,
): string | undefined {
  return undefined;
}
