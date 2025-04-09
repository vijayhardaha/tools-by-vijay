"use client";

import { useState } from "react";

import PasswordGeneratorInfo from "./PasswordGeneratorInfo";
import PasswordGeneratorInput from "./PasswordGeneratorInput";
import PasswordGeneratorOutput from "./PasswordGeneratorOutput";

/**
 * Main component for the Password Generator tool.
 * Manages the state and functionality for generating secure passwords based on user preferences.
 *
 * @component
 * @returns {JSX.Element} The complete password generator tool with input options, output display, and information
 */
const PasswordGeneratorTool = () => {
  /**
   * The length of the password to generate
   * @type {[number, function]} State and setter for password length
   */
  const [length, setLength] = useState([12]);

  /**
   * Whether to include uppercase letters in the password
   * @type {[boolean, function]} State and setter for uppercase option
   */
  const [useUppercase, setUseUppercase] = useState(true);

  /**
   * Whether to include lowercase letters in the password
   * @type {[boolean, function]} State and setter for lowercase option
   */
  const [useLowercase, setUseLowercase] = useState(true);

  /**
   * Whether to include numbers in the password
   * @type {[boolean, function]} State and setter for numbers option
   */
  const [useNumbers, setUseNumbers] = useState(true);

  /**
   * Whether to include symbols in the password
   * @type {[boolean, function]} State and setter for symbols option
   */
  const [useSymbols, setUseSymbols] = useState(true);

  /**
   * Whether to exclude similar-looking characters from the password
   * @type {[boolean, function]} State and setter for excluding similar characters
   */
  const [excludeSimilar, setExcludeSimilar] = useState(false);

  /**
   * The currently generated password
   * @type {[string, function]} State and setter for the generated password
   */
  const [generatedPassword, setGeneratedPassword] = useState("");

  /**
   * Generates a password based on the current settings
   * @function
   * @returns {string} The generated password or an error message
   */
  const generatePassword = () => {
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
   * @function
   */
  const handleGenerate = () => {
    const password = generatePassword();
    setGeneratedPassword(password);
  };

  /**
   * Resets all password generation options to their default values
   * @function
   */
  const handleReset = () => {
    setLength(12);
    setUseUppercase(true);
    setUseLowercase(true);
    setUseNumbers(true);
    setUseSymbols(true);
    setExcludeSimilar(false);
    setGeneratedPassword("");
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
          onGenerate={handleGenerate}
          onReset={handleReset}
        />
        <PasswordGeneratorOutput password={generatedPassword} />
      </div>

      <div className="mt-16">
        <PasswordGeneratorInfo />
      </div>
    </>
  );
};

export default PasswordGeneratorTool;
