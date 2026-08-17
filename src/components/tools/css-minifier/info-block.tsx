import type { JSX } from 'react';

import { JsonLd } from '@vijayhardaha/schema-builder/react';

import { Credits } from '@/components/tool/ToolCredits';
import { ToolFAQItem, ToolFAQSection } from '@/components/tool/ToolFAQ';
import {
  ToolInfoSection,
  ToolInfoSectionContent,
  ToolInfoSectionHeading,
  ToolInfoSectionList,
} from '@/components/tool/ToolInfoSection';
import { buildFaqPageSchema } from '@/utils/faq';

import { FAQS } from './faqs';

const faqSchemaData = [buildFaqPageSchema('css-minifier', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the CSS Minifier Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-css-minifier-tool">What Is the CSS Minifier Tool?</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>CSS Minifier</strong> is a free online utility that helps you optimize your stylesheets by
            removing redundant spaces, comments, and unused properties, achieving faster CSS rendering and improved site
            performance.
          </p>
          <p>
            The CSS Minifier sends your CSS to a server-side API powered by the{' '}
            <a
              href="https://www.npmjs.com/package/clean-css"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              clean-css
            </a>{' '}
            library. The minification engine removes whitespace and comments, merges overlapping selectors, removes
            overridden properties, compresses color values, and applies other optimizations to produce the smallest
            possible valid CSS output.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="css-minifier-features"
          title="Key Features"
          items={[
            'Advanced CSS compression using the clean-css optimization engine',
            'Automatic whitespace removal and comment stripping',
            'Selector merging and property consolidation for duplicate reduction',
            'Color value compression (hex, RGB, HSL optimization)',
            'File size comparison with before and after statistics',
            'Preserves all visual functionality while minimizing code footprint',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-css-minifier"
          title="Why Use This Tool"
          items={[
            'Reduces CSS file size by 30-70%, accelerating page render and time-to-interactive',
            'Eliminates redundant and overridden CSS properties that bloat stylesheets',
            'Improves mobile performance by reducing total CSS payload delivered to devices',
            'Decreases bandwidth costs for high-traffic applications serving large stylesheets',
            'Enhances Lighthouse performance scores and overall site speed metrics',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="css-minifier-use-cases"
          title="Common Use Cases"
          items={[
            'Optimizing production CSS bundles before deployment to reduce initial page load',
            'Compressing CSS framework files like Bootstrap and Tailwind for production use',
            'Minimizing third-party CSS libraries and vendor stylesheets for performance',
            'Preparing CSS for email templates where file size limits apply',
            'Integrating into build toolchains with Webpack, Vite, or Gulp for automated minification',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="css-minifier-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            This tool uses the{' '}
            <a
              href="https://www.npmjs.com/package/clean-css"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              clean-css
            </a>{' '}
            npm package via a server-side API endpoint. The library performs multi-level optimization including
            structural optimizations like merging selectors with identical rules, removing redundant properties, and
            compressing color and dimension values. All processing happens server-side with results returned as
            compressed CSS.
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

      <Credits>
        <p>
          Maintained by{' '}
          <a
            href="https://x.com/vijayhardaha"
            className="font-medium text-pink-500 underline hover:no-underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vijay Hardaha
          </a>
          . This tool is built with modern web technologies and industry-standard open-source libraries to deliver
          reliable, high-quality results.
        </p>
      </Credits>
    </div>
  );
}
