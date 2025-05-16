/// <reference path="./tinyurl.d.ts" />
"use client";

import React, { useState } from "react";

import TinyURL from "tinyurl";
import validUrl from "valid-url";

import UrlShortenerInfo from "./UrlShortenerInfo";
import UrlShortenerInput from "./UrlShortenerInput";
import UrlShortenerOutput from "./UrlShortenerOutput";

interface UrlResult {
  originalUrl: string;
  shortenedUrl: string;
  isValid: boolean;
}

/**
 * Main component for the URL Shortener Tool.
 *
 * This component manages the state and functionality of the URL shortener tool,
 * allowing users to shorten multiple URLs in bulk using the TinyURL API.
 *
 * @returns {React.JSX.Element} The rendered URL Shortener Tool component.
 */
const UrlShortenerTool: React.FC = (): React.JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<UrlResult[]>([]);
  const [error, setError] = useState<string>("");

  /**
   * Validates a URL
   *
   * @param {string} url - URL to validate
   * @returns {boolean} Whether the URL is valid
   */
  const isValidUrl = (url: string): boolean => validUrl.isWebUri(url) !== undefined;

  /**
   * Shortens a single URL using TinyURL API
   *
   * @param {string} url - URL to shorten
   * @returns {Promise<string>} Shortened URL or error message
   */
  const shortenUrl = async (url: string): Promise<string> => {
    if (!url || url.trim() === "") return "";

    try {
      const shortenedUrl = await TinyURL.shorten(url);
      return shortenedUrl;
    } catch (err) {
      console.error(`Error shortening URL ${url}:`, err);
      return "Error: Failed to shorten URL";
    }
  };

  /**
   * Processes all URLs in the input field
   *
   * Splits the input into individual URLs, validates them, and shortens them if valid.
   * Updates the results state with the processed URLs.
   *
   * @returns {Promise<void>} Resolves when processing is complete
   */
  const handleSubmit = async (): Promise<void> => {
    setError("");
    setIsLoading(true);

    try {
      const urls = input.split("\n").filter((url) => url.trim() !== "");

      if (urls.length === 0) {
        setError("Please enter at least one URL");
        setIsLoading(false);
        return;
      }

      const processedResults: UrlResult[] = await Promise.all(
        urls.map(async (url) => {
          const trimmedUrl = url.trim();
          const isValid = isValidUrl(trimmedUrl);

          return {
            originalUrl: trimmedUrl,
            shortenedUrl: isValid ? await shortenUrl(trimmedUrl) : "Invalid URL",
            isValid: isValid,
          };
        })
      );

      setResults(processedResults);
    } catch (err) {
      console.error("Error processing URLs:", err);
      setError("An error occurred while processing your URLs");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Clears the input and results
   *
   * Resets the input field, results, and error message to their initial states.
   */
  const handleClear = (): void => {
    setInput("");
    setResults([]);
    setError("");
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <UrlShortenerInput
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
          onClear={handleClear}
          isLoading={isLoading}
          error={error}
        />

        {results.length > 0 && <UrlShortenerOutput results={results} />}
      </div>

      <div className="mt-16">
        <UrlShortenerInfo />
      </div>
    </>
  );
};

export default UrlShortenerTool;
