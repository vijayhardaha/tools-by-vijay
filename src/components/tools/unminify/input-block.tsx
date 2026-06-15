'use client';

import type { JSX, SubmitEvent } from 'react';

import ToolInputHeader from '@/components/tools/tool-input-header';
import Alert from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { RadioBox } from '@/components/ui/radiobox';
import { Textarea } from '@/components/ui/textarea';

/**
 * Interface for the UnminifyInput component props.
 *
 * @type {InputBlockProps}
 * @property {string} input - The minified code input
 * @property {(value: string) => void} setInput - Callback to update the input
 * @property {string} codeType - The selected code type (javascript, json, html, css)
 * @property {(value: string) => void} setCodeType - Callback to update code type
 * @property {() => void} onSubmit - Callback to trigger unminification
 * @property {() => void} onClear - Callback to clear input and output
 * @property {() => void} onReset - Callback to reset all options
 * @property {boolean} isLoading - Whether an unminification request is in progress
 * @property {string} [error] - Current error message, if any
 */
interface InputBlockProps {
  input: string;
  setInput: (value: string) => void;
  codeType: string;
  setCodeType: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onReset: () => void;
  isLoading: boolean;
  error?: string;
}

/**
 * Component for accepting code input and triggering unminification.
 *
 *  @param {InputBlockProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered UnminifyInput component.
 */
export default function InputBlock({
  input,
  setInput,
  codeType,
  setCodeType,
  onSubmit,
  onClear,
  onReset,
  isLoading,
  error,
}: InputBlockProps): JSX.Element {
  /**
   * Handles the form submission event.
   *
   * @param {SubmitEvent} e - The form event.
   */
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <ToolInputHeader
          title="Code Input"
          desc="Paste your code to unminify and select the code type"
          onClear={onClear}
          onReset={onReset}
        />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
          <Textarea
            placeholder="Paste code here..."
            rows={15}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="flex flex-wrap gap-4">
            <RadioBox
              name="codeType"
              id="javascript"
              checked={codeType === 'javascript'}
              onCheckedChange={() => setCodeType('javascript')}
            >
              JavaScript
            </RadioBox>
            <RadioBox
              name="codeType"
              id="json"
              checked={codeType === 'json'}
              onCheckedChange={() => setCodeType('json')}
            >
              JSON
            </RadioBox>
            <RadioBox
              name="codeType"
              id="html"
              checked={codeType === 'html'}
              onCheckedChange={() => setCodeType('html')}
            >
              HTML/XML
            </RadioBox>
            <RadioBox name="codeType" id="css" checked={codeType === 'css'} onCheckedChange={() => setCodeType('css')}>
              CSS
            </RadioBox>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!input || isLoading}>
              {isLoading ? 'Unminifying...' : 'Unminify'}
            </Button>
          </div>

          {error && <Alert variant="danger" title="Error" text={error} />}
        </form>
      </CardContent>
    </Card>
  );
}
