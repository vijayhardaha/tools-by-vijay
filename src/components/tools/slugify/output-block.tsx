import type { JSX } from 'react';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { CopyButton } from '@/components/ui/copyButton';
import { Input } from '@/components/ui/input';

/**
 * Interface for the SlugifyOutput component props.
 *
 * @type {OutputBlockProps}
 * @property {string} output - The generated slug output
 */
interface OutputBlockProps {
  output: string;
}

/**
 * Component that displays the slugified output.
 *
 *  @param {OutputBlockProps} props - The component props.
 *
 * @returns {JSX.Element} The rendered slugified output component.
 */
export function OutputBlock({ output }: OutputBlockProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Output</CardTitle>
        <CardDescription>Cleaned and formatted slug</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Input type="text" value={output} readOnly data-output />
          <CopyButton text={output} />
        </div>
      </CardContent>
    </Card>
  );
}
