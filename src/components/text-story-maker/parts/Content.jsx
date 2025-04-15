import { useState, useRef, useEffect } from "react";

import PropTypes from "prop-types";
import sanitizeHtml from "sanitize-html";

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
 * Sanitizes the provided HTML string by allowing only specific tags and removing attributes.
 * @param {string} html - The HTML string to sanitize.
 * @returns {string} - The sanitized HTML string.
 */
const sanitize = (html) => {
  return sanitizeHtml(textToHtmlLines(html.trim()), {
    allowedTags: ["br", "div", "p", "span"], // Allow only specific tags
    allowedAttributes: {}, // No attributes allowed
  });
};

/**
 * Converts plain text with newlines into HTML with <div> tags.
 * This function is used to ensure that the text is properly formatted for HTML rendering.
 * It replaces newlines with <div> tags and handles empty lines.
 * If the line looks like an HTML tag, it won't be wrapped in a <div>.
 * @param {string} text - The plain text to convert.
 * @returns {string} - The HTML string with <div> tags.
 */
const textToHtmlLines = (text) => {
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
const renderHtml = (text) => text.trim();

/**
 * Content component for rendering editable text content with various styles and options.
 * @param {Object} props - The component props.
 * @param {Object} props.options - The options for styling and content.
 * @param {string} props.options.text - The text content to display.
 * @param {boolean} props.options.textBold - Whether the text should be bold.
 * @param {boolean} props.options.textItalic - Whether the text should be italicized.
 * @param {boolean} props.options.textUppercase - Whether the text should be uppercase.
 * @param {string} props.options.textAlign - The alignment of the text.
 * @param {string} props.options.textFont - The font of the text.
 * @param {string} props.options.textColor - The color of the text.
 * @param {string} props.options.bgType - The background type.
 * @param {string} props.options.bgColor - The background color.
 * @param {string} props.options.cardRatio - The aspect ratio of the card.
 * @param {Function} props.updateOption - Function to update the options.
 * @param {Function} props.activeTool - The currently active tool.
 * @param {Function} props.setActiveTool - Function to set the active tool.
 * @returns {JSX.Element} - The rendered Content component.
 */
const Content = ({ options, updateOption, activeTool, setActiveTool }) => {
  const [focused, setFocused] = useState(false); // State to track focus
  const contentRef = useRef(null);
  const isFallbackNeeded = false; // Placeholder for determining if fallback is needed
  const userInitiatedFocus = useRef(false); // Track if focus was user-initiated

  // Update the HTML content when options.text changes
  useEffect(() => {
    if (contentRef.current && !focused) {
      contentRef.current.innerHTML = renderHtml(options.text);
    }
  }, [options.text, focused]);

  // Add this effect to prevent unwanted focus
  useEffect(() => {
    const handleWindowClick = (e) => {
      console.log(e.target);
      // Only allow focus if user clicked directly on the content area
      if (contentRef.current && !contentRef.current.contains(e.target)) {
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
    <main
      aria-label="Story content area"
      id="main-content"
      role="main"
      className={cn(
        "relative z-10",
        "h-auto w-full",
        "origin-top-left transform"
      )}
    >
      <div
        aria-label={`Story canvas with ${options.cardRatio} aspect ratio`}
        className={cn(
          "relative z-10",
          "w-full overflow-hidden p-10",
          "flex flex-col items-center justify-center",
          getBgColorClass(options.bgType, options.bgColor),
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
              e.clipboardData.getData("text/html") ||
              e.clipboardData.getData("text/plain");

            const cleanHtml = renderHtml(sanitize(pastedText).trim());

            const selection = window.getSelection();
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
            getAlignmentClass(options.textAlign),
            getFontClass(options.textFont),
            getTextColorClass(options.textColor)
          )}
          style={getContentStyles(options)}
        />
        <span id="content-description" className="sr-only">
          Type or paste your story text here. Use the toolbar to format the
          text.
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
  );
};

Content.propTypes = {
  options: PropTypes.shape({
    text: PropTypes.string.isRequired, // The text content to display.
    textBold: PropTypes.bool.isRequired, // Whether the text should be bold.
    textItalic: PropTypes.bool.isRequired, // Whether the text should be italicized.
    textUppercase: PropTypes.bool.isRequired, // Whether the text should be uppercase.
    textAlign: PropTypes.string.isRequired, // The alignment of the text.
    textFont: PropTypes.string.isRequired, // The font of the text.
    textColor: PropTypes.string.isRequired, // The color of the text.
    bgType: PropTypes.string.isRequired, // The background type.
    bgColor: PropTypes.string.isRequired, // The background color.
    cardRatio: PropTypes.string.isRequired, // The aspect ratio of the card.
    boxOuterPadding: PropTypes.number.isRequired, // The outer padding of the box.
  }).isRequired,
  updateOption: PropTypes.func.isRequired, // Function to update the options.
  activeTool: PropTypes.string.isRequired, // The currently active tool.
  setActiveTool: PropTypes.func.isRequired, // Function to set the active tool.
};

export default Content;
