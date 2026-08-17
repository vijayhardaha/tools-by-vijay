import type { JSX } from 'react';

import Image from 'next/image';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

/**
 * Interface for the OutputBlock component props.
 *
 * @type {OutputBlockProps}
 * @property {string} output - The URL of the generated QR code image
 */
interface OutputBlockProps {
  output: string;
}

/**
 * OutputBlock is a React functional component that displays the
 * generated QR code along with a download link.
 *
 *  @param {OutputBlockProps} props - The props for the component.
 * @param {string} props.output - The URL of the generated QR code image.
 *
 * @returns {JSX.Element} The rendered QR code output component.
 */
export function OutputBlock({ output }: OutputBlockProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated QR Code</CardTitle>
        <CardDescription>Scan or download your QR code</CardDescription>
      </CardHeader>
      <CardContent>
        {output ? (
          <div className="flex flex-col gap-4 md:gap-6">
            <Image src={output} alt="Generated QR Code" className="w-auto max-w-xs" width={250} height={250} />
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
