import { useState } from "react"; // Import useState

import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable"; // Import the package
import sanitizeHtml from "sanitize-html"; // Import sanitizeHtml

import { cn } from "@/lib/utils";

import { getBgColorClass } from "./lib/bgColors";
import { getFontClass } from "./lib/fonts";
import { getTextColorClass } from "./lib/textColors";
import { getAlignmentClass, getRatioClass } from "./lib/utils";

const santize = (html) =>
  sanitizeHtml(html, {
    allowedTags: ["p", "strong", "b", "em", "i", "br"], // Allow only specific tags
    allowedAttributes: {}, // No attributes allowed
  })
    .replace(/<\/?p>/g, "\n") // Replace <p> tags with newlines
    .replace(/\n+/g, "\n") // Remove extra newlines
    .trim();

const renderHtml = (text) =>
  text
    .split("\n")
    .map((line) => `<p>${line}</p>`)
    .join(""); // Convert text to multiple <p> elements

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
          html={renderHtml(options.text)} // Convert text to multiple <p> elements
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

            const text = santize(e.target.innerHTML);
            updateOption("text", text);
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
            "inline-flex flex-col items-start justify-center gap-3",
            "min-h-10 min-w-1 [&>*]:min-w-1",
            "outline-none",
            getAlignmentClass(options.textAlign),
            getFontClass(options.textFont),
            getTextColorClass(options.textColor),
            {
              "!font-bold": options.textBold,
              "!italic": options.textItalic,
              "!uppercase": options.textUppercase,
              "h-full w-full": !focused,
            }
          )}
          style={{
            fontSize: `${options.textSize}rem`,
            lineHeight: `${options.textLineHeight}`,
            gap: `calc(var(--spacing) * ${options.textLineHeight * 3})`,
          }}
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
