import type { ReactElement } from 'react';

import {
  PiCodeDuotone,
  PiGlobeDuotone,
  PiNotePencilDuotone,
  PiShieldCheckDuotone,
  PiSparkleDuotone,
} from 'react-icons/pi';

/**
 * A mapping of category slugs to their corresponding icon elements.
 *
 * @type {CategoryIcons}
 */
export interface CategoryIcons {
  [key: string]: ReactElement;
}

/**
 * A mapping of category slugs to their corresponding icon components.
 * Each key is a category slug, and the value is the icon element.
 *
 * @type {CategoryIcons}
 */
export const categoryIcons: CategoryIcons = {
  'writing-editing': <PiNotePencilDuotone />,
  'developer-suite': <PiCodeDuotone />,
  'web-url-tools': <PiGlobeDuotone />,
  'security-privacy': <PiShieldCheckDuotone />,
  'creative-generators': <PiSparkleDuotone />,
};
