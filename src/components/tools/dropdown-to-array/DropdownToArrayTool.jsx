"use client";

import { useState } from "react";

import latinize from "latinize";
import slugify from "slugify";

import DropdownToArrayInfo from "./DropdownToArrayInfo";
import DropdownToArrayInput from "./DropdownToArrayInput";
import DropdownToArrayOutput from "./DropdownToArrayOutput";

/**
 * Main component for the Dropdown to Array tool.
 * Manages the state and functionality for converting HTML dropdown/select elements to arrays in various formats.
 *
 * @component
 * @returns {JSX.Element} The complete dropdown to array tool with input options, output display, and information
 */
const DropdownToArrayTool = () => {
  /**
   * The HTML select/dropdown input
   * @type {[string, function]} State and setter for HTML input
   */
  const [htmlInput, setHtmlInput] = useState("");

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
   * Gets the key to use for an option based on settings
   * @param {Object} option - The option element with value and text
   * @returns {string} The key to use
   */
  const getKey = (option) => {
    if (useSlugKeys) {
      return generateSlug(option.value);
    }
    return option.value;
  };

  /**
   * Parses the HTML input and extracts option values and text
   * @returns {Array|null} Array of extracted options or null if error
   */
  const parseHtmlInput = () => {
    try {
      setError("");

      // If input is empty, return error
      if (!htmlInput.trim()) {
        setError("Please enter HTML select/dropdown content");
        return null;
      }

      // Create a temporary DOM element to parse the HTML
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlInput.trim();

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
          text: option.textContent.trim(),
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
        text: option.textContent.trim(),
      }));
    } catch (err) {
      setError(`Error parsing HTML: ${err.message}`);
      return null;
    }
  };

  /**
   * Formats the parsed options into the selected output format
   * @param {Array} options - Parsed option elements with value and text
   * @returns {string} Formatted output based on selected options
   */
  const formatOutput = (options) => {
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
   * Formats options as JSON
   * @param {Array} options - Parsed option elements
   * @returns {string} JSON formatted output
   */
  const formatJsonOutput = (options) => {
    try {
      const numericArray = options.map((option, index) => ({
        id: index + 1,
        key: getKey(option),
        value: option.text,
      }));
      return JSON.stringify(numericArray, null, 2);
    } catch (err) {
      setError(`Error formatting JSON: ${err.message}`);
      return "";
    }
  };

  /**
   * Formats options as JavaScript array
   * @param {Array} options - Parsed option elements
   * @returns {string} JavaScript array formatted output
   */
  const formatJsArrayOutput = (options) => {
    try {
      if (arrayType === "simple") {
        const simpleArray = options.map(
          (option) => `  "${option.text.replace(/"/g, '\\"')}"`
        );
        return `const dropdownArray = [\n${simpleArray.join(",\n")}\n];`;
      } else if (arrayType === "numeric") {
        const numericArray = options.map(
          (option, index) =>
            `  {\n    "id": ${index + 1},\n    "value": "${option.text.replace(/"/g, '\\"')}"\n  }`
        );
        return `const dropdownArray = [\n${numericArray.join(",\n")}\n];`;
      } else {
        // associative
        const associativeArray = options.map(
          (option) =>
            `  {\n    "key": "${getKey(option).replace(/"/g, '\\"')}",\n    "value": "${option.text.replace(/"/g, '\\"')}"\n  }`
        );
        return `const dropdownArray = [\n${associativeArray.join(",\n")}\n];`;
      }
    } catch (err) {
      setError(`Error formatting JavaScript array: ${err.message}`);
      return "";
    }
  };

  /**
   * Formats options as JavaScript object
   * @param {Array} options - Parsed option elements
   * @returns {string} JavaScript object formatted output
   */
  const formatJsObjectOutput = (options) => {
    try {
      if (arrayType === "simple") {
        const objectItems = options.map(
          (option, index) =>
            `  "${index + 1}": "${option.text.replace(/"/g, '\\"')}"`
        );
        return `const dropdownObject = {\n${objectItems.join(",\n")}\n};`;
      } else if (arrayType === "numeric") {
        const objectItems = options.map(
          (option, index) =>
            `  "${index + 1}": "${option.text.replace(/"/g, '\\"')}"`
        );
        return `const dropdownObject = {\n${objectItems.join(",\n")}\n};`;
      } else {
        // associative
        const objectItems = options.map(
          (option) =>
            `  "${getKey(option).replace(/"/g, '\\"')}": "${option.text.replace(/"/g, '\\"')}"`
        );
        return `const dropdownObject = {\n${objectItems.join(",\n")}\n};`;
      }
    } catch (err) {
      setError(`Error formatting JavaScript object: ${err.message}`);
      return "";
    }
  };

  /**
   * Formats options as PHP array
   * @param {Array} options - Parsed option elements
   * @returns {string} PHP formatted output
   */
  const formatPhpOutput = (options) => {
    try {
      if (arrayType === "simple") {
        const arrayItems = options.map(
          (option) => `  '${option.text.replace(/'/g, "\\'")}'`
        );
        return `<?php\n$data = array(\n${arrayItems.join(",\n")}\n);`;
      } else if (arrayType === "numeric") {
        const arrayItems = options.map(
          (option, index) =>
            `  '${index + 1}' => '${option.text.replace(/'/g, "\\'")}'`
        );
        return `<?php\n$data = array(\n${arrayItems.join(",\n")}\n);`;
      } else {
        // associative
        const arrayItems = options.map(
          (option) =>
            `  '${getKey(option).replace(/'/g, "\\'")}' => '${option.text.replace(/'/g, "\\'")}'`
        );
        return `<?php\n$data = array(\n${arrayItems.join(",\n")}\n);`;
      }
    } catch (err) {
      setError(`Error formatting PHP array: ${err.message}`);
      return "";
    }
  };

  /**
   * Formats options as WordPress array for select fields
   * @param {Array} options - Parsed option elements
   * @returns {string} WordPress select options formatted output
   */
  const formatWordPressOutput = (options) => {
    try {
      if (arrayType === "simple") {
        const arrayItems = options.map(
          (option) =>
            `  __( '${option.text.replace(/'/g, "\\'")}', 'text-domain' )`
        );
        return `<?php\n$data = array(\n${arrayItems.join(",\n")}\n);`;
      } else if (arrayType === "numeric") {
        const arrayItems = options.map(
          (option, index) =>
            `  '${index + 1}' => __( '${option.text.replace(/'/g, "\\'")}', 'text-domain' )`
        );
        return `<?php\n$data = array(\n${arrayItems.join(",\n")}\n);`;
      } else {
        // associative
        const arrayItems = options.map(
          (option) =>
            `  '${getKey(option).replace(/'/g, "\\'")}' => __( '${option.text.replace(/'/g, "\\'")}', 'text-domain' )`
        );
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
    const parsedOptions = parseHtmlInput();
    if (parsedOptions) {
      const formatted = formatOutput(parsedOptions);
      setConvertedOutput(formatted);
    } else {
      setConvertedOutput("");
    }
  };

  /**
   * Resets all input fields and output
   */
  const handleReset = () => {
    setHtmlInput("");
    setOutputFormat("json");
    setArrayType("simple");
    setUseSlugKeys(false);
    setConvertedOutput("");
    setError("");
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <DropdownToArrayInput
          htmlInput={htmlInput}
          setHtmlInput={setHtmlInput}
          outputFormat={outputFormat}
          setOutputFormat={setOutputFormat}
          arrayType={arrayType}
          setArrayType={setArrayType}
          useSlugKeys={useSlugKeys}
          setUseSlugKeys={setUseSlugKeys}
          onConvert={handleConvert}
          onReset={handleReset}
        />
        <DropdownToArrayOutput output={convertedOutput} error={error} />
      </div>

      <div className="mt-16">
        <DropdownToArrayInfo />
      </div>
    </>
  );
};

export default DropdownToArrayTool;
