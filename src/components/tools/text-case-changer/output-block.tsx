import type { JSX } from 'react';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { CopyButton } from '@/components/ui/copyButton';
import { Textarea } from '@/components/ui/textarea';

/**
 * Interface for the TextCaseChangerOutput component props.
 *
 * @type {OutputBlockProps}
 * @property {string} output - The converted text output
 */
interface OutputBlockProps {
  output: string;
}

/**
 * Component for displaying the transformed text and providing a copy button.
 *
 *  @param {OutputBlockProps} props - The props for the TextCaseChangerOutput component.
 *
 * @returns {JSX.Element} The TextCaseChangerOutput component.
 */
export default function OutputBlock({ output }: OutputBlockProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Converted Text</CardTitle>
            <CardDescription>Copy the converted text for use</CardDescription>
          </div>
          <div className="inline-flex">
            <CopyButton text={output} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea value={output} rows={5} readOnly data-output />
      </CardContent>
    </Card>
  );
}
