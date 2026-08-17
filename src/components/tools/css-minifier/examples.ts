import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the css-minifier tool.
 * Each example loads a predefined input plus level and compress options.
 */
export const EXAMPLES: Example[] = [
  {
    label: 'Load Example 1',
    data: {
      input:
        '.btn {\n  background-color: #007bff;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n.btn:hover {\n  background-color: #0056b3;\n}',
      level: 2,
      compress: true,
    },
  },
  {
    label: 'Load Example 2',
    data: {
      input:
        '.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 15px;\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -15px;\n}\n\n.col {\n  flex: 1;\n  padding: 0 15px;\n}',
      level: 1,
      compress: false,
    },
  },
  {
    label: 'Load Example 3',
    data: {
      input:
        'h1 { font-size: 2.5rem; font-weight: bold; color: #333; margin-bottom: 0.5rem; }\nh2 { font-size: 2rem; font-weight: bold; color: #444; margin-bottom: 0.5rem; }\np { font-size: 1rem; line-height: 1.6; color: #666; margin-bottom: 1rem; }',
    },
  },
  {
    label: 'Load Example 4',
    data: {
      input:
        '.card {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n.card-header {\n  background: #f8f9fa;\n  padding: 12px 16px;\n  border-bottom: 1px solid #ddd;\n  font-weight: bold;\n}\n\n.card-body {\n  padding: 16px;\n}',
      level: 0,
      compress: false,
    },
  },
];
