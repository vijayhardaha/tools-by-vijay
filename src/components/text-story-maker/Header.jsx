"use client";

import { useState } from "react";

import domToImage from "dom-to-image";
import PropTypes from "prop-types";
import { PiTextAa as AaIcon } from "react-icons/pi";
import { PiResize as SizeIcon } from "react-icons/pi";
import { PiPaintBucket as BgFillIcon } from "react-icons/pi";
import { PiCheckCircleFill as CheckFillIcon } from "react-icons/pi";
import { PiDownloadSimple as DownloadIcon } from "react-icons/pi";

import { cardRatios } from "@/components/text-story-maker/constants/cardRatios";
import Dropdown, {
  DropdownTrigger,
  DropdownContent,
} from "@/components/text-story-maker/ui/Dropdown";
import IconButton from "@/components/text-story-maker/ui/IconButton";
import { cn } from "@/lib/utils";

import { getFontClass } from "./lib/fonts";

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
    className={cn(
      "hover:bg-accent-foreground bg-neutral-100 text-neutral-800 hover:text-neutral-800",
      className
    )}
    {...props}
  />
);

Button.propTypes = {
  icon: PropTypes.elementType.isRequired,
  className: PropTypes.string,
};

/**
 * DropDownAction component for rendering individual dropdown options.
 *
 * @param {Object} props - Component props.
 * @param {string} props.label - The label for the button.
 * @param {boolean} props.active - Whether the option is active.
 * @returns {JSX.Element} The rendered DropDownAction component.
 */
const DropDownAction = ({ label, active, ...props }) => (
  <button
    type="button"
    className={cn(
      "inline-flex shrink-0 items-center justify-start whitespace-nowrap",
      "text-xs font-medium",
      "w-full rounded-lg",
      "p-2",
      "text-neutral-900 hover:bg-neutral-200",
      "cursor-pointer disabled:pointer-events-none disabled:opacity-50",
      "outline-none focus-visible:outline-none",
      "transition-all"
    )}
    {...props}
  >
    {label}
    {active && <CheckFillIcon className="ml-1 text-green-500" />}
  </button>
);

DropDownAction.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

/**
 * Header component for the text story maker.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Options for the text story maker.
 * @param {Function} props.updateOption - Function to update options.
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = ({
  options,
  updateOption,
  toolbarVisible,
  setToolbarVisible,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");

  const handleSizeSelect = (size) => {
    updateOption("cardRatio", size);
  };

  const handleDownloadSizeSelect = (size) => {
    updateOption("downloadSize", size);
  };

  const handleDownload = (format, size) => {
    const node = document.querySelector("#main-content");
    if (!node) return;

    updateOption("downloadFormat", format);

    const rect = node.getBoundingClientRect();
    const scale = (1080 / rect.width) * parseInt(size, 10);
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
    <header className="absolute top-0 left-0 z-20 h-auto w-full bg-neutral-800/20 p-2 px-4 text-white backdrop-blur-sm">
      <div className="flex items-center justify-between gap-2">
        <div className="inline-flex flex-col items-start">
          <h1
            className={cn(
              "mb-0 text-lg leading-normal font-semibold tracking-wide",
              getFontClass("bebas_neue")
            )}
          >
            Text Story Maker
          </h1>
          <p
            className={cn(
              "text-accent-foreground -mt-2 text-sm leading-normal",
              getFontClass("caveat")
            )}
          >
            A tool by Vijay Hardaha
          </p>
        </div>
        <div className="flex items-center justify-end gap-1.5">
          <div className="relative">
            <Button
              icon={AaIcon}
              srText="Text Options"
              className={cn({
                "bg-accent-foreground text-neutral-900":
                  toolbarVisible === "text",
              })}
              onClick={() =>
                setToolbarVisible((prev) => (prev !== "text" ? "text" : ""))
              }
            />
          </div>
          <div className="relative">
            <Button
              icon={BgFillIcon}
              srText="Background Fill Options"
              className={cn({
                "bg-accent-foreground text-neutral-900":
                  toolbarVisible === "background",
              })}
              onClick={() =>
                setToolbarVisible((prev) =>
                  prev !== "background" ? "background" : ""
                )
              }
            />
          </div>
          <div className="relative">
            <Dropdown>
              {({ isOpen, toggleDropdown }) => (
                <>
                  <DropdownTrigger onClick={toggleDropdown}>
                    <Button icon={SizeIcon} srText="Size Options" />
                  </DropdownTrigger>
                  <DropdownContent isOpen={isOpen}>
                    {cardRatios.map(({ value, label }) => (
                      <DropDownAction
                        key={value}
                        label={label}
                        active={options.cardRatio === value}
                        onClick={() => handleSizeSelect(value)}
                      />
                    ))}
                  </DropdownContent>
                </>
              )}
            </Dropdown>
          </div>
          <Dropdown>
            {({ isOpen, toggleDropdown }) => (
              <>
                <DropdownTrigger onClick={toggleDropdown}>
                  <Button icon={DownloadIcon} srText="Download Image" />
                </DropdownTrigger>
                <DropdownContent isOpen={isOpen}>
                  <div
                    className={cn({
                      "pointer-events-none opacity-50": isDownloading,
                    })}
                  >
                    <div className="mb-2">
                      <p className="mb-1 text-xs font-semibold text-neutral-700">
                        Size:
                      </p>
                      <div className="flex gap-1">
                        {["1x", "2x", "3x"].map((size) => (
                          <button
                            key={size}
                            type="button"
                            className={cn(
                              "relatve flex shrink-0 items-center justify-center",
                              "rounded-md px-3 py-1 text-xs font-medium",
                              "cursor-pointer outline-none focus-visible:outline-none",
                              "transition-transform duration-300 ease-in-out active:scale-97",
                              options.downloadSize === size
                                ? "bg-neutral-900 text-neutral-100"
                                : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
                            )}
                            onClick={() => handleDownloadSizeSelect(size)}
                            disabled={isDownloading}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold text-neutral-700">
                        Download:
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {["JPEG", "PNG"].map((format) => (
                          <button
                            key={format}
                            type="button"
                            className={cn(
                              "relatve flex shrink-0 items-center justify-center",
                              "rounded-md px-3 py-1 text-xs font-semibold",
                              "cursor-pointer outline-none focus-visible:outline-none",
                              "transition-transform duration-300 ease-in-out active:scale-97",
                              "hover:bg-accent-foreground bg-neutral-900 text-neutral-100 hover:text-neutral-900"
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
                      <p className="mt-2 text-xs font-medium text-red-500">
                        {downloadError}
                      </p>
                    )}

                    {isDownloading && (
                      <p className="mt-2 text-xs font-medium text-neutral-600">
                        Downloading...
                      </p>
                    )}
                  </div>
                </DropdownContent>
              </>
            )}
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
  toolbarVisible: PropTypes.string.isRequired,
  setToolbarVisible: PropTypes.func.isRequired,
};

export default Header;
