import type { Example } from '@/components/tool/ToolExampleBlock';

/**
 * Example data for the url-shortener tool.
 * Each example loads a predefined set of URLs to shorten.
 */
export const EXAMPLES: Example[] = [
  { label: 'Load Example 1', data: { input: 'https://github.com/vijayhardaha' } },
  {
    label: 'Load Example 2',
    data: { input: 'https://github.com/vijayhardaha\nhttps://x.com/vijayhardaha\nhttps://toolsbyvijay.vercel.app' },
  },
  { label: 'Load Example 3', data: { input: 'https://example.com/blog/post-1\nhttps://example.com/blog/post-2' } },
  {
    label: 'Load Example 4',
    data: {
      input:
        'https://example.com/docs/getting-started\nhttps://example.com/docs/api-reference\nhttps://example.com/docs/guides',
    },
  },
];
