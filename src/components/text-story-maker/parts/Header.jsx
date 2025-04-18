"use client";

import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import { CgArrowLongLeft as ArrowLeftIcon } from "react-icons/cg";
import { LuCheck as CheckIcon } from "react-icons/lu";
import { MdHideSource as PreviewIcon } from "react-icons/md";

import BackgroundFillOptions from "@/components/text-story-maker/parts/header/BackgroundFillOptions";
import DownloadImageTool from "@/components/text-story-maker/parts/header/DownloadImageTool";
import FrameSizeTool from "@/components/text-story-maker/parts/header/FrameSizeTool";
import Button from "@/components/text-story-maker/parts/header/HeaderIconBtn";
import TextOptionsTool from "@/components/text-story-maker/parts/header/TextOptionsTool";

/**
 * Header component for the text story maker.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Options for the text story maker.
 * @param {Function} props.updateOption - Function to update options.
 * @param {string} props.activeTool - Currently active tool.
 * @param {Function} props.setActiveTool - Function to set the active tool.
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = ({ options, updateOption, activeTool, setActiveTool }) => {
  const router = useRouter();

  return (
    <header
      className="xs:p-4 absolute top-0 right-0 z-40 w-full p-2"
      aria-label="Story maker toolbar"
    >
      {activeTool ? (
        <div className="flex items-center justify-end">
          {/**
           * Button component for closing the active tool.
           *
           * @param {Object} props - Component props.
           * @param {React.ElementType} props.icon - Icon to display in the button.
           * @param {string} props.screenReaderText - Text for screen readers.
           * @param {Function} props.onClick - Function to handle button click.
           */}
          <Button
            icon={CheckIcon}
            screenReaderText="Save changes and close active tool panel"
            onClick={() => setActiveTool("")}
          />
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between gap-2">
            {/**
             * Button component for navigating to the previous page.
             */}
            <Button
              icon={ArrowLeftIcon}
              screenReaderText="Return to main application page"
              onClick={() => router.push("/")}
            />
            <div className="ml-auto flex items-center gap-1.5" aria-label="Story editing tools">
              {/**
               * TextOptionsTool component for managing text options.
               *
               * @param {Object} props - Component props.
               * @param {string} props.activeTool - Currently active tool.
               * @param {Function} props.setActiveTool - Function to set the active tool.
               */}
              <TextOptionsTool activeTool={activeTool} setActiveTool={setActiveTool} />
              {/**
               * BackgroundFillOptions component for managing background fill options.
               */}
              <BackgroundFillOptions activeTool={activeTool} setActiveTool={setActiveTool} />
              {/**
               * FrameSizeTool component for managing frame size options.
               *
               * @param {Object} props - Component props.
               * @param {Object} props.options - Options for the text story maker.
               * @param {Function} props.updateOption - Function to update options.
               */}
              <FrameSizeTool options={options} updateOption={updateOption} />
              {/**
               * DownloadImageTool component for managing image download options.
               */}
              <DownloadImageTool options={options} updateOption={updateOption} />
              {/**
               * Button component for showing the preview.
               */}
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

Header.propTypes = {
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
  activeTool: PropTypes.string.isRequired,
  setActiveTool: PropTypes.func.isRequired,
};

export default Header;
