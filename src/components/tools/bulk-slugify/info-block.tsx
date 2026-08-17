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

const faqSchemaData = [buildFaqPageSchema('bulk-slugify', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the Bulk Slugify Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-bulk-slugify-tool">What Is the Bulk Slugify Tool?</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>Bulk Slugify</strong> is a free online utility that helps you transform multiple lines of text
            into SEO-friendly slugs simultaneously, ideal for batch processing large sets of URLs for e-commerce or
            migrations.
          </p>
          <p>
            The Bulk Slugify Tool processes each line of your input independently through the same slugification
            pipeline - removing special characters, normalizing Unicode, converting case, and applying your chosen
            separator. Each line becomes a clean, URL-safe slug, and results are returned line-by-line for easy copying
            and integration.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="bulk-slugify-features"
          title="Key Features"
          items={[
            'Batch processing of hundreds of lines simultaneously with instant results',
            'Custom separator selection with hyphens or underscores per line',
            'Lowercase conversion toggle for consistent formatting across all slugs',
            'Number removal option for cleaner categorical URL structures',
            'International character normalization via Latinize',
            'Empty line handling to maintain or filter blank entries',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-bulk-slugify"
          title="Why Use This Tool"
          items={[
            'Eliminates hours of manual slug creation for large content libraries and product catalogs',
            'Maintains consistent URL patterns and formatting across entire websites and platforms',
            'Reduces errors from manual data entry with automated special character filtering',
            'Provides multi-language support with Unicode and accented character normalization',
            'Accelerates content migration workflows for CMS transitions and site launches',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="bulk-slugify-use-cases"
          title="Common Use Cases"
          items={[
            'Generating SEO-optimized URLs for thousands of e-commerce product listings in bulk',
            'Transforming CSV or spreadsheet exports of blog titles into ready-to-use slugs for CMS uploads',
            'Creating dynamic page routes during content migration between platforms and frameworks',
            'Building URL structures for large documentation sites, knowledge bases, and help centers',
            'Processing database records into URL-friendly formats for API endpoints and headless CMS systems',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="bulk-slugify-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The Bulk Slugify Tool combines the{' '}
            <a
              href="https://www.npmjs.com/package/slugify"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              slugify
            </a>{' '}
            and{' '}
            <a
              href="https://www.npmjs.com/package/latinize"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              latinize
            </a>{' '}
            open-source libraries with custom line-by-line processing logic. Each line is independently processed
            through the full slugification pipeline, ensuring that individual formatting rules apply consistently across
            all entries. The tool runs entirely client-side with no data transmission.
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
