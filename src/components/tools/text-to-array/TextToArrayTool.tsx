"use client";

import { useState } from "react";

import latinize from "latinize";
import slugify from "slugify";

import TextToArrayInfo from "./TextToArrayInfo";
import TextToArrayInput from "./TextToArrayInput";
import TextToArrayOutput from "./TextToArrayOutput";

export type OutputFormat = "json" | "jsArray" | "jsObject" | "php" | "wordpress";
export type ArrayType = "simple" | "numeric" | "associative";

/**
 * Main component for the Text to Array tool.
 * Manages the state and functionality for converting multiline text to arrays in various formats.
 *
 * @component
 * @returns {JSX.Element} The complete text to array tool with input options, output display, and information
 */
const TextToArrayTool: React.FC = (): React.JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [outputFormat, setOutputFormat] = useState<OutputFormat>("json");
  const [arrayType, setArrayType] = useState<ArrayType>("associative");
  const [trimLines, setTrimLines] = useState<boolean>(true);
  const [removeEmptyLines, setRemoveEmptyLines] = useState<boolean>(true);
  const [useSlugKeys, setUseSlugKeys] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  /**
   * Generates a slug from the given text.
   *
   * @param {string} text - The input text to be slugified.
   * @returns {string} The generated slug.
   */
  const generateSlug = (text: string): string =>
    slugify(latinize(text).toLowerCase(), {
      replacement: "_",
      remove: undefined,
      lower: true,
      strict: true,
    });

  /**
   * Generates a key for the associative array based on the input value.
   * If useSlugKeys is true, it generates a slug; otherwise, it returns the value.
   *
   * @param {string} value - The input value to generate a key from.
   * @returns {string} The key to use
   */
  const getKey = (value: string): string => {
    if (useSlugKeys) {
      return generateSlug(value);
    }

    return value;
  };

  /**
   * Parses the text input and processes it based on options.
   *
   * @returns {string[]} Array of processed lines or an empty array if an error occurs.
   */
  const parseTextInput = (): string[] => {
    try {
      setError("");

      // If input is empty, return error
      if (!input.trim()) {
        setError("Please enter the valid text content");
        return [];
      }

      // Split the input by newlines
      let lines: string[] = input.split("\n");

      // Apply processing options
      if (trimLines) {
        lines = lines.map((line: string) => line.trim());
      }

      if (removeEmptyLines) {
        lines = lines.filter((line: string) => line.length > 0);
      }

      if (lines.length === 0) {
        setError("No valid lines found after processing");
        return [];
      }

      return lines;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(`Error parsing text: ${err.message}`);
      } else {
        setError("Unknown error occurred while parsing text");
      }
      return [];
    }
  };

  /**
   * Formats the parsed lines into the selected output format.
   *
   * @param {string[]} lines - Parsed lines of text.
   * @returns {string} Formatted output based on selected options.
   */
  const formatOutput = (lines: string[]): string => {
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
   *
   * @param {Array} lines - Parsed lines of text
   * @returns {string} JSON formatted output
   */
  const formatJsonOutput = (lines: string[]): string => {
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
    } catch (err: any) {
      setError(`Error formatting JSON: ${err.message}`);
      return "";
    }
  };

  /**
   * Formats lines as JavaScript array
   * @param {Array} lines - Parsed lines of text
   * @returns {string} JavaScript array formatted output
   */
  const formatJsArrayOutput = (lines: string[]): string => {
    try {
      if (arrayType === "simple") {
        const simpleArray = lines.map((line) => `  "${line.replace(/"/g, '\\"')}"`);
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
    } catch (err: any) {
      setError(`Error formatting JavaScript array: ${err.message}`);
      return "";
    }
  };

  /**
   * Formats lines as JavaScript object
   *
   * @param {Array} lines - Parsed lines of text
   * @returns {string} JavaScript object formatted output
   */
  const formatJsObjectOutput = (lines: string[]): string => {
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
    } catch (err: any) {
      setError(`Error formatting JavaScript object: ${err.message}`);
      return "";
    }
  };

  /**
   * Formats lines as PHP array
   *
   * @param {Array} lines - Parsed lines of text
   * @returns {string} PHP formatted output
   */
  const formatPhpOutput = (lines: string[]): string => {
    try {
      if (arrayType === "simple") {
        const arrayItems = lines.map((line) => `  '${line.replace(/'/g, "\\'")}'`);
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
    } catch (err: any) {
      setError(`Error formatting PHP array: ${err.message}`);
      return "";
    }
  };

  /**
   * Formats lines as WordPress array
   *
   * @param {Array} lines - Parsed lines of text
   * @returns {string} WordPress formatted output
   */
  const formatWordPressOutput = (lines: string[]): string => {
    try {
      if (arrayType === "simple") {
        const arrayItems = lines.map(
          (line) => `  __( '${line.replace(/'/g, "\\'")}', 'text-domain' )`
        );
        return `<?php\n$data = array(\n${arrayItems.join(",\n")}\n);`;
      } else if (arrayType === "numeric") {
        const arrayItems = lines.map(
          (line, index) => `  ${index + 1} => __( '${line.replace(/'/g, "\\'")}', 'text-domain' )`
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
    } catch (err: any) {
      setError(`Error formatting WordPress output: ${err.message}`);
      return "";
    }
  };

  /**
   * Handles the conversion process when the user submits the form.
   *
   * @function
   * @returns {void}
   */
  const handleSubmit = (): void => {
    const parsedLines: string[] = parseTextInput();
    if (parsedLines.length > 0) {
      const formatted: string = formatOutput(parsedLines);
      setOutput(formatted);
    } else {
      setOutput("");
    }
  };

  /**
   * Clears only the text input field
   *
   * @function
   * @returns {void}
   */
  const handleClear = (): void => {
    setInput("");
    setOutput("");
    setError("");
  };

  /**
   * Resets all input fields and output
   *
   * @function
   * @returns {void}
   */
  const handleReset = (): void => {
    handleClear();
    setOutputFormat("json");
    setArrayType("associative");
    setTrimLines(true);
    setRemoveEmptyLines(true);
    setUseSlugKeys(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <TextToArrayInput
          input={input}
          setInput={setInput}
          outputFormat={outputFormat}
          setOutputFormat={(value: string) => setOutputFormat(value as OutputFormat)}
          arrayType={arrayType}
          setArrayType={(value: string) => setArrayType(value as ArrayType)}
          trimLines={trimLines}
          setTrimLines={setTrimLines}
          removeEmptyLines={removeEmptyLines}
          setRemoveEmptyLines={setRemoveEmptyLines}
          useSlugKeys={useSlugKeys}
          setUseSlugKeys={setUseSlugKeys}
          onSubmit={handleSubmit}
          onClear={handleClear}
          onReset={handleReset}
          error={error}
        />

        {output && <TextToArrayOutput output={output} />}
      </div>

      <div className="mt-16">
        <TextToArrayInfo />
      </div>
    </>
  );
};

export default TextToArrayTool;
