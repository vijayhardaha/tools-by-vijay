import type { ReactElement } from 'react';

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
  PiGlobeBold,
} from 'react-icons/pi';

/**
 * A mapping of tool slugs to their corresponding icon elements.
 *
 * @type {ToolIcons}
 */
export interface ToolIcons {
  [key: string]: ReactElement;
}

/**
 * A mapping of tool slugs to their corresponding icon components.
 * Each key is a tool slug, and the value is the icon element.
 *
 * @type {ToolIcons}
 */
export const toolIcons: ToolIcons = {
  slugify: <PiFadersHorizontalBold />,
  'bulk-slugify': <PiFadersBold />,
  'password-generator': <PiPasswordBold />,
  'password-strength-checker': <PiShieldCheckBold />,
  'html-minifier': <PiFileHtmlBold />,
  'css-minifier': <PiFileCssBold />,
  'js-minifier': <PiFileJsBold />,
  'url-shortener': <PiLinkBold />,
  'dropdown-to-array': <PiBracketsCurlyBold />,
  'text-to-array': <PiTextAaBold />,
  'json-sorter': <PiSortAscendingBold />,
  'duplicate-line-removal': <PiListBulletsBold />,
  'alphabetical-line-sorter': <PiTextAlignLeftBold />,
  'css-inliner': <PiCodeSimpleBold />,
  'replace-quotes': <PiQuotesFill />,
  'shuffle-text-lines': <PiShuffleBold />,
  'character-count': <PiTextAaBold />,
  'url-decoder-encoder': <PiLinkBold />,
  'base64-encode-decode': <PiBracketsCurlyBold />,
  'country-name-generator': <PiGlobeBold />,
  'random-username-generator': <PiShuffleBold />,
  'text-case-changer': <PiTextAlignLeftBold />,
  'text-to-php-variables': <PiCodeSimpleBold />,
  'px-to-rem-converter': <PiFileCssBold />,
  unminify: <PiFileHtmlBold />,
  'barcode-generator': <PiQuotesFill />,
  'qrcode-generator': <PiShieldCheckBold />,
};
