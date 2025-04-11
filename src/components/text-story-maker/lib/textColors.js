import { textColors } from "../constants/textColors";

export function getTextColorClass(value, key = "text") {
  if (textColors[value] && textColors[value][key]) {
    return textColors[value][key];
  }
  return "";
}
