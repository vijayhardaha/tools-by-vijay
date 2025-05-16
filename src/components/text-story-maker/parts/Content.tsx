import React, { useState, useRef, useEffect } from "react";

import sanitizeHtml from "sanitize-html";

import { IBgColors } from "@/components/text-story-maker/constants/bgColors";
import { IUpdateOptionProps } from "@/components/text-story-maker/TextStoryMakerTool";
import {
  getAlignmentClass,
  getBgColorClass,
  getContentStyles,
  getFontClass,
  getRatioClass,
  getTextColorClass,
  isEmptyText,
} from "@/components/text-story-maker/utils/styleUtils";
import { cn } from "@/utils/classNameUtils";

/**
 * Interface for the Content component props.
 */
interface IContentProps extends IUpdateOptionProps {
  activeTool: string;
  setActiveTool: (tool: string) => void;
}

/**
 * Sanitizes the provided HTML string by allowing only specific tags and removing attributes.
 * @param {string} html - The HTML string to sanitize.
 * @returns {string} - The sanitized HTML string.
 */
const sanitize = (html: string): string => {
  return sanitizeHtml(textToHtmlLines(html.trim()), {
    allowedTags: ["br", "div", "p", "span"],
    allowedAttributes: {},
  });
};

/**
 * Converts plain text with newlines into HTML with <div> tags.
 * @param {string} text - The plain text to convert.
 * @returns {string} - The HTML string with <div> tags.
 */
const textToHtmlLines = (text: string): string => {
  if (typeof text !== "string") return "";

  return text
    .split(/(?:\r\n|\r|\n)/)
    .map((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine === "") {
        return "<div><br/></div>";
      }

      // If the line looks like an HTML tag, don't wrap it
      if (/^<[^>]+>.*<\/[^>]+>$/.test(trimmedLine)) {
        return line;
      }

      return `<div>${line}</div>`;
    })
    .join("");
};

/**
 * Converts plain text with newlines into HTML with <br><br> tags.
 * @param {string} text - The plain text to convert.
 * @returns {string} - The HTML string with <br><br> tags.
 */
const renderHtml = (text: string): string => text.trim();

/**
 * Content component for rendering editable text content with various styles and options.
 * @param {ContentProps} props - The component props.
 * @returns {React.JSX.Element} - The rendered Content component.
 */
const Content: React.FC<IContentProps> = ({
  options,
  updateOption,
  activeTool,
  setActiveTool,
}: IContentProps): React.JSX.Element => {
  const [focused, setFocused] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const isFallbackNeeded: boolean = false;
  const userInitiatedFocus = useRef<boolean>(false);

  // Update the HTML content when options.text changes
  useEffect(() => {
    if (contentRef.current && !focused) {
      contentRef.current.innerHTML = renderHtml(options.text);
    }
  }, [options.text, focused]);

  // Add this effect to prevent unwanted focus
  useEffect(() => {
    const handleWindowClick = (e: MouseEvent | TouchEvent) => {
      // Only allow focus if user clicked directly on the content area
      if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
        userInitiatedFocus.current = false;
      } else {
        userInitiatedFocus.current = true;
      }
    };

    window.addEventListener("mousedown", handleWindowClick);
    window.addEventListener("touchstart", handleWindowClick);

    return () => {
      window.removeEventListener("mousedown", handleWindowClick);
      window.removeEventListener("touchstart", handleWindowClick);
    };
  }, []);

  return (
    <div
      className={cn({
        "flex h-full flex-col justify-center":
          options.cardRatio === "1/1" || options.cardRatio === "4/5",
      })}
    >
      <main
        aria-label="Story content area"
        id="main-content"
        role="main"
        className={cn("relative z-10", "h-auto w-full", "origin-top-left transform")}
      >
        <div
          aria-label={`Story canvas with ${options.cardRatio} aspect ratio`}
          className={cn(
            "relative z-10",
            "w-full overflow-hidden p-10",
            "flex flex-col items-center justify-center",
            getBgColorClass(options.bgType as keyof IBgColors, options.bgColor),
            getRatioClass(options.cardRatio)
          )}
          style={{
            padding: `calc(var(--spacing) * ${options.boxOuterPadding})`,
          }}
        >
          <div
            ref={contentRef}
            id="editable-content"
            role="textbox"
            contentEditable
            tabIndex={0}
            spellCheck="false"
            aria-multiline="true"
            aria-label="Edit story text content"
            aria-describedby="content-description"
            onFocus={(e) => {
              // Only set focus if it was user-initiated
              if (userInitiatedFocus.current) {
                setFocused(true);
                setActiveTool("text-editing");
              } else {
                // Programmatically blur to prevent unwanted focus
                e.target.blur();
              }
            }}
            onBlur={(e) => {
              if (focused) {
                console.log("blurred");
                setFocused(false);
                updateOption("text", sanitize(e.target.innerHTML).trim());
                if (activeTool === "text-editing") {
                  setActiveTool("");
                }
              }
            }}
            onPaste={(e) => {
              e.preventDefault();

              const pastedText =
                e.clipboardData.getData("text/html") || e.clipboardData.getData("text/plain");

              const cleanHtml = renderHtml(sanitize(pastedText).trim());

              const selection = window.getSelection();
              if (!selection) return;

              if (!selection.rangeCount) return;

              const range = selection.getRangeAt(0);
              range.deleteContents();

              const tempDiv = document.createElement("div");
              tempDiv.innerHTML = cleanHtml;

              const fragment = document.createDocumentFragment();
              let node;
              while ((node = tempDiv.firstChild)) {
                fragment.appendChild(node);
              }

              range.insertNode(fragment);
              selection.collapseToEnd();
            }}
            className={cn(
              "min-h-10 w-full min-w-1 [&>*]:min-w-1",
              "flex flex-col items-center justify-center outline-none",
              {
                "![&>*]:font-bold !font-bold": options.textBold,
                "![&>*]:italic !italic": options.textItalic,
                "![&>*]:uppercase !uppercase": options.textUppercase,
                "user-select-none": !focused,
                "h-full": isEmptyText(options.text) && !focused,
              },
              getAlignmentClass(options.textAlign) as string,
              getFontClass(options.textFont) as string,
              getTextColorClass(options.textColor) as string
            )}
            style={getContentStyles(options)}
          />
          <span id="content-description" className="sr-only">
            Type or paste your story text here. Use the toolbar to format the text.
          </span>
          {/* Add a hidden textarea fallback for problematic devices */}
          {isFallbackNeeded && (
            <textarea
              className="sr-only"
              value={options.text}
              onChange={(e) => updateOption("text", e.target.value)}
              aria-label="Fallback text input for story content"
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Content;
