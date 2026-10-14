/**
 * Public-build stub for the packaged Tidecrest document.
 *
 * The full (Pro) builder returns the authored document with its three sibling
 * re-dressings applied. On the public site that entry is never mounted, so this
 * seam returns `undefined`; the frame then loads the packaged `sourceUrl`
 * byte-for-byte instead of a derived `srcDoc`.
 */
export function buildTidecrestDocument(_variant: string): string | undefined {
  return undefined;
}
