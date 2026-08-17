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

const faqSchemaData = [buildFaqPageSchema('slugify', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the Slugify Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-slugify-tool">What Is the Slugify Tool?</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>Slugify</strong> is a free online utility that helps you convert any text into clean,
            SEO-optimized URL slugs, perfect for creating readable, search-engine-friendly permalinks for blogs and
            websites.
          </p>
          <p>
            The Slugify Tool processes your input text by removing special characters, converting spaces to separators
            (hyphens or underscores), transforming to lowercase, and normalizing accented characters into ASCII
            equivalents using the slugify and latinize open-source libraries. All processing happens instantly in your
            browser with no server round-trips.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="slugify-features"
          title="Key Features"
          items={[
            'Custom separator selection between hyphens (recommended for SEO) and underscores',
            'Lowercase conversion for consistent, standardized URL formatting',
            'Optional number removal from generated slugs',
            'Unicode and international character normalization via Latinize',
            'Instant reactive output updates as you type or adjust options',
            'One-click copy to clipboard for rapid workflow integration',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-slugify"
          title="Why Use This Tool"
          items={[
            'Improves search engine rankings with clean, keyword-rich URL structures',
            'Prevents broken links caused by spaces, special characters, and unsupported symbols',
            'Boosts click-through rates with readable, user-friendly URL paths',
            'Saves development time by eliminating manual slug formatting',
            'Ensures international compatibility by normalizing accented and special characters',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="slugify-use-cases"
          title="Common Use Cases"
          items={[
            'Generating SEO-friendly permalinks for blog posts and articles in CMS platforms like WordPress and Ghost',
            'Creating clean dynamic routes in modern frameworks such as Next.js, Nuxt, Angular, and Gatsby',
            'Automating product URL generation for e-commerce platforms and catalog management systems',
            'Formatting readable, shareable URLs for marketing campaigns and landing pages',
            'Processing bulk content migrations and static site generation with Jekyll, Hugo, or Eleventy',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="slugify-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            This tool leverages two battle-tested open-source JavaScript libraries. The{' '}
            <a
              href="https://www.npmjs.com/package/slugify"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              slugify
            </a>{' '}
            package provides robust string-to-slug conversion with configurable separators and strict mode filtering.
            The{' '}
            <a
              href="https://www.npmjs.com/package/latinize"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              latinize
            </a>{' '}
            package handles Unicode normalization, converting accented characters like &eacute;, &ccedil;, &ntilde;, and
            &uuml; into their ASCII equivalents for universal browser compatibility.
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
