/**
 * Trigger a browser download of a canvas element as a PNG file.
 *
 * Shared by the QR code and barcode generators, which each prepare the
 * canvas at their own resolution before handing it over.
 *
 * @param {HTMLCanvasElement} canvas - The canvas to export.
 * @param {string} filename - The suggested download filename (e.g. 'qrcode.png').
 *
 * @returns {void}
 *
 * @example
 * downloadCanvasPng(scaledCanvas, 'qrcode.png');
 */
export function downloadCanvasPng(canvas: HTMLCanvasElement, filename: string): void {
  const url = canvas.toDataURL('image/png');
  const anchor = document.createElement('a');

  anchor.href = url;
  anchor.download = filename;
  anchor.click();
}
