"use client";

import { FC } from "react";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

/**
 * Props for the UrlShortenerInput component
 */
interface UrlShortenerInputProps {
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
 * @param {UrlShortenerInputProps} props - Props for the component
 * @returns {React.JSX.Element} The rendered component
 */
const UrlShortenerInput: React.FC<UrlShortenerInputProps> = ({
  input = "",
  setInput,
  onSubmit,
  onClear,
  isLoading = false,
  error = "",
}: UrlShortenerInputProps): React.JSX.Element => {
  /**
   * Handles form submission to shorten URLs
   *
   * @param {React.FormEvent} e - Event object
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Enter URLs to Shorten</CardTitle>
        <CardDescription>
          Enter one URL per line. Each URL will be shortened individually.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              {isLoading ? "Shortening..." : "Shorten URLs"}
            </Button>

            <Button type="button" variant="outline" onClick={onClear} disabled={isLoading}>
              Clear
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default UrlShortenerInput;
