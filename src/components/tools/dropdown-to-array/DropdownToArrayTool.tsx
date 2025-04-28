"use client";

import { useState } from "react";

import latinize from "latinize";
import slugify from "slugify";

import DropdownToArrayInfo from "./DropdownToArrayInfo";
import DropdownToArrayInput from "./DropdownToArrayInput";
import DropdownToArrayOutput from "./DropdownToArrayOutput";

interface Option {
  value: string;
  text: string;
}

/**
 * DropdownToArrayTool component.
 *
 * A tool for converting HTML dropdown/select content into various array formats.
 *
 * @returns {React.JSX.Element} The rendered component.
 */
const DropdownToArrayTool: React.FC = (): React.JSX.Element => {
  const [input, setInput] = useState<string>("");
  const [outputFormat, setOutputFormat] = useState<string>("json");
  const [arrayType, setArrayType] = useState<string>("associative");
  const [useSlugKeys, setUseSlugKeys] = useState<boolean>(true);
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string>("");

  /**
   * Generates a slugified version of a given text.
   *
   * @param {string} text - The text to slugify.
   * @returns {string} The slugified text.
   */
  const generateSlug = (text: string): string =>
    slugify(latinize(text).toLowerCase(), {
      replacement: "_",
      remove: undefined,
      lower: true,
      strict: true,
    });

  /**
   * Gets the key for an option, slugifying it if necessary.
   *
   * @param {Option} option - The option object.
   * @returns {string} The key for the option.
   */
  const getKey = (option: Option): string => {
    if (useSlugKeys) {
      return generateSlug(option.value);
    }

    return option.value;
  };

  /**
   * Parses the HTML input and extracts option values and text.
   *
   * @returns {Option[] | null} Array of extracted options or null if an error occurs.
   */
  const parseHtmlInput = (): Option[] | null => {
    try {
      setError("");

      // If input is empty, return error
      if (!input.trim()) {
        setError("Please enter HTML select/dropdown content");
        return null;
      }

      // Create a temporary DOM element to parse the HTML
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = input.trim();

      // Find all select elements
      const selectElements = tempDiv.querySelectorAll("select");

      // If no select element is found, try to extract option elements directly
      if (selectElements.length === 0) {
        const optionElements = tempDiv.querySelectorAll("option");

        if (optionElements.length === 0) {
          setError("No select or option elements found in the input");
          return null;
        }

        // Extract options from direct option elements
        return Array.from(optionElements).map((option) => ({
          value: option.value,
          text: option?.textContent?.trim() || "",
        }));
      }

      // Extract options from the select element (using the first one found)
      const optionElements = selectElements[0].querySelectorAll("option");

      if (optionElements.length === 0) {
        setError("No option elements found in the select tag");
        return null;
      }

      return Array.from(optionElements).map((option) => ({
        value: option.value,
        text: option?.textContent?.trim() || "",
      }));
    } catch (error) {
      setError(`Error parsing HTML: ${error instanceof Error ? error.message : "Unknown error"}`);
      return null;
    }
  };

  /**
   * Formats the parsed options into the selected output format.
   *
   * @param {Option[]} options - Parsed option elements with value and text.
   * @returns {string} Formatted output based on selected options.
   */
  const formatOutput = (options: Option[]): string => {
    if (!options || options.length === 0) {
      return "";
    }

    switch (outputFormat) {
      case "json":
        return formatJsonOutput(options);
      case "jsArray":
        return formatJsArrayOutput(options);
      case "jsObject":
        return formatJsObjectOutput(options);
      case "php":
        return formatPhpOutput(options);
      case "wordpress":
        return formatWordPressOutput(options);
      default:
        return formatJsonOutput(options);
    }
  };

  /**
   * Formats options as JSON.
   *
   * @param {Option[]} options - Parsed option elements.
   * @returns {string} JSON formatted output.
   */
  const formatJsonOutput = (options: Option[]): string => {
    try {
      if (arrayType === "simple") {
        return JSON.stringify(options, null, 2);
      } else if (arrayType === "numeric") {
        const numericArray = options.map((option: { text: any }, index: number) => ({
          id: index + 1,
          value: option.text,
        }));
        return JSON.stringify(numericArray, null, 2);
      } else {
        // associative
        const associativeArray = options.map((option: Option) => ({
          key: getKey(option),
          value: option.text,
        }));
        return JSON.stringify(associativeArray, null, 2);
      }
    } catch (error) {
      setError(
        `Error formatting JSON: ${error instanceof Error ? error.message : "Unknown error"}`
      );
      return "";
    }
  };

  /**
   * Formats options as a JavaScript array.
   *
   * @param {Option[]} options - Parsed option elements.
   * @returns {string} JavaScript array formatted output.
   */
  const formatJsArrayOutput = (options: Option[]): string => {
    try {
      if (arrayType === "simple") {
        const simpleArray = options.map(
          (option: { text: string }) => `  "${option.text.replace(/"/g, '\\"')}"`
        );
        return `const dropdownArray = [\n${simpleArray.join(",\n")}\n];`;
      } else if (arrayType === "numeric") {
        const numericArray = options.map(
          (option: { text: string }, index: number) =>
            `  {\n    "id": ${index + 1},\n    "value": "${option.text.replace(/"/g, '\\"')}"\n  }`
        );
        return `const dropdownArray = [\n${numericArray.join(",\n")}\n];`;
      } else {
        // associative
        const associativeArray = options.map(
          (option: Option) =>
            `  {\n    "key": "${getKey(option).replace(/"/g, '\\"')}",\n    "value": "${option.text.replace(/"/g, '\\"')}"\n  }`
        );
        return `const dropdownArray = [\n${associativeArray.join(",\n")}\n];`;
      }
    } catch (error) {
      setError(
        `Error formatting JavaScript array: ${error instanceof Error ? error.message : "Unknown error"}`
      );
      return "";
    }
  };

  /**
   * Formats options as a JavaScript object.
   *
   * @param {Option[]} options - Parsed option elements.
   * @returns {string} JavaScript object formatted output.
   */
  const formatJsObjectOutput = (options: Option[]): string => {
    try {
      if (arrayType === "simple") {
        const objectItems = options.map(
          (option: { text: string }, index: number) =>
            `  "${index + 1}": "${option.text.replace(/"/g, '\\"')}"`
        );
        return `const dropdownObject = {\n${objectItems.join(",\n")}\n};`;
      } else if (arrayType === "numeric") {
        const objectItems = options.map(
          (option: { text: string }, index: number) =>
            `  "${index + 1}": "${option.text.replace(/"/g, '\\"')}"`
        );
        return `const dropdownObject = {\n${objectItems.join(",\n")}\n};`;
      } else {
        // associative
        const objectItems = options.map(
          (option: Option) =>
            `  "${getKey(option).replace(/"/g, '\\"')}": "${option.text.replace(/"/g, '\\"')}"`
        );
        return `const dropdownObject = {\n${objectItems.join(",\n")}\n};`;
      }
    } catch (error) {
      setError(
        `Error formatting JavaScript object: ${error instanceof Error ? error.message : "Unknown error"}`
      );
      return "";
    }
  };

  /**
   * Formats options as a PHP array.
   *
   * @param {Option[]} options - Parsed option elements.
   * @returns {string} PHP formatted output.
   */
  const formatPhpOutput = (options: Option[]): string => {
    try {
      if (arrayType === "simple") {
        const arrayItems = options.map(
          (option: { text: string }) => `  '${option.text.replace(/'/g, "\\'")}'`
        );
        return `<?php\n$data = array(\n${arrayItems.join(",\n")}\n);`;
      } else if (arrayType === "numeric") {
        const arrayItems = options.map(
          (option: { text: string }, index: number) =>
            `  '${index + 1}' => '${option.text.replace(/'/g, "\\'")}'`
        );
        return `<?php\n$data = array(\n${arrayItems.join(",\n")}\n);`;
      } else {
        // associative
        const arrayItems = options.map(
          (option: Option) =>
            `  '${getKey(option).replace(/'/g, "\\'")}' => '${option.text.replace(/'/g, "\\'")}'`
        );
        return `<?php\n$data = array(\n${arrayItems.join(",\n")}\n);`;
      }
    } catch (error) {
      setError(
        `Error formatting PHP array: ${error instanceof Error ? error.message : "Unknown error"}`
      );
      return "";
    }
  };

  /**
   * Formats options as WordPress select options.
   *
   * @param {Option[]} options - Parsed option elements.
   * @returns {string} WordPress select options formatted output.
   */
  const formatWordPressOutput = (options: Option[]): string => {
    try {
      if (arrayType === "simple") {
        const arrayItems = options.map(
          (option: { text: string }) =>
            `  __( '${option.text.replace(/'/g, "\\'")}', 'text-domain' )`
        );
        return `<?php\n$data = array(\n${arrayItems.join(",\n")}\n);`;
      } else if (arrayType === "numeric") {
        const arrayItems = options.map(
          (option: { text: string }, index: number) =>
            `  '${index + 1}' => __( '${option.text.replace(/'/g, "\\'")}', 'text-domain' )`
        );
        return `<?php\n$data = array(\n${arrayItems.join(",\n")}\n);`;
      } else {
        // associative
        const arrayItems = options.map(
          (option: Option) =>
            `  '${getKey(option).replace(/'/g, "\\'")}' => __( '${option.text.replace(/'/g, "\\'")}', 'text-domain' )`
        );
        return `<?php\n$data = array(\n${arrayItems.join(",\n")}\n);`;
      }
    } catch (error) {
      setError(
        `Error formatting WordPress output: ${error instanceof Error ? error.message : "Unknown error"}`
      );
      return "";
    }
  };

  /**
   * Handles the conversion process when the user submits the form.
   *
   * @returns {void}
   */
  const handleSubmit = (): void => {
    const parsedOptions = parseHtmlInput();
    if (parsedOptions) {
      const formatted = formatOutput(parsedOptions);
      setOutput(formatted);
    } else {
      setOutput("");
    }
  };

  /**
   * Clears only the input field while keeping other settings intact.
   *
   * @returns {void}
   */
  const handleClear = (): void => {
    setInput("");
    setError("");
    setOutput("");
  };

  /**
   * Resets all input fields and output.
   *
   * @returns {void}
   */
  const handleReset = (): void => {
    handleClear();
    setOutputFormat("json");
    setArrayType("associative");
    setUseSlugKeys(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <DropdownToArrayInput
          input={input}
          setInput={setInput}
          outputFormat={outputFormat}
          setOutputFormat={setOutputFormat}
          arrayType={arrayType}
          setArrayType={setArrayType}
          useSlugKeys={useSlugKeys}
          setUseSlugKeys={setUseSlugKeys}
          onSubmit={handleSubmit}
          onClear={handleClear}
          onReset={handleReset}
          error={error}
        />

        {output && <DropdownToArrayOutput output={output} />}
      </div>

      <div className="mt-16">
        <DropdownToArrayInfo />
      </div>
    </>
  );
};

export default DropdownToArrayTool;
