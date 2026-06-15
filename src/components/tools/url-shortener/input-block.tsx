'use client';

import type { JSX, SubmitEvent } from 'react';

import { ToolInputHeader } from '@/components/tool/tool-input-header';
import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

/**
 * Interface for the UrlShortenerInput component props.
 *
 * @type {InputBlockProps}
 * @property {string} input - The current URL input
 * @property {(value: string) => void} setInput - Callback to update the input
 * @property {() => void} onSubmit - Callback to trigger URL shortening
 * @property {() => void} onClear - Callback to clear input and output
 * @property {boolean} [isLoading] - Whether a shortening request is in progress
 * @property {string} [error] - Current error message, if any
 */
interface InputBlockProps {
  input: string;
  setInput: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  isLoading?: boolean;
  error?: string;
}

/**
 * Component for the URL Shortener input form
 *
 * This component provides a text area for users to input URLs, along with buttons
 * to submit the URLs for shortening or clear the input. It also displays any error
 * messages and handles the loading state.
 *
 * @param {InputBlockProps} props - Props for the component
 *
 * @returns {JSX.Element} The rendered component
 */
export function InputBlock({
  input = '',
  setInput,
  onSubmit,
  onClear,
  isLoading = false,
  error = '',
}: InputBlockProps): JSX.Element {
  /**
   * Handles form submission to shorten URLs
   *
   * @param {SubmitEvent} e - Event object
   */
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <ToolInputHeader
          title="Enter URLs to Shorten"
          desc="Enter one URL per line. Each URL will be shortened individually."
          onClear={onClear}
        />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
          <Textarea
            id="url-input"
            placeholder={`https://example.com/very-long-url\nhttps://another-example.com/with/multiple/path/segments`}
            rows={5}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          {error && <Alert variant="danger" text={error} />}

          <div className="flex flex-wrap gap-2">
            <Button type="submit" variant="default" disabled={!input.trim() || isLoading}>
              {isLoading ? 'Shortening...' : 'Shorten URLs'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
