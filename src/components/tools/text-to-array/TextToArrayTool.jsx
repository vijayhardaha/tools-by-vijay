"use client";

import { useState } from "react";

import latinize from "latinize";
import slugify from "slugify";

import TextToArrayInfo from "./TextToArrayInfo";
import TextToArrayInput from "./TextToArrayInput";
import TextToArrayOutput from "./TextToArrayOutput";

/**
 * Main component for the Text to Array tool.
 * Manages the state and functionality for converting multiline text to arrays in various formats.
 *
 * @component
 * @returns {JSX.Element} The complete text to array tool with input options, output display, and information
 */
const TextToArrayTool = () => {
  /**
   * The multiline text input
   * @type {[string, function]} State and setter for text input
   */
  const [textInput, setTextInput] = useState("");

  /**
   * The output format type (json, jsArray, jsObject, php, wordpress)
   * @type {[string, function]} State and setter for output format
   */
  const [outputFormat, setOutputFormat] = useState("json");

  /**
   * The array structure type (simple, numeric, associative)
   * @type {[string, function]} State and setter for array structure
   */
  const [arrayType, setArrayType] = useState("associative");

  /**
   * Whether to trim whitespace from each line
   * @type {[boolean, function]} State and setter for trim option
   */
  const [trimLines, setTrimLines] = useState(true);

  /**
   * Whether to remove empty lines
   * @type {[boolean, function]} State and setter for remove empty lines option
   */
  const [removeEmptyLines, setRemoveEmptyLines] = useState(true);

  /**
   * Whether to use slugified keys for associative arrays
   * @type {[boolean, function]} State and setter for slug keys option
   */
  const [useSlugKeys, setUseSlugKeys] = useState(true);

  /**
   * The converted output result
   * @type {[string, function]} State and setter for the converted output
   */
  const [convertedOutput, setConvertedOutput] = useState("");

  /**
   * Any error message from the conversion process
   * @type {[string, function]} State and setter for error messages
   */
  const [error, setError] = useState("");

  /**
   * Generates a slug from the given text.
   * @param {string} text - The input text to be slugified.
   * @returns {string} The generated slug.
   */
  const generateSlug = (text) =>
    slugify(latinize(text).toLowerCase(), {
      replacement: "_",
      remove: null,
      lower: true,
      strict: true,
    });

  /**
   * Generates a key for the associative array based on the input value.
   * If useSlugKeys is true, it generates a slug; otherwise, it returns the value.
   * @param {string} value - The input value to generate a key from.

   * @returns {string} The key to use
   */
  const getKey = (value) => {
    if (useSlugKeys) {
      return generateSlug(value);
    }
    return value;
  };

  /**
   * Parses the text input and processes it based on options
   * @returns {Array|null} Array of processed lines or null if error
   */
  const parseTextInput = () => {
    try {
      setError("");

      // If input is empty, return error
      if (!textInput.trim()) {
        setError("Please enter text content");
        return null;
      }

      // Split the input by newlines
      let lines = textInput.split("\n");

      // Apply processing options
      if (trimLines) {
        lines = lines.map((line) => line.trim());
      }

      if (removeEmptyLines) {
        lines = lines.filter((line) => line.length > 0);
      }

      if (lines.length === 0) {
        setError("No valid lines found after processing");
        return null;
      }

      return lines;
    } catch (err) {
      setError(`Error parsing text: ${err.message}`);
      return null;
    }
  };

  /**
   * Formats the parsed lines into the selected output format
   * @param {Array} lines - Parsed lines of text
   * @returns {string} Formatted output based on selected options
   */
  const formatOutput = (lines) => {
    if (!lines || lines.length === 0) {
      return "";
    }

    switch (outputFormat) {
      case "json":
        return formatJsonOutput(lines);
      case "jsArray":
        return formatJsArrayOutput(lines);
      case "jsObject":
        return formatJsObjectOutput(lines);
      case "php":
        return formatPhpOutput(lines);
      case "wordpress":
        return formatWordPressOutput(lines);
      default:
        return formatJsonOutput(lines);
    }
  };

  /**
   * Formats lines as JSON
   * @param {Array} lines - Parsed lines of text
   * @returns {string} JSON formatted output
   */
  const formatJsonOutput = (lines) => {
    try {
      if (arrayType === "simple") {
        return JSON.stringify(lines, null, 2);
      } else if (arrayType === "numeric") {
        const numericArray = lines.map((line, index) => ({
          id: index + 1,
          value: line,
        }));
        return JSON.stringify(numericArray, null, 2);
      } else {
        // associative
        const associativeArray = lines.map((line) => ({
          key: getKey(line),
          value: line,
        }));
        return JSON.stringify(associativeArray, null, 2);
      }
    } catch (err) {
      setError(`Error formatting JSON: ${err.message}`);
      return "";
    }
  };

  /**
   * Formats lines as JavaScript array
   * @param {Array} lines - Parsed lines of text
   * @returns {string} JavaScript array formatted output
   */
  const formatJsArrayOutput = (lines) => {
    try {
      if (arrayType === "simple") {
        const simpleArray = lines.map(
          (line) => `  "${line.replace(/"/g, '\\"')}"`
        );
        return `const textArray = [\n${simpleArray.join(",\n")}\n];`;
      } else if (arrayType === "numeric") {
        const numericArray = lines.map(
          (line, index) =>
            `  {\n    "id": ${index + 1},\n    "value": "${line.replace(/"/g, '\\"')}"\n  }`
        );
        return `const textArray = [\n${numericArray.join(",\n")}\n];`;
      } else {
        // associative
        const associativeArray = lines.map((line) => {
          const key = getKey(line);
          return `  {\n    "key": "${key.replace(/"/g, '\\"')}",\n    "value": "${line.replace(/"/g, '\\"')}"\n  }`;
        });
        return `const textArray = [\n${associativeArray.join(",\n")}\n];`;
      }
    } catch (err) {
      setError(`Error formatting JavaScript array: ${err.message}`);
      return "";
    }
  };

  /**
   * Formats lines as JavaScript object
   * @param {Array} lines - Parsed lines of text
   * @returns {string} JavaScript object formatted output
   */
  const formatJsObjectOutput = (lines) => {
    try {
      if (arrayType === "simple") {
        const objectItems = lines.map(
          (line, index) => `  "${index + 1}": "${line.replace(/"/g, '\\"')}"`
        );
        return `const textObject = {\n${objectItems.join(",\n")}\n};`;
      } else if (arrayType === "numeric") {
        const objectItems = lines.map(
          (line, index) => `  "${index + 1}": "${line.replace(/"/g, '\\"')}"`
        );
        return `const textObject = {\n${objectItems.join(",\n")}\n};`;
      } else {
        // associative
        const objectItems = lines.map((line) => {
          const key = getKey(line);
          return `  "${key.replace(/"/g, '\\"')}": "${line.replace(/"/g, '\\"')}"`;
        });
        return `const textObject = {\n${objectItems.join(",\n")}\n};`;
      }
    } catch (err) {
      setError(`Error formatting JavaScript object: ${err.message}`);
      return "";
    }
  };

  /**
   * Formats lines as PHP array
   * @param {Array} lines - Parsed lines of text
   * @returns {string} PHP formatted output
   */
  const formatPhpOutput = (lines) => {
    try {
      if (arrayType === "simple") {
        const arrayItems = lines.map(
          (line) => `  '${line.replace(/'/g, "\\'")}'`
        );
        return `<?php\n$data = array(\n${arrayItems.join(",\n")}\n);`;
      } else if (arrayType === "numeric") {
        const arrayItems = lines.map(
          (line, index) => `  ${index + 1} => '${line.replace(/'/g, "\\'")}'`
        );
        return `<?php\n$data = array(\n${arrayItems.join(",\n")}\n);`;
      } else {
        // associative
        const arrayItems = lines.map((line) => {
          const key = getKey(line);
          return `  '${key.replace(/'/g, "\\'")}' => '${line.replace(/'/g, "\\'")}'`;
        });
        return `<?php\n$data = array(\n${arrayItems.join(",\n")}\n);`;
      }
    } catch (err) {
      setError(`Error formatting PHP array: ${err.message}`);
      return "";
    }
  };

  /**
   * Formats lines as WordPress array
   * @param {Array} lines - Parsed lines of text
   * @returns {string} WordPress formatted output
   */
  const formatWordPressOutput = (lines) => {
    try {
      if (arrayType === "simple") {
        const arrayItems = lines.map(
          (line) => `  __( '${line.replace(/'/g, "\\'")}', 'text-domain' )`
        );
        return `<?php\n$data = array(\n${arrayItems.join(",\n")}\n);`;
      } else if (arrayType === "numeric") {
        const arrayItems = lines.map(
          (line, index) =>
            `  ${index + 1} => __( '${line.replace(/'/g, "\\'")}', 'text-domain' )`
        );
        return `<?php\n$data = array(\n${arrayItems.join(",\n")}\n);`;
      } else {
        // associative
        const arrayItems = lines.map((line) => {
          const key = getKey(line);
          return `  '${key.replace(/'/g, "\\'")}' => __( '${line.replace(/'/g, "\\'")}', 'text-domain' )`;
        });
        return `<?php\n$data = array(\n${arrayItems.join(",\n")}\n);`;
      }
    } catch (err) {
      setError(`Error formatting WordPress output: ${err.message}`);
      return "";
    }
  };

  /**
   * Handles the conversion process when user submits the form
   */
  const handleConvert = () => {
    const parsedLines = parseTextInput();
    if (parsedLines) {
      const formatted = formatOutput(parsedLines);
      setConvertedOutput(formatted);
    } else {
      setConvertedOutput("");
    }
  };

  /**
   * Resets all input fields and output
   */
  const handleReset = () => {
    setTextInput("");
    setOutputFormat("json");
    setArrayType("associative");
    setTrimLines(true);
    setRemoveEmptyLines(true);
    setUseSlugKeys(true);
    setConvertedOutput("");
    setError("");
  };

  /**
   * Clears only the text input field
   */
  const handleClear = () => {
    setTextInput("");
    setConvertedOutput("");
    setError("");
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <TextToArrayInput
          textInput={textInput}
          setTextInput={setTextInput}
          outputFormat={outputFormat}
          setOutputFormat={setOutputFormat}
          arrayType={arrayType}
          setArrayType={setArrayType}
          trimLines={trimLines}
          setTrimLines={setTrimLines}
          removeEmptyLines={removeEmptyLines}
          setRemoveEmptyLines={setRemoveEmptyLines}
          useSlugKeys={useSlugKeys}
          setUseSlugKeys={setUseSlugKeys}
          onConvert={handleConvert}
          onClear={handleClear}
          onReset={handleReset}
        />
        <TextToArrayOutput output={convertedOutput} error={error} />
      </div>

      <div className="mt-16">
        <TextToArrayInfo />
      </div>
    </>
  );
};

export default TextToArrayTool;
