"use client";

import { useRouter } from "next/navigation";

import PropTypes from "prop-types";
import { CgArrowLongLeft as ArrowLeftIcon } from "react-icons/cg";
import { LuCheck as CheckIcon } from "react-icons/lu";

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
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = ({ options, updateOption, activeTool, setActiveTool }) => {
  const router = useRouter();

  return (
    <header className="absolute top-0 right-0 z-40 w-full p-2 px-4">
      {activeTool ? (
        <div className="flex items-center justify-end">
          <Button
            icon={CheckIcon}
            screenReaderText="Close Active Tool"
            onClick={() => setActiveTool("")}
          />
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between gap-4">
            <Button
              icon={ArrowLeftIcon}
              screenReaderText="Go to Previous Page"
              onClick={() => router.push("/")}
            />
            <div className="ml-auto flex items-center gap-2">
              <TextOptionsTool
                activeTool={activeTool}
                setActiveTool={setActiveTool}
              />
              <BackgroundFillOptions
                activeTool={activeTool}
                setActiveTool={setActiveTool}
              />
              <FrameSizeTool options={options} updateOption={updateOption} />
              <DownloadImageTool
                options={options}
                updateOption={updateOption}
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
