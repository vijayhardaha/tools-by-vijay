import type { JSX } from 'react';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { CopyButton } from '@/components/ui/copyButton';
import { Textarea } from '@/components/ui/textarea';

/**
 * Interface for the DuplicateLineRemovalOutput component props.
 *
 * @type {OutputBlockProps}
 * @property {string} output - The processed text output
 */
interface OutputBlockProps {
  output: string;
}

/**
 * Output component for the Duplicate Line Removal tool.
 * Displays the processed text in a readonly textarea with a copy button.
 *
 *  @param {OutputBlockProps} props - Component props
 *
 * @returns {JSX.Element} The rendered output display
 */
export function OutputBlock({ output }: OutputBlockProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Output</CardTitle>
            <CardDescription>The text after removing duplicate lines and applying sorting options.</CardDescription>
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
