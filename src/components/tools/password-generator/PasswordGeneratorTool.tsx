"use client";

import React, { useState } from "react";

import PasswordGeneratorInfo from "./PasswordGeneratorInfo";
import PasswordGeneratorInput from "./PasswordGeneratorInput";
import PasswordGeneratorOutput from "./PasswordGeneratorOutput";

/**
 * Main component for the Password Generator tool.
 * Manages the state and functionality for generating secure passwords based on user preferences.
 *
 * @component
 * @returns {React.JSX.Element} The complete password generator tool with input options, output display, and information
 */
const PasswordGeneratorTool: React.FC = (): React.JSX.Element => {
  const [length, setLength] = useState<number>(12);
  const [useUppercase, setUseUppercase] = useState<boolean>(true);
  const [useLowercase, setUseLowercase] = useState<boolean>(true);
  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const [useSymbols, setUseSymbols] = useState<boolean>(true);
  const [excludeSimilar, setExcludeSimilar] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  /**
   * Generates a password based on the current settings
   *
   * @function
   * @returns {string} The generated password or an error message
   */
  const generatePassword = (): string => {
    // Character sets
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    // Characters to exclude if excludeSimilar is true
    const similarChars = "il1Lo0O";

    // Build character pool based on selected options
    let charPool = "";
    if (useUppercase) charPool += uppercaseChars;
    if (useLowercase) charPool += lowercaseChars;
    if (useNumbers) charPool += numberChars;
    if (useSymbols) charPool += symbolChars;

    // Remove similar characters if option is selected
    if (excludeSimilar) {
      for (const char of similarChars) {
        charPool = charPool.replace(new RegExp(char, "g"), "");
      }
    }

    // Make sure at least one character set is selected
    if (charPool.length === 0) {
      return "Select at least one character type";
    }

    // Generate password
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      password += charPool[randomIndex];
    }

    return password;
  };

  /**
   * Handles the password generation action and updates state
   *
   * @function
   * @returns {void}
   */
  const handleSubmit = (): void => {
    const password = generatePassword();
    setPassword(password);
  };

  /**
   * Resets all password generation options to their default values
   *
   * @function
   * @returns {void}
   */
  const handleReset = (): void => {
    setLength(12);
    setUseUppercase(true);
    setUseLowercase(true);
    setUseNumbers(true);
    setUseSymbols(true);
    setExcludeSimilar(false);
    setPassword("");
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <PasswordGeneratorInput
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
          onSubmit={handleSubmit}
          onReset={handleReset}
        />

        {password && <PasswordGeneratorOutput password={password} />}
      </div>

      <div className="mt-16">
        <PasswordGeneratorInfo />
      </div>
    </>
  );
};

export default PasswordGeneratorTool;
