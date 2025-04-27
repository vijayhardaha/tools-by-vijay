"use client";

import { useState } from "react";

import TinyURL from "tinyurl";
import validUrl from "valid-url";

import UrlShortenerInfo from "./UrlShortenerInfo";
import UrlShortenerInput from "./UrlShortenerInput";
import UrlShortenerOutput from "./UrlShortenerOutput";

/**
 * Main component for the URL Shortener Tool
 *
 * This component manages the state and functionality of the URL shortener tool,
 * allowing users to shorten multiple URLs in bulk using the TinyURL API.
 *
 * @returns {JSX.Element} The complete URL Shortener Tool interface
 */
const UrlShortenerTool = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  /**
   * Validates a URL
   *
   * @param {string} url - URL to validate
   * @returns {boolean} Whether the URL is valid
   */
  const isValidUrl = (url) => validUrl.isWebUri(url) !== undefined;

  /**
   * Shortens a single URL using TinyURL API
   *
   * @param {string} url - URL to shorten
   * @returns {Promise<string>} Shortened URL or error message
   */
  const shortenUrl = async (url) => {
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
   */
  const handleSubmit = async () => {
    setError("");
    setIsLoading(true);

    try {
      const urls = input.split("\n").filter((url) => url.trim() !== "");

      if (urls.length === 0) {
        setError("Please enter at least one URL");
        setIsLoading(false);
        return;
      }

      const processedResults = await Promise.all(
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
   */
  const handleClear = () => {
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
