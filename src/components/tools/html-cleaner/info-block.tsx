import type { JSX } from 'react';

import { JsonLd } from '@vijayhardaha/schema-builder/react';

import { ToolCreditsSection } from '@/components/tool/ToolCredits';
import { ToolFAQItem, ToolFAQSection } from '@/components/tool/ToolFAQ';
import {
  ToolInfoSection,
  ToolInfoSectionContent,
  ToolInfoSectionHeading,
  ToolInfoSectionList,
} from '@/components/tool/ToolInfoSection';
import { buildFaqPageSchema } from '@/utils/faq';

import { FAQS } from './faqs';

const faqSchemaData = [buildFaqPageSchema('html-cleaner', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the HTML Cleaner Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-html-cleaner-tool">What Is the HTML Cleaner Tool?</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>HTML Cleaner</strong> is a free online utility that takes messy HTML — the kind pasted out of
            Google Docs, Word, a CMS, or a web scraper — and turns it into clean, predictable markup. It removes inline
            styles, meaningless classes and ids, nested <code>&lt;span&gt;</code> wrappers, <code>&amp;nbsp;</code>{' '}
            runs, empty elements, and comments nobody asked for.
          </p>
          <p>
            The tool runs the{' '}
            <a
              href="https://www.npmjs.com/package/@vijayhardaha/html-cleaner"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              @vijayhardaha/html-cleaner
            </a>{' '}
            library entirely in your browser. It parses your HTML into a tree, applies a pipeline of small composable
            transforms, and serializes the result once — so the same input and options always produce identical output.
            Nothing is uploaded, and the tool works offline once loaded.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="html-cleaner-features"
          title="Key Features"
          items={[
            '19 cleanup options covering presentation, content, and structure',
            'Five ready-made presets — Safe, Clean, Article, Aggressive, and Text',
            'Presets write their values into the option controls, so you always see what is enabled',
            'Deterministic output: the same input and options always produce byte-identical markup',
            'Formatting controls for indentation, line endings, and trailing newlines',
            'A change report showing exactly what was removed, unwrapped, or converted',
            'Runs 100% client-side — your HTML never leaves your browser',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-html-cleaner"
          title="Why Use This Tool"
          items={[
            'Pasting editor or scraper HTML into a CMS no longer drags along invisible styling baggage',
            'Clean, predictable markup keeps your content diff-friendly instead of producing formatting churn',
            'Stripping classes, ids, and inline styles removes implementation details you never meant to publish',
            'Extracting readable text from a page is a single click with the Text preset',
            'Consistent output makes scraped pages easy to compare and diff',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="html-cleaner-use-cases"
          title="Common Use Cases"
          items={[
            'Cleaning content pasted from Google Docs or Word before publishing',
            'Reducing a scraped page to readable text for indexing or summarization',
            'Preparing HTML for email templates where inline styles and editor cruft have to go',
            'Flattening tables into plain content or converting them to divs',
            'Normalizing markup in a review or audit workflow where deterministic output matters',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="html-cleaner-what-gets-removed"
          title="What Gets Removed"
          items={[
            'Inline style attributes, classes, and ids',
            'HTML comments',
            'Empty elements, including NBSP-only nodes when enabled',
            'Runs of non-breaking spaces, collapsed into regular spaces',
            'Redundant wrapper elements such as nested spans and anchor tags (unwrapped, keeping their content)',
            'Images, when you opt in',
            'Table structure, either removed while keeping cell content or renamed to nested divs',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="html-cleaner-how-presets-work">How Presets Work</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            Presets are named bundles of option values layered on top of the safe defaults. <strong>Safe</strong> does
            only the default whitespace and formatting cleanup. <strong>Clean</strong> adds removal of inline styles,
            classes, and ids. <strong>Article</strong> goes further and unwraps spans and links and drops images.{' '}
            <strong>Aggressive</strong> removes every attribute, unwraps spans and links, drops images, and removes
            table markup. <strong>Text</strong> strips all tags and keeps readable line breaks, with formatting
            disabled.
          </p>
          <p>
            Selecting a preset fills in the option controls below the input, and you can override any individual option
            afterward — the selector simply switches to <em>Custom</em> so you can see that the options no longer match
            a named bundle.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="html-cleaner-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            This tool uses the{' '}
            <a
              href="https://www.npmjs.com/package/@vijayhardaha/html-cleaner"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              @vijayhardaha/html-cleaner
            </a>{' '}
            npm package. The cleaner parses HTML into a HAST tree, runs each transform as an independent unit, and
            serializes the tree once. Because the work happens in your browser, there is no API request, no rate limit,
            and no upload. Note that this is a markup normalizer, not a security sanitizer — use a dedicated tool such
            as DOMPurify before rendering untrusted HTML.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolFAQSection>
        {FAQS.map((item) => (
          <ToolFAQItem key={item.headingId} heading={item.heading} headingId={item.headingId}>
            <p>{item.answer}</p>
          </ToolFAQItem>
        ))}
      </ToolFAQSection>

      <ToolCreditsSection>
        <p>
          Built on{' '}
          <a
            href="https://github.com/vijayhardaha/html-cleaner"
            className="font-medium text-pink-500 underline hover:no-underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            @vijayhardaha/html-cleaner
          </a>
          , the open-source HTML cleaner maintained by{' '}
          <a
            href="https://x.com/vijayhardaha"
            className="font-medium text-pink-500 underline hover:no-underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vijay Hardaha
          </a>
          .
        </p>
      </ToolCreditsSection>
    </div>
  );
}
