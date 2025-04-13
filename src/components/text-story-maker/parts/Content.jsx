import { useState } from "react";

import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";

import {
  getAlignmentClass,
  getBgColorClass,
  getContentStyles,
  getFontClass,
  getRatioClass,
  getTextColorClass,
  isEmptyText,
} from "@/components/text-story-maker/lib/utils";
import { cn } from "@/lib/utils";

/**
 * Sanitizes the provided HTML string by allowing only specific tags and removing attributes.
 * @param {string} html - The HTML string to sanitize.
 * @returns {string} - The sanitized HTML string.
 */
const sanitize = (html) => {
  return sanitizeHtml(html, {
    allowedTags: ["strong", "b", "em", "i", "br", "span"], // Allow only specific tags
    allowedAttributes: {}, // No attributes allowed
    transformTags: {
      div: "br",
    },
  }).replace(/<\/?div[^>]*>/g, "");
};

/**
 * Converts plain text with newlines into HTML with <br><br> tags.
 * @param {string} text - The plain text to convert.
 * @returns {string} - The HTML string with <br><br> tags.
 */
const renderHtml = (text) => text.replace(/(?:\r\n|\r|\n)/g, "<br>");

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
 * @returns {JSX.Element} - The rendered Content component.
 */
const Content = ({ options, updateOption }) => {
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
        style={{
          padding: `calc(var(--spacing) * ${options.boxOuterPadding})`,
        }}
      >
        <ContentEditable
          id="editable-content"
          tagName="div"
          tabIndex={0} // Make the element focusable
          autoComplete="off"
          spellCheck="false"
          html={renderHtml(options.text)}
          /**
           * Handles content changes inside the editable element.
           * Updates the "text" option with sanitized plain text value.
           */
          onChange={(e) => {
            updateOption("text", sanitize(e.target.value));
          }}
          /**
           * Handles the blur event when the user leaves the editable area.
           * Sets the focused state to false and updates the "text" option
           * with sanitized and trimmed HTML content.
           */
          onBlur={(e) => {
            setFocused(false);
            updateOption("text", sanitize(e.target.innerHTML).trim());
          }}
          /**
           * Handles the focus event when the editable element is selected.
           * Sets the focused state to true.
           */
          onFocus={() => setFocused(true)}
          /**
           * Handles the paste event to sanitize and insert pasted content.
           */
          onPaste={(e) => {
            e.preventDefault(); // Prevent default paste behavior to control content insertion

            // Get pasted content as HTML (preferred) or plain text
            const pastedText =
              e.clipboardData.getData("text/html") ||
              e.clipboardData.getData("text/plain");

            // Sanitize and convert the pasted content to clean HTML
            const cleanHtml = renderHtml(sanitize(pastedText));

            const selection = window.getSelection();
            if (!selection.rangeCount) return;

            // Get the current cursor position (range) and clear any selected content
            const range = selection.getRangeAt(0);
            range.deleteContents();

            // Create a temporary container to parse the clean HTML string
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = cleanHtml;

            // Move parsed nodes into a DocumentFragment for efficient insertion
            const fragment = document.createDocumentFragment();
            let node;
            while ((node = tempDiv.firstChild)) {
              fragment.appendChild(node);
            }

            // Insert the sanitized content at the current cursor position
            range.insertNode(fragment);

            // Move the cursor to the end of the inserted content
            selection.collapseToEnd();
          }}
          className={cn(
            "min-h-10 min-w-1 [&>*]:min-w-1",
            "outline-none",
            {
              "![&>*]:font-bold !font-bold": options.textBold,
              "![&>*]:italic !italic": options.textItalic,
              "![&>*]:uppercase !uppercase": options.textUppercase,
              "user-select-none": !focused,
              "inline-flex h-full w-full flex-col items-start justify-center":
                isEmptyText(options.text) && !focused,
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
};

export default Content;
