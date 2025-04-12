import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable"; // Import the package
import sanitizeHtml from "sanitize-html"; // Import sanitizeHtml
import { useState } from "react"; // Import useState

import { cn } from "@/lib/utils";

import { getBgColorClass } from "./lib/bgColors";
import { getFontClass } from "./lib/fonts";
import { getTextColorClass } from "./lib/textColors";
import { getAlignmentClass, getRatioClass } from "./lib/utils";

const MainContent = ({ options, updateOption }) => {
  const [focused, setFocused] = useState(false); // State to track focus

  return (
    <main
      className={cn(
        "absolute top-1/2 left-0 z-10",
        "h-auto w-full",
        "-translate-y-1/2 transform",
        "aspect-9/16",
        getRatioClass(options.cardRatio)
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 h-full w-full p-10",
          "flex flex-col items-center justify-center",
          getBgColorClass(options.bgType, options.bgColor)
        )}
      >
        <ContentEditable
          id="editable-content"
          tagName="div"
          html={options.text
            .split("\n")
            .map((line) => `<p class="min-w-1">${line}</p>`)
            .join("")} // Convert text to multiple <p> elements
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
            const sanitizedHtml = sanitizeHtml(e.target.innerHTML, {
              allowedTags: ["p", "strong", "b", "em", "i", "br"], // Allow only specific tags
              allowedAttributes: {}, // No attributes allowed
            });
            const text = sanitizedHtml
              .replace(/<\/?p>/g, "\n") // Replace <p> tags with newlines
              .replace(/\n+/g, "\n") // Remove extra newlines
              .trim(); // Trim leading/trailing newlines
            updateOption("text", text);
          }}
          onFocus={() => setFocused(true)} // Set focused to true on focus
          tabIndex={0} // Make the element focusable
          className={cn(
            "inline-flex flex-col items-start justify-center gap-3",
            "min-h-10 min-w-1",
            "overflow-hidden outline-none",
            getAlignmentClass(options.textAlign),
            getFontClass(options.textFont),
            getTextColorClass(options.textColor),
            {
              "!font-bold": options.textBold,
              "!italic": options.textItalic,
              "h-full w-full": !focused,
            }
          )}
          style={{
            fontSize: `${options.textSize}rem`,
            lineHeight: `${options.textLineHeight}`,
            gap: `calc(var(--spacing) * ${options.textLineHeight * 3.5})`,
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
