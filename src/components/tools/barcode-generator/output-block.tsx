'use client';

import type { JSX } from 'react';
import { useEffect, useRef } from 'react';

import JsBarcode from 'jsbarcode';
import Barcode from 'react-barcode';
import { PiDownloadSimple } from 'react-icons/pi';

import type { BarcodeOptions } from '@/components/tools/barcode-generator';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { downloadCanvasPng } from '@/utils/canvas';

/**
 * Scale factor applied to the on-screen preview canvas for sharper rendering.
 *
 * The canvas is re-rendered at this scale and CSS-scaled back to its visual
 * size, doubling the pixel density without changing the layout.
 */
const PREVIEW_SCALE = 2;

/**
 * Scale factor applied when rendering the downloadable PNG.
 *
 * The on-screen canvas renders at CSS-pixel size; re-rendering at a higher
 * scale keeps bars and text crisp in the downloaded image.
 */
const DOWNLOAD_SCALE = 3;

/**
 * Props for the BarcodeGeneratorOutput component.
 *
 * @type {OutputBlockProps}
 * @property {string} value - The data to encode in the barcode
 * @property {BarcodeOptions} options - The barcode generation options
 */
interface OutputBlockProps {
  value: string;
  options: BarcodeOptions;
}

/**
 * BarcodeGeneratorOutput is a React functional component that renders the
 * generated barcode onto a canvas element using the react-barcode library,
 * and offers a download button that saves a high-resolution PNG (rendered
 * at 3x scale). Text uses the tool defaults (font size 16, margin 8, white
 * background, black bars).
 *
 * @param {OutputBlockProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered barcode output component.
 */
export function OutputBlock({ value, options }: OutputBlockProps): JSX.Element {
  const barcodeRef = useRef<Barcode>(null);

  /**
   * Re-renders the preview canvas at PREVIEW_SCALE for a sharper display.
   *
   * Runs after react-barcode draws the 1x canvas, redraws at 2x, then scales
   * the element back down so the visual size is unchanged.
   */
  useEffect(() => {
    const canvas = barcodeRef.current?.renderElementRef.current as HTMLCanvasElement | null;
    if (!canvas || !value.trim()) return;

    try {
      JsBarcode(canvas, value, {
        format: options.format,
        width: options.width * PREVIEW_SCALE,
        height: options.height * PREVIEW_SCALE,
        displayValue: options.showText,
        textAlign: options.textAlign,
        fontSize: 16 * PREVIEW_SCALE,
        textMargin: 8 * PREVIEW_SCALE,
        background: '#ffffff',
        lineColor: '#000000',
        margin: 10 * PREVIEW_SCALE,
      });

      canvas.style.width = `${canvas.width / PREVIEW_SCALE}px`;
      canvas.style.height = `${canvas.height / PREVIEW_SCALE}px`;
    } catch {
      // Data invalid for the selected format — react-barcode already logs it.
    }
  }, [value, options]);

  /**
   * Downloads the barcode as a high-resolution PNG image.
   *
   * Re-renders the barcode at DOWNLOAD_SCALE on a fresh offscreen canvas so
   * the saved image is sharper than the on-screen preview.
   */
  const handleDownload = (): void => {
    const canvas = document.createElement('canvas');

    JsBarcode(canvas, value, {
      format: options.format,
      width: options.width * DOWNLOAD_SCALE,
      height: options.height * DOWNLOAD_SCALE,
      displayValue: options.showText,
      textAlign: options.textAlign,
      fontSize: 16 * DOWNLOAD_SCALE,
      textMargin: 8 * DOWNLOAD_SCALE,
      background: '#ffffff',
      lineColor: '#000000',
      margin: 10 * DOWNLOAD_SCALE,
    });

    downloadCanvasPng(canvas, 'barcode.png');
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Generated Barcode</CardTitle>
            <CardDescription>Scan or download your barcode</CardDescription>
          </div>
          {value.trim() && (
            <div className="inline-flex">
              <Button variant="secondary" onClick={handleDownload}>
                <PiDownloadSimple className="size-4" />
                Download PNG
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {value.trim() ? (
          <div className="overflow-x-auto">
            <div className="bg-card border-border inline-block rounded-xl border p-4">
              <Barcode
                ref={barcodeRef}
                value={value}
                renderer="canvas"
                format={options.format}
                width={options.width}
                height={options.height}
                displayValue={options.showText}
                textAlign={options.textAlign}
                fontSize={16}
                textMargin={8}
                background="#ffffff"
                lineColor="#000000"
              />
            </div>
          </div>
        ) : (
          <div className="border-border text-muted-foreground flex min-h-48 items-center justify-center rounded-xl border border-dashed text-center text-sm">
            Enter text above and your barcode will be shown here
          </div>
        )}
      </CardContent>
    </Card>
  );
}
