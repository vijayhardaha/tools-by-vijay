"use client";

import { useState } from "react";

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
  const [arrayType, setArrayType] = useState("simple");

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
      if (arrayType === "simple") {
        const simpleArray = options.map((option) => option.text);
        return JSON.stringify(simpleArray, null, 2);
      } else if (arrayType === "numeric") {
        const numericArray = options.map((option) => [
          option.value,
          option.text,
        ]);
        return JSON.stringify(numericArray, null, 2);
      } else {
        // associative
        const associativeArray = options.reduce((acc, option) => {
          acc[option.value] = option.text;
          return acc;
        }, {});
        return JSON.stringify(associativeArray, null, 2);
      }
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
          (option) => `"${option.text.replace(/"/g, '\\"')}"`
        );
        return `const dropdownArray = [\n  ${simpleArray.join(",\n  ")}\n];`;
      } else if (arrayType === "numeric") {
        const numericArray = options.map(
          (option) =>
            `  ["${option.value.replace(/"/g, '\\"')}", "${option.text.replace(/"/g, '\\"')}"]`
        );
        return `const dropdownArray = [\n${numericArray.join(",\n")}\n];`;
      } else {
        // associative
        const associativeArray = options.map(
          (option) =>
            `  "${option.value.replace(/"/g, '\\"')}": "${option.text.replace(/"/g, '\\"')}"`
        );
        return `const dropdownObject = {\n${associativeArray.join(",\n")}\n};`;
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
          (option, index) => `  ${index}: "${option.text.replace(/"/g, '\\"')}"`
        );
        return `const dropdownObject = {\n${objectItems.join(",\n")}\n};`;
      } else if (arrayType === "numeric") {
        const objectItems = options.map(
          (option, index) =>
            `  ${index}: { value: "${option.value.replace(/"/g, '\\"')}", text: "${option.text.replace(/"/g, '\\"')}" }`
        );
        return `const dropdownObject = {\n${objectItems.join(",\n")}\n};`;
      } else {
        // associative
        const objectItems = options.map(
          (option) =>
            `  "${option.value.replace(/"/g, '\\"')}": "${option.text.replace(/"/g, '\\"')}"`
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
        return `<?php\n$dropdown_array = [\n${arrayItems.join(",\n")}\n];`;
      } else if (arrayType === "numeric") {
        const arrayItems = options.map(
          (option) =>
            `  ['${option.value.replace(/'/g, "\\'")}', '${option.text.replace(/'/g, "\\'")}'`
        );
        return `<?php\n$dropdown_array = [\n${arrayItems.join("],\n")}\n]];`;
      } else {
        // associative
        const arrayItems = options.map(
          (option) =>
            `  '${option.value.replace(/'/g, "\\'")}' => '${option.text.replace(/'/g, "\\'")}'`
        );
        return `<?php\n$dropdown_array = [\n${arrayItems.join(",\n")}\n];`;
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
          (option) => `  '${option.text.replace(/'/g, "\\'")}'`
        );
        return `<?php\n$dropdown_options = [\n${arrayItems.join(",\n")}\n];`;
      } else if (arrayType === "numeric") {
        const arrayItems = options.map(
          (option) =>
            `  '${option.value.replace(/'/g, "\\'")}' => '${option.text.replace(/'/g, "\\'")}'`
        );
        return `<?php\n$dropdown_options = [\n${arrayItems.join(",\n")}\n];\n\n// Example usage in a field definition\n$fields[] = [\n  'type' => 'select',\n  'name' => 'dropdown_field',\n  'options' => $dropdown_options,\n];`;
      } else {
        // associative
        const arrayItems = options.map(
          (option) =>
            `  '${option.value.replace(/'/g, "\\'")}' => '${option.text.replace(/'/g, "\\'")}'`
        );
        return `<?php\n$dropdown_options = [\n${arrayItems.join(",\n")}\n];\n\n// Example usage with add_settings_field\nadd_settings_field(\n  'dropdown_field',\n  'Dropdown Field Label',\n  'my_dropdown_callback',\n  'my_page',\n  'my_section',\n  ['options' => $dropdown_options]\n);`;
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
