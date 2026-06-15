'use client';

import type { JSX } from 'react';
import { useState } from 'react';

import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * QRCodeGeneratorTool is a React functional component that provides a tool
 * for generating QR codes based on user input. It includes input fields for
 * data and size, and displays the generated QR code.
 *
 * @returns {JSX.Element} The rendered QR code generator tool component.
 */
export function QRCodeGenerator(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const [size, setSize] = useState<number>(256);
  const [output, setOutput] = useState<string>('');

  /**
   * Generates a QR code URL based on the input data and size.
   * Updates the output state with the generated QR code URL.
   */
  const generateQRCode = (): void => {
    if (!input) return;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
      input
    )}&size=${size}x${size}`;
    setOutput(qrCodeUrl);
  };

  /**
   * Clears the input and output states.
   */
  const handleClear = (): void => {
    setInput('');
    setOutput('');
  };

  /**
   * Resets the input, output, and size states to their default values.
   */
  const handleReset = (): void => {
    handleClear();
    setSize(256);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <InputBlock
          input={input}
          setInput={setInput}
          size={size}
          setSize={setSize}
          onSubmit={generateQRCode}
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
}
