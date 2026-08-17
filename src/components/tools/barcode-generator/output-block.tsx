import type { JSX } from 'react';

import Image from 'next/image';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

/**
 * Props for the BarcodeGeneratorOutput component.
 *
 * @type {OutputBlockProps}
 * @property {string} output - The URL of the generated barcode image
 */
interface OutputBlockProps {
  output: string;
}

/**
 * BarcodeGeneratorOutput is a React functional component that displays the
 * generated barcode along with a download link.
 *
 *  @param {OutputBlockProps} props - The props for the component.
 * @param {string} props.output - The URL of the generated barcode image.
 *
 * @returns {JSX.Element} The rendered barcode output component.
 */
export function OutputBlock({ output }: OutputBlockProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Barcode</CardTitle>
        <CardDescription>Scan or download your barcode</CardDescription>
      </CardHeader>
      <CardContent>
        {output ? (
          <div className="flex flex-col gap-4 md:gap-6">
            <Image src={output} alt="Generated Barcode" className="w-auto max-w-xs" width={250} height={100} />
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
