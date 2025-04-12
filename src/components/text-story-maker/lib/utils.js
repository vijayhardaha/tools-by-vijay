import {
  bgColors,
  fonts,
  textColors,
} from "@/components/text-story-maker/constants";

/**
 * Returns the CSS class for a given aspect ratio.
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
 * @returns {string} - The CSS class for the specified text color and key, or an empty string if not found.
 */
export function getTextColorClass(value, key = "text") {
  if (textColors[value] && textColors[value][key]) {
    return textColors[value][key];
  }

  return "";
}

/**
 * Retrieves the font class name by its key.
 * @param {string} key - The key of the font.
 * @returns {string|null} The class name of the font, or null if not found.
 */
export const getFontClass = (key) => {
  return fonts[key]?.class || null;
};

/**
 * Utility function to get color class based on type and value.
 * @param {string} type - The type of color (e.g., 'solid', 'gradient', 'mesh').
 * @param {string} value - The specific color key (e.g., 'color1', 'color2').
 * @returns {string} - The corresponding color class or an empty string if not found.
 */
export function getBgColorClass(type, value) {
  if (bgColors[type] && bgColors[type][value]) {
    return bgColors[type][value];
  }

  return "";
}

export function getEffectStyles(effect = "") {
  if (!effect) return {};

  const letterSpacing = { letterSpacing: "0.031em" };
  const paintOrder = { paintOrder: "stroke fill" };
  const lightBg = {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    padding: "calc(var(--spacing) * 6)",
    overflow: "hidden",
  };
  const darkBg = {
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    padding: "calc(var(--spacing) * 6)",
    overflow: "hidden",
  };

  const br = (size) => ({
    borderRadius: `calc(var(--spacing) * ${size})`,
  });

  switch (effect) {
    case "white-stroke":
      return {
        ...letterSpacing,
        ...paintOrder,
        ...{
          WebkitTextStroke: "0.125em #ffffff",
        },
      };
    case "black-stroke":
      return {
        ...letterSpacing,
        ...paintOrder,
        ...{
          WebkitTextStroke: "0.125em #000000",
        },
      };
    case "white-glow":
      return {
        ...letterSpacing,
        ...{
          textShadow: "0 0 0.1vh #ffffff,0 0 0.1vh #ffffff,0 0 1vh #ffffff",
        },
      };
    case "black-glow":
      return {
        ...letterSpacing,
        ...{
          textShadow: "0 0 0.1vh #000000,0 0 0.1vh #000000,0 0 1vh #000000",
        },
      };
    case "white-outline":
      return {
        ...letterSpacing,
        ...paintOrder,
        ...{
          WebkitTextStroke: "0.0625em #ffffff",
        },
      };
    case "black-outline":
      return {
        ...letterSpacing,
        ...paintOrder,
        ...{
          WebkitTextStroke: "0.0625em #000000",
        },
      };
    case "light-bg":
      return {
        ...lightBg,
        ...br(0),
      };
    case "dark-bg":
      return {
        ...darkBg,
        ...br(0),
      };
    case "light-bg-rounded":
      return {
        ...lightBg,
        ...br(4),
      };
    case "dark-bg-rounded":
      return {
        ...darkBg,
        ...br(4),
      };
    case "light-bg-rounded-lg":
      return {
        ...lightBg,
        ...br(6),
      };
    case "dark-bg-rounded-lg":
      return {
        ...darkBg,
        ...br(6),
      };
    default:
      return {};
  }
}

export function getContentStyles(options) {
  let styles = {};

  if (parseFloat(options.textSize) > 0) {
    styles.fontSize = `${parseFloat(options.textSize)}rem`;
  }

  if (parseFloat(options.textLineHeight) > 0) {
    styles.lineHeight = `${options.textLineHeight}`;
    styles.gap = `calc(var(--spacing) * ${parseFloat(options.textLineHeight) * 3})`;
  }

  if (options.textEffect) {
    styles = { ...styles, ...getEffectStyles(options.textEffect) };
  }

  return styles;
}
