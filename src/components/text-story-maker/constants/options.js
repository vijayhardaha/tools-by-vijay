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
  textFont: "comfortaa",
  textSize: 1.25,
  textLineHeight: 1.375,
  textColor: "color1",
  textAlign: "center",
  textBold: false,
  textItalic: false,
  textUppercase: false,

  // Content
  text: "",

  // Layout
  cardRatio: "9/16",

  // Background
  bgType: "gradient",
  bgColor: "color3",

  // Download
  downloadSize: "2x",
  downloadFormat: "png",
};
