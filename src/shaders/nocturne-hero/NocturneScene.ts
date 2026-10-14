/**
 * Public-build stub for the Nocturne scene.
 *
 * Exposes the variant catalogue, its titles and a no-op builder so the public
 * entry compiles against the same seam the Pro module provides. On the public
 * site the derived document is never built (the builder returns `undefined`),
 * so the frame loads the packaged `sourceUrl` byte-for-byte.
 */
export const NOCTURNE_VARIANTS = ["midnight"] as const;
export type NocturneVariant = (typeof NOCTURNE_VARIANTS)[number];

export const NOCTURNE_TITLES: Record<NocturneVariant, string> = {
  midnight: "Nocturne — orbital night background",
};

export function buildNocturneDocument(_variant: string): string | undefined {
  return undefined;
}
