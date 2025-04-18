"use client";

import { useState } from "react";

import PropTypes from "prop-types";

import { Alert } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import CopyButton from "@/components/ui/copy-button";

/**
 * Component that displays the shortened URLs and provides copy functionality
 *
 * This component renders the output of the URL shortening process, showing both
 * original and shortened URLs with copy functionality.
 *
 * @param {Object} props - Component props
 * @param {Array} props.results - Array of URL shortening results
 * @returns {JSX.Element} Output display with copy functionality
 */
const UrlShortenerOutput = ({ results }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [copiedAll, setCopiedAll] = useState(false);

  /**
   * Copies the provided text to clipboard and manages the copy state indicators
   *
   * @param {string} text - The text to copy to clipboard
   * @param {number|null} index - Index of the copied item (null for copy all)
   * @returns {Promise<void>}
   */
  const copyToClipboard = async (text, index = null) => {
    await navigator.clipboard.writeText(text);
    if (index === null) {
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 1000);
    } else {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1000);
    }
  };

  /**
   * Creates a text string containing all shortened URLs
   *
   * @returns {string} All valid shortened URLs
   */
  const getAllShortenedUrls = () => {
    return results
      .filter((result) => result.isValid)
      .map((result) => result.shortenedUrl)
      .join("\n");
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <CardTitle>Shortened URLs</CardTitle>
            <CardDescription>Results from URL shortening process</CardDescription>
          </div>
          {results.length > 0 && (
            <div className="inline-flex">
              <CopyButton
                copied={copiedAll}
                onClick={() => copyToClipboard(getAllShortenedUrls())}
                copyText="Copy All Valid URLs"
                copiedText="Copied All!"
              />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {results.map((result, index) => (
            <div key={index} className="border-border rounded-lg border p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={result.isValid ? "success" : "danger"}
                        className="font-medium"
                      >
                        {result.isValid ? "Valid" : "Invalid URL"}
                      </Badge>
                      <span className="text-muted-foreground max-w-[250px] truncate font-mono text-sm">
                        {result.originalUrl}
                      </span>
                    </div>
                  </div>

                  {result.isValid ? (
                    <Alert
                      variant="default"
                      icon={null}
                      className="h-10 py-2 font-mono"
                      text={
                        <a
                          href={result.shortenedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {result.shortenedUrl}
                        </a>
                      }
                    />
                  ) : (
                    <Alert
                      variant="danger"
                      text="Could not shorten this URL. Please check that it's valid and includes the protocol (http:// or https://)."
                    />
                  )}
                </div>
                {result.isValid && (
                  <div>
                    <CopyButton
                      copied={copiedIndex === index}
                      onClick={() => copyToClipboard(result.shortenedUrl, index)}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

UrlShortenerOutput.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      originalUrl: PropTypes.string.isRequired,
      shortenedUrl: PropTypes.string.isRequired,
      isValid: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default UrlShortenerOutput;
