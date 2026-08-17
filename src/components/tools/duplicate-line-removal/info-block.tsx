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

const faqSchemaData = [buildFaqPageSchema('duplicate-line-removal', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the Duplicate Line Remover Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-duplicate-line-removal-tool">
          What Is the Duplicate Line Remover Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>Duplicate Line Remover</strong> is a free online utility that helps you clean your datasets by
            removing repeated lines while maintaining original order and ensuring each entry is unique with configurable
            sorting options.
          </p>
          <p>
            The Duplicate Line Remover processes each line through a Set-based deduplication algorithm. Lines are
            trimmed of whitespace, then compared for equality. After removing duplicates, lines can be sorted
            alphabetically, by ASCII values, or left in their original order. An optional reverse sort is available for
            descending order.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="duplicate-line-removal-features"
          title="Key Features"
          items={[
            'Efficient duplicate removal preserving original line order or with sorting',
            'Three sorting options: no sort, alphabetical (locale-aware), and ASCII (byte-order)',
            'Reverse sort toggle for descending order in any sort mode',
            'Whitespace trimming before comparison for accurate deduplication',
            'Instant client-side processing with no data transmission',
            'Clear and reset options for quick workflow iteration',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-duplicate-line-removal"
          title="Why Use This Tool"
          items={[
            'Eliminates redundant entries from datasets, lists, and configuration files',
            'Ensures data integrity by maintaining only unique entries',
            'Organizes data with flexible sorting options for improved readability',
            'Accelerates data cleaning workflows that would take hours manually',
            'Protects sensitive data with fully client-side processing',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="duplicate-line-removal-use-cases"
          title="Common Use Cases"
          items={[
            'Cleaning email lists by removing duplicate addresses before marketing campaigns',
            'Deduplicating product SKUs, part numbers, and inventory lists',
            'Removing repeated entries from CSV exports and database dumps',
            'Cleaning configuration files and environment variable lists',
            'Preparing unique entries for dropdown menus, selectors, and form options',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="duplicate-line-removal-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The deduplication algorithm uses JavaScript Set objects for O(n) lookup performance. Lines are trimmed of
            surrounding whitespace before comparison to prevent false duplicates from formatting differences. The
            sorting uses either localeCompare for alphabetical ordering or native string comparison for ASCII ordering.
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
