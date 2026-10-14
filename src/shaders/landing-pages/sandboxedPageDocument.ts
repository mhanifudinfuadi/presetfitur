/**
 * Public-build stub for the derived-document sandbox wrapper.
 *
 * The Pro build wraps a derived document so it runs in an isolated origin. On
 * the public site the derived builders return `undefined`, so this seam is a
 * pass-through: it hands the source document back unchanged.
 */
export function buildSandboxedPageDocument(
  source: string,
  _options: { presentation: string; canvasSelector?: string },
): string {
  return source;
}
