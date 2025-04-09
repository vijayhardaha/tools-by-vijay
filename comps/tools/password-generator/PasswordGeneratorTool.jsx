"use client";

import { useState } from "react";

import PasswordGeneratorInfo from "./PasswordGeneratorInfo";
import PasswordGeneratorInput from "./PasswordGeneratorInput";
import PasswordGeneratorOutput from "./PasswordGeneratorOutput";

const PasswordGeneratorTool = () => {
  const [length, setLength] = useState(12);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [excludeSimilar, setExcludeSimilar] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

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

  const handleGenerate = () => {
    const password = generatePassword();
    setGeneratedPassword(password);
  };

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
