/**
 * Public-build stub for the ASCII field's generated sibling scenes.
 *
 * The full (Pro) builder returns one of the generated scene documents (tide /
 * ridge / canopy). On the public site that entry is never mounted, so this seam
 * returns `undefined`; the frame then loads the packaged `sourceUrl` byte-for-
 * byte instead of a derived `srcDoc`.
 */
export function buildAsciiFieldDocument(_variant: string): string | undefined {
  return undefined;
}
