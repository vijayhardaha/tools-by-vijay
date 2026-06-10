import type { JSX } from 'react';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { CompressionInfo } from '@/components/ui/compressionInfo';
import { CopyButton } from '@/components/ui/copyButton';
import { Textarea } from '@/components/ui/textarea';

/**
 * Interface for the JsMinifierOutput component props.
 *
 * @type {OutputBlockProps}
 * @property {string} output - The minified JavaScript output
 * @property {string} input - The original JavaScript input for compression comparison
 */
interface OutputBlockProps {
  output: string;
  input: string;
}

/**
 * Component that displays the minified JavaScript output and provides copy functionality.
 *
 * @param {OutputBlockProps} props - The component props.
 *
 * @returns {JSX.Element} The JsMinifierOutput component.
 */
export default function OutputBlock({ output, input }: OutputBlockProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Minified Output</CardTitle>
            <CardDescription>
              <CompressionInfo input={input} output={output} />
            </CardDescription>
          </div>
          <div className="inline-flex">
            <CopyButton text={output} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea value={output} rows={10} readOnly data-output />
      </CardContent>
    </Card>
  );
}
