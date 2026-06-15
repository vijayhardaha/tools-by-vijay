'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import InfoBlock from './info-block';
import InputBlock from './input-block';
import OutputBlock from './output-block';

/**
 * A tool for inlining CSS into HTML. It provides input fields for HTML and CSS,
 * displays the inlined output, and handles API communication for processing.
 *
 * @returns {JSX.Element} The rendered CssInlinerTool component.
 */
export default function CssInliner(): JSX.Element {
  const [htmlInput, setHtmlInput] = useState<string>('');
  const [cssInput, setCssInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * Handles the inlining of CSS into HTML via API.
   * Sends the HTML and CSS inputs to the server and updates the output state with the result.
   * Displays an error message if the API call fails.
   */
  const handleSubmit = async () => {
    try {
      setError('');
      setIsLoading(true);

      const response = await fetch('/api/inline-css', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ html: htmlInput, css: cssInput }),
      });

      if (!response.ok) {
        throw new Error('Failed to inline CSS');
      }

      const data = await response.json();
      setOutput(data.formattedHtml);
    } catch (error) {
      console.error('Error inlining CSS:', error);
      setError('Error inlining CSS. Please check your input.');
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Clears all input and output fields.
   * Resets the HTML input, CSS input, output, and error states to their initial values.
   */
  const handleClear = () => {
    setHtmlInput('');
    setCssInput('');
    setOutput('');
    setError('');
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <InputBlock
          htmlInput={htmlInput}
          setHtmlInput={setHtmlInput}
          cssInput={cssInput}
          setCssInput={setCssInput}
          onSubmit={handleSubmit}
          onClear={handleClear}
          isLoading={isLoading}
          error={error}
        />

        {output && <OutputBlock output={output} />}
      </div>

      <div className="mt-16">
        <InfoBlock />
      </div>
    </>
  );
}
