'use client';

import type { JSX } from 'react';
import { useRef } from 'react';

import { QRCodeCanvas } from 'qrcode.react';
import { PiDownloadSimple } from 'react-icons/pi';

import type { QrErrorLevel } from '@/components/tools/qrcode-generator';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { downloadCanvasPng } from '@/utils/canvas';

/**
 * Scale factor applied when rendering the downloadable PNG.
 *
 * The on-screen canvas renders at the configured size; upscaling with
 * nearest-neighbor keeps the square QR modules crisp in the downloaded image.
 */
const DOWNLOAD_SCALE = 3;

/**
 * Interface for the OutputBlock component props.
 *
 * @type {OutputBlockProps}
 * @property {string} value - The text or URL to encode in the QR code
 * @property {number} size - The QR code size in pixels
 * @property {QrErrorLevel} level - The error correction level
 */
interface OutputBlockProps {
  value: string;
  size: number;
  level: QrErrorLevel;
}

/**
 * OutputBlock is a React functional component that renders the generated QR
 * code client-side onto a canvas using the qrcode.react library, and offers a
 * download button that saves a high-resolution PNG.
 *
 * @param {OutputBlockProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered QR code output component.
 */
export function OutputBlock({ value, size, level }: OutputBlockProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /**
   * Downloads the QR code as a high-resolution PNG image.
   *
   * Upscales the canvas with nearest-neighbor sampling so the square QR
   * modules stay crisp at the larger size.
   */
  const handleDownload = (): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scaled = document.createElement('canvas');
    scaled.width = canvas.width * DOWNLOAD_SCALE;
    scaled.height = canvas.height * DOWNLOAD_SCALE;

    const context = scaled.getContext('2d');
    if (!context) return;

    context.imageSmoothingEnabled = false;
    context.drawImage(canvas, 0, 0, scaled.width, scaled.height);

    downloadCanvasPng(scaled, 'qrcode.png');
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Generated QR Code</CardTitle>
            <CardDescription>Scan or download your QR code</CardDescription>
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
          <div className="bg-card border-border inline-block rounded-xl border p-4">
            <QRCodeCanvas
              ref={canvasRef}
              value={value}
              size={size}
              level={level}
              marginSize={4}
              bgColor="#ffffff"
              fgColor="#000000"
            />
          </div>
        ) : (
          <div className="border-border text-muted-foreground flex min-h-48 items-center justify-center rounded-xl border border-dashed text-center text-sm">
            Enter text or URL above and your QR code will be shown here
          </div>
        )}
      </CardContent>
    </Card>
  );
}
