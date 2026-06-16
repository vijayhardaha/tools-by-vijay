'use client';

import type { JSX } from 'react';
import { useEffect, useState } from 'react';

import { ExampleBlock } from './example-block';
import { InfoBlock } from './info-block';
import { InputBlock } from './input-block';
import { OutputBlock } from './output-block';

/**
 * Main component for the Password Generator tool.
 * Manages the state and functionality for generating secure passwords based on user preferences.
 *
 * @returns {JSX.Element} The complete password generator tool with input options, output display, and information
 */
export function PasswordGenerator(): JSX.Element {
  const [length, setLength] = useState<number>(12);
  const [useUppercase, setUseUppercase] = useState<boolean>(true);
  const [useLowercase, setUseLowercase] = useState<boolean>(true);
  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const [useSymbols, setUseSymbols] = useState<boolean>(true);
  const [excludeSimilar, setExcludeSimilar] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  /**
   * Generates a password reactively whenever options change.
   * Uses useEffect because Math.random() is impure and cannot be used in useMemo.
   */
  useEffect(() => {
    // Character sets
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    // Characters to exclude if excludeSimilar is true
    const similarChars = 'il1Lo0O';

    // Build character pool based on selected options
    let charPool = '';
    if (useUppercase) charPool += uppercaseChars;
    if (useLowercase) charPool += lowercaseChars;
    if (useNumbers) charPool += numberChars;
    if (useSymbols) charPool += symbolChars;

    // Remove similar characters if option is selected
    if (excludeSimilar) {
      for (const char of similarChars) {
        charPool = charPool.replace(new RegExp(char, 'g'), '');
      }
    }

    // Make sure at least one character set is selected
    if (charPool.length === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Math.random() is impure, must use useEffect
      setPassword('Select at least one character type');
      return;
    }

    // Generate password
    let generated = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      generated += charPool[randomIndex];
    }

    setPassword(generated);
  }, [length, useUppercase, useLowercase, useNumbers, useSymbols, excludeSimilar]);

  /**
   * Resets all password generation options to their default values
   *
   * @returns {void}
   *
   * @function
   */
  const handleReset = (): void => {
    setLength(12);
    setUseUppercase(true);
    setUseLowercase(true);
    setUseNumbers(true);
    setUseSymbols(true);
    setExcludeSimilar(false);
  };

  /**
   * Loads an example with predefined input values and options.
   *
   * @param {object} values - The example values.
   *
   * @returns {void}
   */
  const handleExample = (values: Record<string, any>): void => {
    if ('length' in values) {
      setLength(values.length);
    }
    if ('useUppercase' in values) {
      setUseUppercase(values.useUppercase);
    }
    if ('useLowercase' in values) {
      setUseLowercase(values.useLowercase);
    }
    if ('useNumbers' in values) {
      setUseNumbers(values.useNumbers);
    }
    if ('useSymbols' in values) {
      setUseSymbols(values.useSymbols);
    }
    if ('excludeSimilar' in values) {
      setExcludeSimilar(values.excludeSimilar);
    }
  };

  return (
    <>
      <div className="space-y-6 md:space-y-8">
        <InputBlock
          length={length}
          setLength={setLength}
          useUppercase={useUppercase}
          setUseUppercase={setUseUppercase}
          useLowercase={useLowercase}
          setUseLowercase={setUseLowercase}
          useNumbers={useNumbers}
          setUseNumbers={setUseNumbers}
          useSymbols={useSymbols}
          setUseSymbols={setUseSymbols}
          excludeSimilar={excludeSimilar}
          setExcludeSimilar={setExcludeSimilar}
          onReset={handleReset}
        />

        <ExampleBlock onExample={handleExample} />

        <OutputBlock password={password} />
      </div>

      <InfoBlock />
    </>
  );
}
