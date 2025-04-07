// utils/toolIcons.js
import {
  PiFadersHorizontalLight,
  PiFadersLight,
  PiPassword,
  PiShieldCheck,
  PiFileHtml,
  PiFileCss,
  PiFileJs,
  PiLink,
  PiBracketsCurly,
  PiTextAa,
} from "react-icons/pi";

export const toolIcons = {
  slugify: <PiFadersHorizontalLight />,
  "bulk-slugify": <PiFadersLight />,
  "password-generator": <PiPassword />,
  "password-strength-checker": <PiShieldCheck />,
  "html-minifier": <PiFileHtml />,
  "css-minifier": <PiFileCss />,
  "js-minifier": <PiFileJs />,
  "url-shortener": <PiLink />,
  "dropdown-to-array": <PiBracketsCurly />,
  "text-to-array": <PiTextAa />,
};
