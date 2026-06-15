'use client';

import type { JSX, SubmitEvent } from 'react';

import ToolInputHeader from '@/components/tools/tool-input-header';
import Alert from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

/**
 * Interface for the CssInlinerInput component props.
 *
 * @type {InputBlockProps}
 * @property {string} htmlInput - The HTML input string
 * @property {(value: string) => void} setHtmlInput - Callback to update the HTML input
 * @property {string} cssInput - The CSS input string
 * @property {(value: string) => void} setCssInput - Callback to update the CSS input
 * @property {() => void} onSubmit - Callback to trigger CSS inlining
 * @property {() => void} onClear - Callback to clear inputs and output
 * @property {boolean} isLoading - Whether a processing request is in progress
 * @property {string} [error] - Current error message, if any
 */
interface InputBlockProps {
  htmlInput: string;
  setHtmlInput: (value: string) => void;
  cssInput: string;
  setCssInput: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  isLoading: boolean;
  error?: string;
}

/**
 * Component for inputting HTML and CSS to inline styles.
 *
 *  @param {InputBlockProps} props - The props for the CssInlinerInput component.
 *
 * @returns {JSX.Element} The CssInlinerInput component.
 */
export default function InputBlock({
  htmlInput,
  setHtmlInput,
  cssInput,
  setCssInput,
  onSubmit,
  onClear,
  isLoading,
  error,
}: InputBlockProps): JSX.Element {
  /**
   * Handles form submission to inline CSS.
   *
   * @param {object} e - Event object
   */
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <ToolInputHeader
          title="Input HTML and CSS"
          desc="Provide your HTML and CSS below to inline the styles into the HTML."
          onClear={onClear}
        />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="html-input">HTML Input</Label>
            <Textarea
              placeholder="Enter HTML here..."
              rows={5}
              value={htmlInput}
              onChange={(e) => setHtmlInput(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="css-input">CSS Input</Label>
            <Textarea
              placeholder="Enter CSS here..."
              rows={5}
              value={cssInput}
              onChange={(e) => setCssInput(e.target.value)}
            />
          </div>
          <div className="mt-2 flex gap-2">
            <Button type="submit" variant="default" disabled={!htmlInput || !cssInput || isLoading}>
              {isLoading ? 'Processing...' : 'Inline CSS'}
            </Button>
          </div>

          {error && <Alert variant="danger" title="Error" text={error} />}
        </form>
      </CardContent>
    </Card>
  );
}
