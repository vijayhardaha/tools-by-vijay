import type { JSX } from 'react';

import type { TransformStats } from '@vijayhardaha/html-cleaner';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { CompressionInfo } from '@/components/ui/compression-info';
import { CopyButton } from '@/components/ui/copyButton';
import { Textarea } from '@/components/ui/textarea';

import { StatsBlock } from './stats-block';

/**
 * Interface for the HtmlCleanerOutput component props.
 *
 * @type {OutputBlockProps}
 * @property {string} output - The cleaned HTML output
 * @property {string} input - The original HTML input for size comparison
 * @property {TransformStats | null} stats - Counters describing what changed
 */
interface OutputBlockProps {
  output: string;
  input: string;
  stats: TransformStats | null;
}

/**
 * Displays the cleaned HTML output with a copy button, a before/after size
 * comparison, and a summary of what the cleaner changed.
 *
 * Rendered even when the result is an empty string (a legitimate outcome for
 * the `text` and `aggressive` presets), which is why the parent tracks result
 * presence separately from the output value.
 *
 * @param {OutputBlockProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered component.
 */
export function OutputBlock({ output, input, stats }: OutputBlockProps): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Cleaned Output</CardTitle>
            <CardDescription>
              <CompressionInfo input={input} output={output} />
            </CardDescription>
          </div>
          <div className="inline-flex">
            <CopyButton text={output} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea value={output} rows={10} readOnly data-output />
        {stats && <StatsBlock stats={stats} />}
      </CardContent>
    </Card>
  );
}
