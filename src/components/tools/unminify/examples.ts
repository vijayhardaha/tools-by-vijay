import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data and option presets for the unminify tool.
 * Each example loads a predefined input plus a code type.
 */
export const EXAMPLES: Example[] = [
  {
    label: 'Load Example 1',
    data: {
      input: 'function hello(name){return"Hello, "+name+"!"}const greeting=hello("World");console.log(greeting);',
      codeType: 'javascript',
    },
  },
  {
    label: 'Load Example 2',
    data: {
      input:
        'body{margin:0;padding:0;font-family:sans-serif}.container{max-width:1200px;margin:0 auto}.header{background:#333;color:#fff;padding:20px}',
      codeType: 'css',
    },
  },
  {
    label: 'Load Example 3',
    data: {
      input: '<!DOCTYPE html><html><head><title>Test</title></head><body><h1>Hello</h1><p>World</p></body></html>',
      codeType: 'html',
    },
  },
  {
    label: 'Load Example 4',
    data: {
      input: '{"name":"John","age":30,"city":"New York","hobbies":["reading","coding","hiking"]}',
      codeType: 'json',
    },
  },
  {
    label: 'Load Example 5',
    data: {
      input: '<?xml version="1.0"?><root><person><name>John</name><age>30</age></person></root>',
      codeType: 'xml',
    },
  },
];
