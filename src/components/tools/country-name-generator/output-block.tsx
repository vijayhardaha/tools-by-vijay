import type { JSX } from 'react';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { CopyButton } from '@/components/ui/copyButton';
import { Textarea } from '@/components/ui/textarea';

/**
 * Interface for the CountryNameGeneratorOutput component props.
 *
 * @type {OutputBlockProps}
 * @property {string[]} output - Array of generated country names
 */
interface OutputBlockProps {
  output: string[];
}

/**
 * A component for displaying the generated country names.
 *
 * @param {OutputBlockProps} props - The props for the CountryNameGeneratorOutput component.
 *
 * @returns {JSX.Element} The CountryNameGeneratorOutput component.
 */
export function OutputBlock({ output }: OutputBlockProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Generated Country Names</CardTitle>
            <CardDescription>Copy the generated names for use</CardDescription>
          </div>
          <div className="inline-flex">
            <CopyButton text={output.join('\n')} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea rows={8} value={output.join('\n')} readOnly data-output />
      </CardContent>
    </Card>
  );
}
