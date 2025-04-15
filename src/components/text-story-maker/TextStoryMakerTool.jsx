"use client";

import { useState, useEffect } from "react";

import { PiNotePencilBold as EditIcon } from "react-icons/pi";

import { defaultOptions } from "@/components/text-story-maker/constants";
import Content from "@/components/text-story-maker/parts/Content";
import Footer from "@/components/text-story-maker/parts/Footer";
import Header from "@/components/text-story-maker/parts/Header";
import Button from "@/components/text-story-maker/parts/header/HeaderIconBtn";
import ToolInfo from "@/components/text-story-maker/parts/ToolInfo";
import { cn } from "@/utils/classNameUtils";

/**
 * TextStoryMakerTool component serves as the main container for the text story maker tool.
 * It manages the state of options and passes them to child components.
 *
 * @component
 * @returns {JSX.Element} The rendered TextStoryMakerTool component.
 */
const TextStoryMakerTool = () => {
  const [options, setOptions] = useState(defaultOptions);
  const [activeTool, setActiveTool] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  // Fetch options from local storage on load and merge with default options
  useEffect(() => {
    const savedOptions = localStorage.getItem("textStoryMakerOptions");
    if (savedOptions) {
      try {
        const parsedOptions = JSON.parse(savedOptions);
        setOptions(() => ({
          ...defaultOptions,
          ...parsedOptions,
        }));
      } catch (error) {
        console.error("Failed to parse options from local storage:", error);
      }
    }
  }, []);

  /**
   * Updates a specific option in the state and saves it to local storage.
   *
   * @param {string} key - The key of the option to update.
   * @param {*} value - The new value for the option.
   */
  const updateOption = (key, value) => {
    setOptions((prevOptions) => {
      const updatedOptions = {
        ...prevOptions,
        [key]: value,
      };
      try {
        localStorage.setItem(
          "textStoryMakerOptions",
          JSON.stringify(updatedOptions)
        );
      } catch (error) {
        console.error("Failed to save options to local storage:", error);
      }
      return updatedOptions;
    });
  };

  return (
    <div
      className={cn("relative h-screen w-full bg-black/85", "flex flex-col")}
    >
      {/**
       * Header component displays the header section of the tool.
       *
       * @param {Object} props - Component props.
       * @param {Object} props.options - Current options state.
       * @param {Function} props.updateOption - Function to update options.
       * @param {string} props.activeTool - Currently active tool.
       * @param {Function} props.setActiveTool - Function to set the active tool.
       */}
      <Header
        options={options}
        updateOption={updateOption}
        activeTool={activeTool}
        setActiveTool={setActiveTool}
      />

      {/**
       * Footer component displays the footer section of the tool.
       *
       * @param {Object} props - Component props.
       * @param {Object} props.options - Current options state.
       * @param {Function} props.updateOption - Function to update options.
       * @param {string} props.activeTool - Currently active tool.
       * @param {Function} props.setActiveTool - Function to set the active tool.
       */}
      <Footer
        options={options}
        updateOption={updateOption}
        activeTool={activeTool}
        setActiveTool={setActiveTool}
      />

      {/**
       * Content component displays the main content area of the tool.
       *
       * @param {Object} props - Component props.
       * @param {Object} props.options - Current options state.
       * @param {Function} props.updateOption - Function to update options.
       * @param {string} props.activeTool - Currently active tool.
       * @param {Function} props.setActiveTool - Function to set the active tool.
       */}
      <Content
        options={options}
        updateOption={updateOption}
        activeTool={activeTool}
        setActiveTool={setActiveTool}
      />

      {!activeTool && (
        <div className="absolute bottom-4 left-4 z-20">
          <Button
            icon={EditIcon}
            screenReaderText="Create New Story"
            onClick={() => setShowConfirm(true)}
            aria-label="Create a new text story"
          />
        </div>
      )}

      {/* Custom Tailwind Confirm Dialog */}
      {showConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <div className="mx-4 max-w-md rounded-3xl bg-neutral-800 p-6 shadow-lg">
            <h3
              id="dialog-title"
              className="mb-3 text-lg font-semibold text-white"
            >
              Confirm New Story
            </h3>
            <p id="dialog-description" className="mb-4 text-neutral-300">
              Are you sure you want to create a new story? This will reset all
              current changes.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="cursor-pointer rounded-xl bg-neutral-700 px-4 py-2 text-white transition-colors hover:bg-neutral-600"
                aria-label="Cancel creating new story"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setOptions(defaultOptions);
                  updateOption("text", "");
                  setShowConfirm(false);
                }}
                className="cursor-pointer rounded-xl bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-500"
                aria-label="Confirm creating new story and reset current changes"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {!activeTool && <ToolInfo />}
    </div>
  );
};

export default TextStoryMakerTool;
