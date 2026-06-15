import type { JSX } from 'react';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { CopyButton } from '@/components/ui/copyButton';
import { Textarea } from '@/components/ui/textarea';

/**
 * Interface for the RandomUsernameGeneratorOutput component props.
 *
 * @type {OutputBlockProps}
 * @property {string[]} output - Array of generated usernames
 */
interface OutputBlockProps {
  output: string[];
}

/**
 * A component for displaying the generated usernames.
 *
 * @param {OutputBlockProps} props - The component props
 *
 * @returns {JSX.Element} The rendered component
 */
export function OutputBlock({ output }: OutputBlockProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Generated Usernames</CardTitle>
            <CardDescription>Copy the generated usernames for use</CardDescription>
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
