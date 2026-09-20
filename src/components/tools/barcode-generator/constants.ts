/**
 * Shared constants and types for the Barcode Generator tool.
 *
 * Kept out of `index.tsx` so sibling modules (input-block, output-block) can
 * consume them without importing the component module back, which created a
 * circular dependency.
 */

/**
 * Supported barcode symbologies (subset of the formats provided by JsBarcode).
 */
export const BARCODE_FORMATS = [
  'CODE128',
  'CODE128A',
  'CODE128B',
  'CODE128C',
  'CODE39',
  'EAN13',
  'EAN8',
  'UPC',
  'UPCE',
  'ITF14',
  'ITF',
  'MSI',
  'pharmacode',
  'codabar',
] as const;

/**
 * Barcode symbology identifier.
 *
 * @type {BarcodeFormat}
 */
export type BarcodeFormat = (typeof BARCODE_FORMATS)[number];

/**
 * Horizontal alignment of the human-readable text under the barcode.
 *
 * @type {BarcodeTextAlign}
 */
export type BarcodeTextAlign = 'left' | 'center' | 'right';

/**
 * User-configurable barcode generation options.
 *
 * @type {BarcodeOptions}
 * @property {BarcodeFormat} format - The barcode symbology to use
 * @property {number} width - Width of a single bar in pixels
 * @property {number} height - Height of the barcode in pixels
 * @property {boolean} showText - Whether to display the human-readable text
 * @property {BarcodeTextAlign} textAlign - Alignment of the displayed text
 */
export interface BarcodeOptions {
  format: BarcodeFormat;
  width: number;
  height: number;
  showText: boolean;
  textAlign: BarcodeTextAlign;
}
