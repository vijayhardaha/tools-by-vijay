import { useState } from "react";

import domToImage from "dom-to-image";
import { saveAs } from "file-saver";
import { TbCloudDownload as DownloadToolIcon } from "react-icons/tb";

import Button from "@/components/text-story-maker/parts/header/HeaderIconBtn";
import { IUpdateOptionProps } from "@/components/text-story-maker/TextStoryMakerTool";
import { Dropdown, DropdownTrigger, DropdownContent } from "@/components/text-story-maker/ui";
import { cn } from "@/utils/classNameUtils";

/**
 * Interface for the DownloadImageTool component props.
 */
interface IDownloadImageToolProps extends IUpdateOptionProps {}

/**
 * Type definition for available sizes.
 */
type SizeKey = "fhd" | "2k" | "4k";

/**
 * Type definition for the size object.
 */
interface Size {
  width: number;
  label: string;
}

/**
 * Size options for downloading images.
 * Each size has a width and a label for display.
 */
const sizes: Record<SizeKey, Size> = {
  fhd: { width: 1080, label: "FHD" },
  "2k": { width: 1440, label: "2K" },
  "4k": { width: 2160, label: "4K" },
};

/**
 * DownloadImageTool component allows users to download the main content as an image
 * in various formats (JPEG, PNG) and resolutions (HD, FHD, 2K, 4K).
 */
const DownloadImageTool = ({ options, updateOption }: IDownloadImageToolProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");

  /**
   * Handles the change of the selected size option.
   *
   * @param {string} size - The selected size key (e.g., "hd", "fhd").
   */
  const handleSizeChange = (size: string) => {
    updateOption("downloadSize", size);
  };

  /**
   * Handles the download of the image in the specified format and size.
   *
   * @param {SizeKey} size - The selected size key (e.g., "hd", "fhd").
   * @param {Function} toggleDropdown - Function to toggle the dropdown visibility.
   */
  const handleDownload = (size: SizeKey, toggleDropdown: (isOpen: boolean) => void) => {
    const node = document.querySelector("#main-content");
    if (!node) return;

    const getSizeWidth = (size: SizeKey) => parseInt(sizes[size].width.toString(), 10) || 1080;

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

    const downloadFn = domToImage.toPng(node, options);

    downloadFn
      .then((dataUrl) => {
        saveAs(dataUrl, `text-story.png`);
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
                  <p className="mb-1 text-base font-semibold" id="size-selection">
                    Size:
                  </p>
                  <div
                    className="flex justify-evenly gap-2"
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
                          "relatve flex flex-1 shrink-0 items-center justify-center",
                          "rounded-lg px-2 py-1 text-base font-medium",
                          "cursor-pointer outline-none focus-visible:outline-none",
                          "transition-transform duration-300 ease-in-out active:scale-97",
                          options.downloadSize === size
                            ? "bg-accent-foreground text-neutral-900"
                            : "bg-white text-neutral-900 hover:bg-neutral-200"
                        )}
                        role="radio"
                        aria-checked={options.downloadSize === size}
                        aria-label={`${sizes[size as SizeKey].label} resolution`}
                      >
                        {sizes[size as SizeKey].label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className={cn(
                      "relatve flex w-full shrink-0 items-center justify-center",
                      "rounded-lg px-3 py-2 text-sm font-semibold",
                      "cursor-pointer outline-none focus-visible:outline-none",
                      "transition-transform duration-300 ease-in-out active:scale-97",
                      "bg-white text-neutral-900",
                      "hover:bg-accent-foreground hover:text-neutral-900"
                    )}
                    onClick={() => handleDownload(options.downloadSize as SizeKey, toggleDropdown)}
                    disabled={isDownloading}
                    aria-label={`Download in ${sizes[options.downloadSize as SizeKey].label} resolution`}
                    role="menuitem"
                  >
                    Download
                  </button>
                </div>
                {downloadError && (
                  <p className="mt-4 text-xs font-medium text-red-500" role="alert">
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

export default DownloadImageTool;
