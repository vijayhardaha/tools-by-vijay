"use client";

import React from "react";

import { useRouter } from "next/navigation";
import { CgArrowLongLeft as ArrowLeftIcon } from "react-icons/cg";
import { LuCheck as CheckIcon } from "react-icons/lu";
import { MdHideSource as PreviewIcon } from "react-icons/md";

import BackgroundFillOptions from "@/components/text-story-maker/parts/header/BackgroundFillOptions";
import DownloadImageTool from "@/components/text-story-maker/parts/header/DownloadImageTool";
import FrameSizeTool from "@/components/text-story-maker/parts/header/FrameSizeTool";
import Button from "@/components/text-story-maker/parts/header/HeaderIconBtn";
import TextOptionsTool from "@/components/text-story-maker/parts/header/TextOptionsTool";
import { IUpdateOptionProps } from "@/components/text-story-maker/TextStoryMakerTool";

/**
 * Interface for the Header component props.
 */
interface IHeaderProps extends IUpdateOptionProps {
  activeTool: string;
  setActiveTool: (tool: string) => void;
}

/**
 * Header component for the text story maker.
 *
 * @param {IHeaderProps} props - Component props.
 * @returns {React.JSX.Element} The rendered Header component.
 */
const Header: React.FC<IHeaderProps> = ({
  options,
  updateOption,
  activeTool,
  setActiveTool,
}: IHeaderProps): React.JSX.Element => {
  const router = useRouter();

  return (
    <header
      className="xs:p-4 absolute top-0 right-0 z-40 w-full p-2"
      aria-label="Story maker toolbar"
    >
      {activeTool ? (
        <div className="flex items-center justify-end">
          <Button
            icon={CheckIcon}
            screenReaderText="Save changes and close active tool panel"
            onClick={() => setActiveTool("")}
          />
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between gap-2">
            <Button
              icon={ArrowLeftIcon}
              screenReaderText="Return to main application page"
              onClick={() => router.push("/")}
            />
            <div className="ml-auto flex items-center gap-1.5" aria-label="Story editing tools">
              <TextOptionsTool activeTool={activeTool} setActiveTool={setActiveTool} />
              <BackgroundFillOptions activeTool={activeTool} setActiveTool={setActiveTool} />
              <FrameSizeTool options={options} updateOption={updateOption} />
              <DownloadImageTool options={options} updateOption={updateOption} />
              <Button
                icon={PreviewIcon}
                screenReaderText="Show preview of your story without editing controls"
                onClick={() => setActiveTool("preview")}
              />
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
