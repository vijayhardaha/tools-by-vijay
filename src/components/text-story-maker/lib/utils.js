/**
 * Returns the CSS class for a given aspect ratio.
 * @param {string} ratio - The aspect ratio in the format "width/height" (e.g., "9/16").
 * @returns {string} The corresponding CSS class for the aspect ratio.
 */
export const getRatioClass = (ratio) => {
  switch (ratio) {
    case "9/16":
      return "aspect-[9/16]";
    case "1/1":
      return "aspect-square";
    case "4/5":
      return "aspect-[4/5]";
    case "16/9":
      return "aspect-[16/9]";
    default:
      return "aspect-auto"; // fallback or default aspect
  }
};
