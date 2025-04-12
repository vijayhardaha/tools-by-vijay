"use client";

import { useState, useEffect } from "react";

import { defaultOptions } from "@/components/text-story-maker/constants";
import Content from "@/components/text-story-maker/parts/Content";
import Footer from "@/components/text-story-maker/parts/Footer";
import Header from "@/components/text-story-maker/parts/Header";
import ToolInfo from "@/components/text-story-maker/parts/ToolInfo";
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
  const [activeTool, setActiveTool] = useState("");

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
      className={cn("relative h-screen w-full bg-neutral-900", "flex flex-col")}
    >
      <Header
        options={options}
        updateOption={updateOption}
        activeTool={activeTool}
        setActiveTool={setActiveTool}
      />

      <Footer
        options={options}
        updateOption={updateOption}
        activeTool={activeTool}
        setActiveTool={setActiveTool}
      />

      <div className="overflow-hidden rounded-b-4xl">
        <Content options={options} updateOption={updateOption} />
      </div>

      {!activeTool && <ToolInfo />}
    </div>
  );
};

export default TextStoryMakerTool;
