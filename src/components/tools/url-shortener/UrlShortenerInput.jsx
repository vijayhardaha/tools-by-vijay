"use client";

import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Alert } from "@/components/ui/alert";

/**
 * Component for user input of URLs to be shortened
 *
 * This component provides a form for users to input multiple URLs to be shortened,
 * with validation and processing controls.
 *
 * @param {Object} props - Component props
 * @param {string} props.input - The current input text with URLs
 * @param {Function} props.setInput - Function to update the input text
 * @param {Function} props.onShortenUrls - Function to process and shorten the URLs
 * @param {Function} props.onClear - Function to clear the input and results
 * @param {boolean} props.isLoading - Whether the shortening process is in progress
 * @param {string} props.error - Error message to display, if any
 * @returns {JSX.Element} Input form for URL shortening
 */
const UrlShortenerInput = ({
  input = "",
  setInput,
  onShortenUrls,
  onClear,
  isLoading = false,
  error = "",
}) => {
  /**
   * Handles changes to the input textarea
   *
   * @param {Object} e - Event object
   */
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  /**
   * Handles form submission to shorten URLs
   *
   * @param {Object} e - Event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onShortenUrls();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Enter URLs to Shorten</CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Enter one URL per line. Each URL will be shortened individually.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Textarea
            placeholder="https://example.com/very-long-url
https://another-example.com/with/multiple/path/segments"
            value={input}
            rows={5}
            onChange={handleInputChange}
          />

          {error && <Alert variant="danger" text={error} />}

          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              type="submit"
              variant="default"
              size="lg"
              disabled={!input.trim() || isLoading}
            >
              {isLoading ? "Shortening..." : "Shorten URLs"}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={onClear}
              disabled={isLoading}
            >
              Clear
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

UrlShortenerInput.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  onShortenUrls: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default UrlShortenerInput;
