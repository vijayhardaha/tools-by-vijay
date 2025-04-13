/**
 * Default configuration options for the text story maker.
 * @typedef {Object} DefaultOptions
 * @property {string} textFont - The font family for the text.
 * @property {string} textSize - The font size for the text.
 * @property {number} textLineHeight - The line height for the text.
 * @property {string} textColor - The color of the text.
 * @property {string} textAlign - The alignment of the text (e.g., "center", "left", "right").
 * @property {string} cardRatio - The aspect ratio of the card (e.g., "9/16").
 * @property {string} bgType - The type of background (e.g., "solid", "gradient").
 * @property {string} bgColor - The background color or gradient name.
 * @property {string} text - The content of the text.
 */

/** @type {DefaultOptions} */
export const defaultOptions = {
  // Typography
  textFont: 0,
  textSize: 1.25,
  textLineHeight: 1.375,
  textLetterSpacing: 0,
  textColor: 0,
  textAlign: "center",
  textBold: false,
  textItalic: false,
  textUppercase: false,
  textEffect: "",

  // Text Effect
  textStroke: "",
  textStrokeSize: 1,
  textGlow: "",
  textGlowSize: 0.1,

  // Content
  text: "",

  // Box
  boxOuterPadding: 10,
  boxInnerPadding: 0,
  boxBackground: 0,
  boxBackgroundOpacity: 0.15,
  boxBorderRadius: 0,
  boxGlossy: "",
  boxGlossyBlur: 4,
  boxGlossyShadow: 4,

  // Layout
  cardRatio: "9/16",

  // Background
  bgType: "gradient",
  bgColor: 2,

  // Download
  downloadSize: "fhd",
  downloadFormat: "png",
};
