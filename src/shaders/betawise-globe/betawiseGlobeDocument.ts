/**
 * Public-build stub for the Betawise globe's derived worlds.
 *
 * The full (Pro) builder returns the authored document with the moon / mars /
 * saturn / sun re-dressings applied. On the public site that entry is never
 * mounted, so this seam returns `undefined`; the frame then loads the packaged
 * `sourceUrl` byte-for-byte instead of a derived `srcDoc`.
 */
export function buildBetawiseGlobeDocument(_variant: string): string | undefined {
  return undefined;
}
