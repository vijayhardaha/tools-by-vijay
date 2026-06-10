'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import InfoBlock from './info-block';
import InputBlock from './input-block';
import OutputBlock from './output-block';

/**
 * A tool for encoding and decoding URLs. It provides input, output, and informational components.
 *
 * @returns {JSX.Element} The rendered URL Decoder/Encoder Tool component.
 */
const UrlDecoderEncoder = (): JSX.Element => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [isEncoding, setIsEncoding] = useState<boolean>(true);

  /**
   * Processes the input string by encoding or decoding it based on the current mode.
   */
  const handleProcess = (): void => {
    const result = isEncoding ? encodeURIComponent(input) : decodeURIComponent(input);
    setOutput(result);
  };

  /**
   * Clears the input and output fields.
   */
  const handleClear = (): void => {
    setInput('');
    setOutput('');
  };

  /**
   * Resets the tool to its initial state, clearing input/output and setting mode to encoding.
   */
  const handleReset = (): void => {
    handleClear();
    setIsEncoding(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <InputBlock
          input={input}
          setInput={setInput}
          isEncoding={isEncoding}
          setIsEncoding={setIsEncoding}
          onProcess={handleProcess}
          onClear={handleClear}
          onReset={handleReset}
        />

        {output && <OutputBlock output={output} />}
      </div>

      <div className="mt-16">
        <InfoBlock />
      </div>
    </>
  );
};

export default UrlDecoderEncoder;
