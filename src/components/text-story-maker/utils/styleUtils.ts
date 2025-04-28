import sanitizeHtml from "sanitize-html";

import { bgColors, fonts, textColors } from "@/components/text-story-maker/constants";
import { OptionsType } from "@/components/text-story-maker/constants/options";
import { TextColor } from "@/components/text-story-maker/constants/textColors";

/**
 * Checks if the provided text is empty after sanitization.
 *
 * @param {string} text - The text to check.
 * @returns {boolean} True if the text is empty, false otherwise.
 */
export const isEmptyText = (text: string): boolean => {
  return !sanitizeHtml(text, {
    allowedTags: [],
    allowedAttributes: {},
  });
};

/**
 * Returns the CSS class for a given aspect ratio.
 *
 * @param {string} ratio - The aspect ratio in the format "width/height" (e.g., "9/16").
 * @returns {string} The corresponding CSS class for the aspect ratio.
 */
export const getRatioClass = (ratio: string): string => {
  switch (ratio) {
    case "9/16":
      return "!aspect-[9/16]";
    case "1/1":
      return "!aspect-square";
    case "4/5":
      return "!aspect-[4/5]";
    case "16/9":
      return "!aspect-[16/9]";
    case "10/16":
      return "!aspect-[10/16]";
    case "full":
    default:
      return "!aspect-auto h-screen";
  }
};

/**
 * Returns the CSS class for a given alignment value.
 *
 * @param {string} alignment - The alignment value ("left", "center", "right").
 * @returns {string} The corresponding CSS class for the alignment.
 */
export const getAlignmentClass = (alignment: string): string => {
  switch (alignment) {
    case "left":
      return "!text-left !items-start";
    case "right":
      return "!text-right !items-end";
    case "center":
    default:
      return "!text-center !items-center";
  }
};

/**
 * Retrieves the CSS class for a given text color value and key.
 *
 * @param {number} value - The index representing the text color in the `textColors` array.
 * @param {keyof TextColor} [key="text"] - The specific property to retrieve from the text color object (default is "text").
 * @returns {string} The CSS class for the specified text color and key, or an empty string if not found.
 */
export function getTextColorClass(value: number, key: keyof TextColor = "text"): string {
  if (textColors[value] && textColors[value][key]) {
    return textColors[value][key];
  }

  return "";
}

/**
 * Retrieves the font class name by its key.
 *
 * @param {string | number} key - The key of the font.
 * @returns {string|null} The class name of the font, or null if not found.
 */
export const getFontClass = (key: number): string | null => {
  return fonts[key]?.class || null;
};

/**
 * Retrieves the font class name by its key.
 *
 * @param {string} key - The key of the font to search for.
 * @returns {string|null} The class name of the font, or null if not found.
 */
export const getFontClassByName = (key: string): string | null => {
  const font = Object.values(fonts).find((font) => font.key === key);
  return font ? font.class : null;
};

/**
 * Utility function to get color class based on type and value.
 *
 * @param {keyof typeof bgColors} type - The type of color (e.g., 'solid', 'gradient', 'mesh').
 * @param {number} value - The specific color index.
 * @returns {string} The corresponding color class or an empty string if not found.
 */
export function getBgColorClass(type: keyof typeof bgColors, value: number): string {
  if (bgColors[type] && bgColors[type][value]) {
    return bgColors[type][value];
  }

  return "";
}

/**
 * Retrieves the shadow property based on the given value.
 *
 * @param {number} value - The index of the shadow property.
 * @returns {string} The corresponding shadow property or an empty string if not found.
 */
export function getShadowProperty(value: number): string {
  const shadows = [
    "var(--shadow-2xs)",
    "var(--shadow-xs)",
    "var(--shadow-sm)",
    "var(--shadow-md)",
    "var(--shadow-lg)",
    "var(--shadow-xl)",
    "var(--shadow-2xl)",
  ];

  return shadows[value] || "";
}

/**
 * Generates the content styles based on the provided options.
 *
 * @param {OptionsType} options - The options object containing style properties.
 * @returns {Record<string, string | number>} The generated styles object.
 */
export function getContentStyles(options: OptionsType): Record<string, string | number> {
  let styles: Record<string, string | number> = {};

  const isNotEmpty = !isEmptyText(options.text);

  if (parseFloat(options.textSize.toString()) > 0) {
    styles.fontSize = `${parseFloat(options.textSize.toString())}rem`;
  }

  if (parseFloat(options.textLineHeight.toString()) > 0) {
    styles.lineHeight = `${options.textLineHeight}`;
  }

  if (isNotEmpty && options.boxBackground) {
    styles.overflow = "hidden";
    if (options.boxBackground === "black") {
      styles.backgroundColor = `rgba(0, 0, 0, ${options.boxBackgroundOpacity})`;
    }

    if (options.boxBackground === "white") {
      styles.backgroundColor = `rgba(255, 255, 255, ${options.boxBackgroundOpacity})`;
    }

    if (options.boxInnerPadding) {
      styles.padding = `calc(var(--spacing) * ${options.boxInnerPadding})`;
    }

    if (options.boxBorderRadius) {
      styles.borderRadius = `calc(var(--spacing) * ${options.boxBorderRadius})`;
    }

    if (options.boxGlossy) {
      styles.boxShadow = getShadowProperty(options.boxGlossyShadow);
      styles.backdropFilter = `blur(${options.boxGlossyBlur}px)`;
    }
  }

  if (options.textStroke) {
    styles.paintOrder = "stroke fill";
    if (options.textStroke === "black") {
      styles.WebkitTextStroke = `${options.textStrokeSize}px #000000`;
    }

    if (options.textStroke === "white") {
      styles.WebkitTextStroke = `${options.textStrokeSize}px #ffffff`;
    }
  }

  if (options.textShadow) {
    if (options.textShadow === "black") {
      styles.textShadow = `0 0 ${options.textShadowSize}vh #000000,0 0 ${options.textShadowSize}vh #000000, 0 0 2vh rgba(0, 0, 0, 0.15)`;
    }

    if (options.textShadow === "white") {
      styles.textShadow = `0 0 ${options.textShadowSize}vh #ffffff,0 0 ${options.textShadowSize}vh #ffffff, 0 0 2vh rgba(255, 255, 255, 0.15)`;
    }
  }

  styles.letterSpacing = `${parseFloat(options.textLetterSpacing.toString())}px`;

  return styles;
}
