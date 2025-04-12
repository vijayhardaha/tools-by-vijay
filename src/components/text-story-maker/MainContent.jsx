import { useState } from "react"; // Import useState

import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable"; // Import the package
import sanitizeHtml from "sanitize-html"; // Import sanitizeHtml

import {
  getAlignmentClass,
  getBgColorClass,
  getContentStyles,
  getFontClass,
  getRatioClass,
  getTextColorClass,
} from "@/components/text-story-maker/lib/utils";
import { cn } from "@/lib/utils";

/**
 * Sanitizes the provided HTML string by allowing only specific tags and removing attributes.
 * @param {string} html - The HTML string to sanitize.
 * @returns {string} - The sanitized HTML string.
 */
const santize = (html) => {
  return sanitizeHtml(html, {
    allowedTags: ["strong", "b", "em", "i", "br"], // Allow only specific tags
    allowedAttributes: {}, // No attributes allowed
    transformTags: {
      div: "br",
    },
  })
    .replace(/<\/?div[^>]*>/g, "")
    .trim();
};

/**
 * Converts plain text with newlines into HTML with <br><br> tags.
 * @param {string} text - The plain text to convert.
 * @returns {string} - The HTML string with <br><br> tags.
 */
const renderHtml = (text) =>
  text
    .split("\n")
    .map((line) => `${line}`)
    .join("<br>"); // Convert text to multiple <p> elements

/**
 * MainContent component for rendering editable text content with various styles and options.
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
 * @returns {JSX.Element} - The rendered MainContent component.
 */
const MainContent = ({ options, updateOption }) => {
  const [focused, setFocused] = useState(false); // State to track focus

  return (
    <main
      aria-label="Main content"
      id="main-content"
      role="main"
      className={cn(
        "relative z-10",
        "h-auto w-full",
        "origin-top-left transform"
      )}
    >
      <div
        className={cn(
          "relative z-10",
          "w-full overflow-hidden p-10",
          "flex flex-col items-center justify-center",
          getBgColorClass(options.bgType, options.bgColor),
          getRatioClass(options.cardRatio)
        )}
      >
        <ContentEditable
          id="editable-content"
          tagName="div"
          html={renderHtml(options.text)}
          onBlur={(e) => {
            if (e.relatedTarget && e.relatedTarget.id === "editable-content") {
              return; // Prevent blur if focus is still within the editable content
            }
            if (
              e.target.innerHTML.trim() === "" &&
              e.target.id === "editable-content"
            ) {
              e.target.focus(); // Refocus if the content is empty and id is "editable-content"
              return;
            }
            setFocused(false); // Set focused to false on blur

            updateOption("text", santize(e.target.innerHTML));
          }}
          onFocus={() => setFocused(true)} // Set focused to true on focus
          onPaste={(e) => {
            e.preventDefault(); // Prevent default paste behavior
            const pastedText =
              e.clipboardData.getData("text/html") ||
              e.clipboardData.getData("text/plain");
            document.execCommand(
              "insertHTML",
              false,
              renderHtml(santize(pastedText))
            ); // Insert sanitized HTML
          }}
          tabIndex={0} // Make the element focusable
          className={cn(
            "min-h-10 min-w-1 [&>*]:min-w-1",
            "outline-none",
            {
              "![&>*]:font-bold !font-bold": options.textBold,
              "![&>*]:italic !italic": options.textItalic,
              "![&>*]:uppercase !uppercase": options.textUppercase,
              "inline-flex h-full w-full flex-col items-start justify-center":
                !sanitizeHtml(options.text, {
                  allowedTags: [],
                  allowedAttributes: {},
                }) && !focused,
            },
            getAlignmentClass(options.textAlign),
            getFontClass(options.textFont),
            getTextColorClass(options.textColor)
          )}
          style={getContentStyles(options)}
        />
      </div>
    </main>
  );
};

MainContent.propTypes = {
  options: PropTypes.object.isRequired,
  updateOption: PropTypes.func.isRequired,
};

export default MainContent;
