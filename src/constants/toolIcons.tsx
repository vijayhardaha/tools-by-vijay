import React from "react";
import { JSX } from "react";

import {
  PiFadersHorizontalBold,
  PiFadersBold,
  PiPasswordBold,
  PiShieldCheckBold,
  PiFileHtmlBold,
  PiFileCssBold,
  PiFileJsBold,
  PiLinkBold,
  PiBracketsCurlyBold,
  PiTextAaBold,
  PiSortAscendingBold,
  PiListBulletsBold,
  PiTextAlignLeftBold,
  PiCodeSimpleBold,
  PiQuotesFill,
  PiShuffleBold,
} from "react-icons/pi";

export const toolIcons: Record<string, JSX.Element> = {
  slugify: <PiFadersHorizontalBold />,
  "bulk-slugify": <PiFadersBold />,
  "password-generator": <PiPasswordBold />,
  "password-strength-checker": <PiShieldCheckBold />,
  "html-minifier": <PiFileHtmlBold />,
  "css-minifier": <PiFileCssBold />,
  "js-minifier": <PiFileJsBold />,
  "url-shortener": <PiLinkBold />,
  "dropdown-to-array": <PiBracketsCurlyBold />,
  "text-to-array": <PiTextAaBold />,
  "json-sorter": <PiSortAscendingBold />,
  "duplicate-line-removal": <PiListBulletsBold />,
  "alphabetical-line-sorter": <PiTextAlignLeftBold />,
  "css-inliner": <PiCodeSimpleBold />,
  "replace-quotes": <PiQuotesFill />,
  "shuffle-text-lines": <PiShuffleBold />,
};
