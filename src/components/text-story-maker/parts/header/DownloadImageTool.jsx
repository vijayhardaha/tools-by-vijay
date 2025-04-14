import { useState } from "react";

import domToImage from "dom-to-image";
import { saveAs } from "file-saver";
import PropTypes from "prop-types";
import { TbCloudDownload as DownloadToolIcon } from "react-icons/tb";

import Button from "@/components/text-story-maker/parts/header/HeaderIconBtn";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
} from "@/components/text-story-maker/ui";
import { cn } from "@/utils/classNameUtils";

/**
 * DownloadImageTool component allows users to download the main content as an image
 * in various formats (JPEG, PNG) and resolutions (HD, FHD, 2K, 4K).
 *
 * @param {Object} props - Component props.
 * @param {Object} props.options - Options for the download tool.
 * @param {string} props.options.downloadSize - Selected download size (e.g., "hd", "fhd").
 * @param {string} props.options.downloadFormat - Selected download format (e.g., "jpeg", "png").
 * @param {Function} props.updateOption - Function to update the selected options.
 * @returns {JSX.Element} The rendered component.
 */
const DownloadImageTool = ({ options, updateOption }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");

  /**
   * Available sizes for download.
   * Each size has a width and a label for display.
   */
  const sizes = {
    hd: { width: 720, label: "HD" },
    fhd: { width: 1080, label: "FHD" },
    "2k": { width: 1440, label: "2K" },
    "4k": { width: 2160, label: "4K" },
  };

  /**
   * Handles the change of the selected size option.
   *
   * @param {string} size - The selected size key (e.g., "hd", "fhd").
   */
  const handleSizeChange = (size) => {
    updateOption("downloadSize", size);
  };

  /**
   * Handles the download of the image in the specified format and size.
   *
   * @param {string} format - The image format ("jpeg" or "png").
   * @param {string} size - The selected size key (e.g., "hd", "fhd").
   * @param {Function} toggleDropdown - Function to toggle the dropdown visibility.
   */
  const handleDownload = (format, size, toggleDropdown) => {
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
        saveAs(dataUrl, `text-story.${format}`);
        toggleDropdown(false);
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
                screenReaderText="Download Image Options"
                aria-expanded={isOpen}
                aria-haspopup="true"
              />
            </DropdownTrigger>
            <DropdownContent isOpen={isOpen}>
              <div
                className={cn("pt-1 pb-2 text-white", {
                  "pointer-events-none": isDownloading,
                })}
                role="menu"
                aria-label="Download options"
              >
                <div className="mb-4">
                  <p
                    className="mb-1 text-base font-semibold"
                    id="size-selection"
                  >
                    Size:
                  </p>
                  <div
                    className="flex gap-2"
                    role="radiogroup"
                    aria-labelledby="size-selection"
                  >
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
                        role="radio"
                        aria-checked={options.downloadSize === size}
                        aria-label={`${sizes[size].label} resolution`}
                      >
                        {sizes[size].label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p
                    className="mb-1 text-base font-semibold"
                    id="format-selection"
                  >
                    Download:
                  </p>
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
                            options.downloadSize,
                            toggleDropdown
                          )
                        }
                        disabled={isDownloading}
                        aria-label={`Download as ${format} in ${sizes[options.downloadSize].label} resolution`}
                        role="menuitem"
                      >
                        {format}
                      </button>
                    ))}
                  </div>
                </div>
                {downloadError && (
                  <p
                    className="mt-4 text-xs font-medium text-red-500"
                    role="alert"
                  >
                    {downloadError}
                  </p>
                )}

                {isDownloading && (
                  <p
                    className="mt-4 text-sm font-medium text-white"
                    aria-live="polite"
                    role="status"
                  >
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

DownloadImageTool.propTypes = {
  options: PropTypes.shape({
    downloadSize: PropTypes.string.isRequired,
    downloadFormat: PropTypes.string.isRequired,
  }).isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default DownloadImageTool;
