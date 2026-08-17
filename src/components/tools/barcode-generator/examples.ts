import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the barcode-generator tool.
 * Each example loads a predefined combination of input value, format,
 * bar width, height, text visibility, and text alignment.
 */
export const EXAMPLES: Example[] = [
  {
    label: 'Load Example 1',
    data: { input: 'SKU-12345-ABC', format: 'CODE128', width: 2, height: 100, showText: true, textAlign: 'center' },
  },
  {
    label: 'Load Example 2',
    data: { input: '4006381333931', format: 'EAN13', width: 2, height: 120, showText: true, textAlign: 'center' },
  },
  {
    label: 'Load Example 3',
    data: { input: 'SN-2025-XYZ-789', format: 'CODE39', width: 1, height: 150, showText: true, textAlign: 'left' },
  },
  {
    label: 'Load Example 4',
    data: { input: '012345678905', format: 'UPC', width: 3, height: 90, showText: false, textAlign: 'center' },
  },
  {
    label: 'Load Example 5',
    data: { input: '15400141288763', format: 'ITF14', width: 4, height: 150, showText: true, textAlign: 'right' },
  },
];
