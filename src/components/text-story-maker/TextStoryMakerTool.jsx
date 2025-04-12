"use client";

import { useState, useEffect } from "react";

import { defaultOptions } from "@/components/text-story-maker/constants";
import Footer from "@/components/text-story-maker/Footer";
import Header from "@/components/text-story-maker/Header";
import MainContent from "@/components/text-story-maker/MainContent";
import { cn } from "@/lib/utils";

/**
 * TextStoryMakerTool component serves as the main container for the text story maker tool.
 * It manages the state of options and passes them to child components.
 *
 * @component
 * @returns {JSX.Element} The rendered TextStoryMakerTool component.
 */
const TextStoryMakerTool = () => {
  const [options, setOptions] = useState(defaultOptions);
  const [toolbarVisible, setToolbarVisible] = useState("");

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
      className={cn(
        "relative h-screen w-full bg-black",
        "flex flex-col items-center justify-center"
      )}
    >
      <Header
        options={options}
        updateOption={updateOption}
        toolbarVisible={toolbarVisible}
        setToolbarVisible={setToolbarVisible}
      />
      <Footer
        options={options}
        updateOption={updateOption}
        toolbarVisible={toolbarVisible}
        setToolbarVisible={setToolbarVisible}
      />
      <MainContent options={options} updateOption={updateOption} />
    </div>
  );
};

export default TextStoryMakerTool;
