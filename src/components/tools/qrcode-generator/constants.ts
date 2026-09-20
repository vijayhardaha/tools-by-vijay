/**
 * Shared constants and types for the QRCode Generator tool.
 *
 * Kept out of `index.tsx` so sibling modules (input-block, output-block) can
 * consume them without importing the component module back, which created a
 * circular dependency.
 */

/**
 * Supported QR code error correction levels.
 */
export const ERROR_LEVELS = ['L', 'M', 'Q', 'H'] as const;

/**
 * QR code error correction level.
 *
 * @type {QrErrorLevel}
 */
export type QrErrorLevel = (typeof ERROR_LEVELS)[number];
