"use client";

import { useState } from "react";

import { defaultOptions } from "@/components/text-story-maker/constants/options";
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

  /**
   * Updates a specific option in the state.
   *
   * @param {string} key - The key of the option to update.
   * @param {*} value - The new value for the option.
   */
  const updateOption = (key, value) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [key]: value,
    }));
  };

  return (
    <div className={cn("relative h-screen w-full bg-black")}>
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
