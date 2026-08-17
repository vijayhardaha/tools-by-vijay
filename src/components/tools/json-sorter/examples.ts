import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the json-sorter tool.
 * Each example loads a predefined JSON input with spareArrays enabled.
 */
export const EXAMPLES: Example[] = [
  {
    label: 'Load Example 1',
    data: {
      input:
        '{\n  "zebra": "africa",\n  "apple": "fruit",\n  "mango": "tropical",\n  "banana": "yellow",\n  "camel": "desert"\n}',
      spareArrays: true,
    },
  },
  {
    label: 'Load Example 2',
    data: {
      input:
        '{\n  "name": "John",\n  "age": 30,\n  "email": "john@example.com",\n  "address": {\n    "zip": "10001",\n    "city": "New York",\n    "street": "123 Main St",\n    "country": "USA"\n  }\n}',
      spareArrays: true,
    },
  },
  {
    label: 'Load Example 3',
    data: {
      input:
        '{\n  "version": "2.0",\n  "debug": false,\n  "database": {\n    "port": 5432,\n    "host": "localhost",\n    "name": "app_db"\n  },\n  "logging": {\n    "level": "info",\n    "file": "/var/log/app.log"\n  }\n}',
      spareArrays: true,
    },
  },
  {
    label: 'Load Example 4',
    data: {
      input:
        '{\n  "name": "test",\n  "items": ["z", "a", "m"],\n  "config": {\n    "enable": true,\n    "timeout": 30\n  }\n}',
      spareArrays: true,
    },
  },
];
