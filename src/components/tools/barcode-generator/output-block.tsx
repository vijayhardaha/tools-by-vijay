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
export default function OutputBlock({ output }: OutputBlockProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Barcode</CardTitle>
        <CardDescription>Scan or download your barcode</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <Image src={output} alt="Generated Barcode" className="w-auto max-w-xs" width={250} height={100} />
        </div>
      </CardContent>
    </Card>
  );
}
