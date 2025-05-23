"use client";

import { useState, useEffect } from "react";

import { PiNotePencilBold as EditIcon } from "react-icons/pi";

import { defaultOptions, IOptions } from "@/components/text-story-maker/constants/options";
import Content from "@/components/text-story-maker/parts/Content";
import Footer from "@/components/text-story-maker/parts/Footer";
import Header from "@/components/text-story-maker/parts/Header";
import Button from "@/components/text-story-maker/parts/header/HeaderIconBtn";
import ToolInfo from "@/components/text-story-maker/parts/ToolInfo";
import { cn } from "@/utils/classNameUtils";

/**
 * Interface for the update options function.
 */
export interface IUpdateOptionProps {
  options: IOptions;
  updateOption: (key: keyof IOptions, value: IOptions[keyof IOptions]) => void;
}

/**
 * TextStoryMakerTool component serves as the main container for the text story maker tool.
 * It manages the state of options and passes them to child components.
 *
 * @component
 * @returns {React.JSX.Element} The rendered TextStoryMakerTool component.
 */
const TextStoryMakerTool: React.FC = (): React.JSX.Element => {
  const [options, setOptions] = useState<IOptions>(defaultOptions);
  const [activeTool, setActiveTool] = useState<string>("");
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

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
  const updateOption = (key: keyof IOptions, value: IOptions[keyof IOptions]) => {
    setOptions((prevOptions) => {
      const updatedOptions = {
        ...prevOptions,
        [key]: value,
      };
      try {
        localStorage.setItem("textStoryMakerOptions", JSON.stringify(updatedOptions));
      } catch (error) {
        console.error("Failed to save options to local storage:", error);
      }
      return updatedOptions;
    });
  };

  return (
    <div className={cn("relative h-screen w-full bg-black/85", "flex flex-col")}>
      <Header
        options={options}
        updateOption={updateOption}
        activeTool={activeTool}
        setActiveTool={setActiveTool}
      />
      <Footer options={options} updateOption={updateOption} activeTool={activeTool} />
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
            <h3 id="dialog-title" className="mb-3 text-lg font-semibold text-white">
              Confirm New Story
            </h3>
            <p id="dialog-description" className="mb-4 text-neutral-300">
              Are you sure you want to create a new story? This will reset all current changes.
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
