"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import domToImage from "dom-to-image";
import PropTypes from "prop-types";
import { CgArrowLongLeft as ArrowLeftIcon } from "react-icons/cg";
import { LuCheck as CheckIcon } from "react-icons/lu";
import { PiPaintBrushBroadFill as BgToolIcon } from "react-icons/pi";
import { PiCheckCircleFill as CheckFillIcon } from "react-icons/pi";
import { TbFrame as FrameToolIcon } from "react-icons/tb";
import { TbCloudDownload as DownloadToolIcon } from "react-icons/tb";
import { TbAbc as TextToolIcon } from "react-icons/tb";

import { cardRatios } from "@/components/text-story-maker/constants";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  IconButton,
} from "@/components/text-story-maker/ui";
import { cn } from "@/lib/utils";

/**
 * Button component that wraps the IconButton with predefined styles.
 *
 * @param {Object} props - Component props.
 * @param {React.ElementType} props.icon - The icon to be displayed inside the button.
 * @param {React.ElementType} props.className - Additional classes for the button.
 * @returns {JSX.Element} The rendered Button component.
 */
const Button = ({ icon, className, ...props }) => (
  <IconButton
    icon={icon}
    className={cn("size-14 rounded-full bg-neutral-900 text-white", className)}
    iconClassName="size-7"
    {...props}
  />
);

Button.propTypes = {
  icon: PropTypes.elementType.isRequired,
  className: PropTypes.string,
};

const FrameComponent = ({ options, updateOption }) => {
  return (
    <Dropdown>
      {({ isOpen, toggleDropdown }) => (
        <>
          <DropdownTrigger onClick={toggleDropdown}>
            <Button icon={FrameToolIcon} screenReaderText="Frame Options" />
          </DropdownTrigger>
          <DropdownContent isOpen={isOpen}>
            {cardRatios.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => updateOption("cardRatio", value)}
                className={cn(
                  "inline-flex shrink-0 items-center justify-start",
                  "w-full py-2 text-base whitespace-nowrap",
                  "cursor-pointer disabled:pointer-events-none disabled:opacity-50",
                  "outline-none focus-visible:outline-none"
                )}
              >
                {label}
                {options.cardRatio === value && (
                  <CheckFillIcon className="text-accent-foreground ml-2 size-6" />
                )}
              </button>
            ))}
          </DropdownContent>
        </>
      )}
    </Dropdown>
  );
};

FrameComponent.propTypes = {
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
};

const DownloadComponent = ({ options, updateOption }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");

  const sizes = {
    hd: { width: 720, label: "HD" },
    fhd: { width: 1080, label: "FHD" },
    "2k": { width: 1440, label: "2K" },
    "4k": { width: 2160, label: "4K" },
  };

  const handleSizeChange = (size) => {
    updateOption("downloadSize", size);
  };

  const handleDownload = (format, size) => {
    const node = document.querySelector("#main-content");
    if (!node) return;

    updateOption("downloadFormat", format);

    const getSizeWidth = (size) => parseInt(sizes[size].width, 10) || 1080;

    const rect = node.getBoundingClientRect();
    const scale = getSizeWidth(size) / rect.width;
    const options = {
      quality: 1,
      width: rect.width * scale,
      height: rect.height * scale,
      style: {
        scale: `${scale}`,
      },
    };

    setIsDownloading(true);
    setDownloadError("");

    const downloadFn =
      format === "jpeg"
        ? domToImage.toJpeg(node, options)
        : domToImage.toPng(node, options);

    downloadFn
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `text-story.${format}`;
        link.click();
      })
      .catch(() => {
        setDownloadError("Download failed");
      })
      .finally(() => {
        setIsDownloading(false);
      });
  };

  return (
    <>
      <Dropdown>
        {({ isOpen, toggleDropdown }) => (
          <>
            <DropdownTrigger onClick={toggleDropdown}>
              <Button
                icon={DownloadToolIcon}
                screenReaderText="Download Image"
              />
            </DropdownTrigger>
            <DropdownContent isOpen={isOpen}>
              <div
                className={cn("pt-1 pb-2 text-white", {
                  "pointer-events-none": isDownloading,
                })}
              >
                <div className="mb-4">
                  <p className="mb-1 text-base font-semibold">Size:</p>
                  <div className="flex gap-2">
                    {Object.keys(sizes).map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => handleSizeChange(size)}
                        disabled={isDownloading}
                        className={cn(
                          "relatve flex shrink-0 items-center justify-center",
                          "rounded-lg px-3 py-1 text-base font-medium",
                          "cursor-pointer outline-none focus-visible:outline-none",
                          "transition-transform duration-300 ease-in-out active:scale-97",
                          options.downloadSize === size
                            ? "bg-accent-foreground text-neutral-900"
                            : "bg-white text-neutral-900 hover:bg-neutral-200"
                        )}
                      >
                        {sizes[size].label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-base font-semibold">Download:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {["JPEG", "PNG"].map((format) => (
                      <button
                        key={format}
                        type="button"
                        className={cn(
                          "relatve flex shrink-0 items-center justify-center",
                          "rounded-lg px-3 py-2 text-sm font-semibold",
                          "cursor-pointer outline-none focus-visible:outline-none",
                          "transition-transform duration-300 ease-in-out active:scale-97",
                          "bg-white text-neutral-900",
                          "hover:bg-accent-foreground hover:text-neutral-900"
                        )}
                        onClick={() =>
                          handleDownload(
                            format.toLowerCase(),
                            options.downloadSize
                          )
                        }
                        disabled={isDownloading}
                      >
                        {format}
                      </button>
                    ))}
                  </div>
                </div>
                {downloadError && (
                  <p className="mt-4 text-xs font-medium text-red-500">
                    {downloadError}
                  </p>
                )}

                {isDownloading && (
                  <p className="mt-4 text-sm font-medium text-white">
                    Downloading Image...
                  </p>
                )}
              </div>
            </DropdownContent>
          </>
        )}
      </Dropdown>
    </>
  );
};

DownloadComponent.propTypes = {
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
};

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

  if (activeTool) {
    return (
      <header className="absolute top-0 right-0 z-40 p-2 px-4">
        <Button
          icon={CheckIcon}
          screenReaderText="Close Active Tool"
          onClick={() => setActiveTool("")}
        />
      </header>
    );
  }

  return (
    <header className="absolute top-0 left-0 z-40 w-full p-2 px-4">
      <div className="flex items-center justify-between gap-4">
        <Button
          icon={ArrowLeftIcon}
          screenReaderText="Go to Previous Page"
          onClick={() => router.push("/")}
        />
        <div className="ml-auto flex items-center gap-2">
          <Button
            icon={TextToolIcon}
            screenReaderText="Text Options"
            className={cn({
              "bg-accent-foreground text-neutral-900": activeTool === "text",
            })}
            onClick={() =>
              setActiveTool((prev) => (prev !== "text" ? "text" : ""))
            }
          />
          <Button
            icon={BgToolIcon}
            screenReaderText="Background Fill Options"
            className={cn({
              "bg-accent-foreground text-neutral-900":
                activeTool === "background",
            })}
            onClick={() =>
              setActiveTool((prev) =>
                prev !== "background" ? "background" : ""
              )
            }
          />

          <FrameComponent options={options} updateOption={updateOption} />
          <DownloadComponent options={options} updateOption={updateOption} />
        </div>
      </div>
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
