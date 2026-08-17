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

const faqSchemaData = [buildFaqPageSchema('html-minifier', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the HTML Minifier Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-html-minifier-tool">What Is the HTML Minifier Tool?</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>HTML Minifier</strong> is a free online utility that helps you compress HTML files by removing
            unnecessary whitespace, comments, and redundant code, reducing page size to significantly improve website
            load speed and Core Web Vitals.
          </p>
          <p>
            The HTML Minifier sends your HTML code to a server-side API powered by the{' '}
            <a
              href="https://www.npmjs.com/package/html-minifier-terser"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              html-minifier-terser
            </a>{' '}
            library. The minification engine removes comments, collapses whitespace, removes redundant attributes,
            minifies inline CSS and JavaScript, and applies various optimizations to reduce file size while preserving
            complete functionality. After minification, the tool displays a file size comparison showing exactly how
            much was saved.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="html-minifier-features"
          title="Key Features"
          items={[
            'Comprehensive HTML compression with 17+ configurable optimization options',
            'Automatic comment removal and whitespace collapsing for maximum size reduction',
            'Options to remove redundant, empty, and boolean attributes',
            'Inline CSS and JavaScript minification for complete page optimization',
            'Attribute sorting and class name organization for consistent output',
            'File size comparison showing compression statistics and savings',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-html-minifier"
          title="Why Use This Tool"
          items={[
            'Accelerates page load times by reducing HTML file size by 30-70%',
            'Improves Core Web Vitals scores, directly impacting search engine rankings',
            'Reduces bandwidth consumption and hosting costs for high-traffic websites',
            'Removes verbose comments and unnecessary code that can expose implementation details',
            'Delivers better user experience on mobile devices and slow network connections',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="html-minifier-use-cases"
          title="Common Use Cases"
          items={[
            'Optimizing production HTML output before deployment to web servers and CDNs',
            'Reducing page weight for performance-sensitive landing pages and marketing sites',
            'Preparing HTML email templates with minimized code for faster rendering',
            'Compressing HTML documentation and knowledge base articles for faster delivery',
            'Integrating into build pipelines and CI/CD workflows for automated optimization',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="html-minifier-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            This tool uses the{' '}
            <a
              href="https://www.npmjs.com/package/html-minifier-terser"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              html-minifier-terser
            </a>{' '}
            npm package via a server-side API endpoint. The API accepts HTML content and an options object, processes
            the minification server-side, and returns the compressed output along with size statistics. The library
            provides granular control over each optimization aspect.
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

      <ToolCreditsSection />
    </div>
  );
}
