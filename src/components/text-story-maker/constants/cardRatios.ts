/**
 * Interface representing the structure of background colors.
 */
export interface ICardRatio {
  value: string;
  label: string;
}

/**
 * An array of objects representing card aspect ratios.
 * Each object contains:
 * - `value` (string): The aspect ratio in the format "width/height".
 * - `label` (string): A human-readable label for the aspect ratio.
 */
export const cardRatios: ICardRatio[] = [
  { value: "9/16", label: "Instagram Story" },
  { value: "1/1", label: "Instagram Post (Square)" },
  { value: "4/5", label: "Instagram Post (4:5)" },
  { value: "full", label: "Full Height" },
];
