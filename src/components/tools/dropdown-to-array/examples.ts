import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the dropdown-to-array tool.
 * Each example loads a predefined HTML input plus output format and array options.
 */
export const EXAMPLES: Example[] = [
  {
    label: 'Load Example 1',
    data: {
      input:
        '<select>\n<option value="us">United States</option>\n<option value="ca">Canada</option>\n<option value="uk">United Kingdom</option>\n<option value="au">Australia</option>\n</select>',
      arrayType: 'associative',
      useSlugKeys: true,
    },
  },
  {
    label: 'Load Example 2',
    data: {
      input:
        '<option value="red">Red Color</option>\n<option value="green">Green Color</option>\n<option value="blue">Blue Color</option>',
      arrayType: 'simple',
      useSlugKeys: false,
    },
  },
  {
    label: 'Load Example 3',
    data: {
      input:
        '<select>\n<option value="small">Small</option>\n<option value="medium">Medium</option>\n<option value="large">Large</option>\n</select>',
      outputFormat: 'php',
      arrayType: 'numeric',
      useSlugKeys: false,
    },
  },
  {
    label: 'Load Example 4',
    data: {
      input:
        '<select>\n<option value="yes">Yes</option>\n<option value="no">No</option>\n<option value="maybe">Maybe</option>\n</select>',
      outputFormat: 'wordpress',
      arrayType: 'associative',
      useSlugKeys: true,
    },
  },
];
