import {
  bgColors,
  fonts,
  textColors,
} from "@/components/text-story-maker/constants";

import sanitizeHtml from "sanitize-html";

/**
 * Checks if the provided text is empty after sanitization.
 *
 * @param {string} text - The text to check.
 * @returns {boolean} True if the text is empty, false otherwise.
 */
export const isEmptyText = (text) => {
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
export const getRatioClass = (ratio) => {
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
export const getAlignmentClass = (alignment) => {
  switch (alignment) {
    case "left":
      return "!text-left !items-start w-full";
    case "right":
      return "!text-right !items-end w-full";
    case "center":
    default:
      return "!text-center !items-center";
  }
};

/**
 * Retrieves the CSS class for a given text color value and key.
 *
 * @param {string} value - The key representing the text color in the `textColors` object.
 * @param {string} [key="text"] - The specific property to retrieve from the text color object (default is "text").
 * @returns {string} The CSS class for the specified text color and key, or an empty string if not found.
 */
export function getTextColorClass(value, key = "text") {
  if (textColors[value] && textColors[value][key]) {
    return textColors[value][key];
  }

  return "";
}

/**
 * Retrieves the font class name by its key.
 *
 * @param {string} key - The key of the font.
 * @returns {string|null} The class name of the font, or null if not found.
 */
export const getFontClass = (key) => {
  return fonts[key]?.class || null;
};

/**
 * Retrieves the font class name by its key.
 *
 * @param {string} key - The key of the font to search for.
 * @returns {string|null} The class name of the font, or null if not found.
 */
export const getFontClassByName = (key) => {
  const font = fonts.findIndex((font) => font.key === key);
  if (font === -1) {
    return null;
  }
  return fonts[font].class;
};

/**
 * Utility function to get color class based on type and value.
 *
 * @param {string} type - The type of color (e.g., 'solid', 'gradient', 'mesh').
 * @param {string} value - The specific color key (e.g., 'color1', 'color2').
 * @returns {string} The corresponding color class or an empty string if not found.
 */
export function getBgColorClass(type, value) {
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
export function getShadowProperty(value) {
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
 * @param {Object} options - The options object containing style properties.
 * @param {string} options.text - The text content.
 * @param {number} options.textSize - The font size of the text.
 * @param {number} options.textLineHeight - The line height of the text.
 * @param {number} options.textLetterSpacing - The letter spacing of the text.
 * @param {string} options.boxBackground - The background color of the box ("white", "black", or empty).
 * @param {number} options.boxBackgroundOpacity - The opacity of the box background.
 * @param {number} options.boxInnerPadding - The inner padding of the box.
 * @param {number} options.boxBorderRadius - The border radius of the box.
 * @param {string} options.boxGlossy - Whether the box has a glossy effect ("enabled" or empty).
 * @param {number} options.boxGlossyBlur - The blur value for the glossy effect.
 * @param {number} options.boxGlossyShadow - The shadow value for the glossy effect.
 * @param {string} options.textStroke - The stroke color of the text ("white", "black", or empty).
 * @param {number} options.textStrokeSize - The size of the text stroke.
 * @param {string} options.textGlow - The glow color of the text ("white", "black", or empty).
 * @param {number} options.textGlowSize - The size of the text glow.
 * @returns {Object} The generated styles object.
 */
export function getContentStyles(options) {
  let styles = {};

  const isNotEmpty = !isEmptyText(options.text);

  if (parseFloat(options.textSize) > 0) {
    styles.fontSize = `${parseFloat(options.textSize)}rem`;
  }

  if (parseFloat(options.textLineHeight) > 0) {
    styles.lineHeight = `${options.textLineHeight}`;
    styles.gap = `calc(var(--spacing) * ${parseFloat(options.textLineHeight) * 3})`;
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

  if (options.textGlow) {
    if (options.textGlow === "black") {
      styles.textShadow = `0 0 ${options.textGlowSize}vh #000000,0 0 ${options.textGlowSize}vh #000000,0 0 1vh #000000`;
    }

    if (options.textGlow === "white") {
      styles.textShadow = `0 0 ${options.textGlowSize}vh #ffffff,0 0 ${options.textGlowSize}vh #ffffff,0 0 1vh #ffffff`;
    }
  }

  styles.letterSpacing = `${parseFloat(options.textLetterSpacing)}px`;

  return styles;
}
