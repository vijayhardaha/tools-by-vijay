import type { ToolFaqItem } from '@/utils/faq';

/**
 * Frequently asked questions for the HTML Cleaner tool.
 *
 * Single source of truth — used both to render the FAQ section and to build
 * the FAQPage schema markup.
 *
 * @type {ToolFaqItem[]}
 */
export const FAQS: ToolFaqItem[] = [
  {
    heading: 'Is this tool free to use?',
    headingId: 'is-this-tool-free',
    answer: 'Yes, the HTML Cleaner is completely free to use with no signup, registration, or usage limits required.',
  },
  {
    heading: 'Is my data sent to a server?',
    headingId: 'is-my-data-sent-to-a-server',
    answer:
      'No. The HTML Cleaner runs entirely in your browser. Your markup never leaves your device, is never uploaded, stored, or logged, and the tool keeps working offline once the page has loaded.',
  },
  {
    heading: 'What is HTML cleaning?',
    headingId: 'what-is-html-cleaning',
    answer:
      'HTML cleaning parses your markup into a tree and applies predictable transformations — removing comments, inline styles, junk classes and ids, empty elements, and redundant wrappers — so the output is clean, consistent, and deterministic.',
  },
  {
    heading: 'How is cleaning different from minifying?',
    headingId: 'how-is-cleaning-different-from-minifying',
    answer:
      'Minifying compresses markup for smaller file size while keeping the structure intact. Cleaning restructures the markup itself: it strips presentation noise, unwraps redundant containers, and can reduce a document down to plain text. Cleaning often shrinks markup too, but readability rather than byte count is the goal.',
  },
  {
    heading: 'Is this tool a security sanitizer?',
    headingId: 'is-html-cleaner-a-sanitizer',
    answer:
      'No. This tool normalizes markup — it does not guarantee that dangerous content such as script tags, event handler attributes, or javascript: URLs is removed. Never use it as a security boundary for untrusted input; use a dedicated sanitizer such as DOMPurify for that.',
  },
  {
    heading: 'What are presets and how do they work?',
    headingId: 'what-are-presets',
    answer:
      'Presets are named bundles of options: Safe, Clean, Article, Aggressive, and Text. Selecting one fills in every option control so you can see exactly what it enables, and you can then override any individual option before cleaning. Editing an option switches the selector to Custom.',
  },
  {
    heading: 'Can I clean HTML copied from Google Docs or Word?',
    headingId: 'can-i-clean-html-from-google-docs-or-word',
    answer:
      'Yes — that is exactly what this tool is built for. Use the Clean preset to strip inline styles, classes, and ids while keeping your text and structure, or the Article preset to also unwrap spans and links and drop images before pasting into a CMS.',
  },
  {
    heading: 'What library does this tool use?',
    headingId: 'html-cleaner-what-library-is-used',
    answer:
      'This tool uses @vijayhardaha/html-cleaner, an open-source library that parses HTML into an AST, applies composable transforms, and serializes deterministic output.',
  },
  {
    heading: 'Can I use this tool offline?',
    headingId: 'can-i-use-this-tool-offline',
    answer:
      'Yes. Because all processing happens in your browser, the tool works offline once the page has loaded — there is no server-side API call involved.',
  },
];
