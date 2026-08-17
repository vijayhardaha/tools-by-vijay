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

const faqSchemaData = [buildFaqPageSchema('character-count', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the Character Counter Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-character-count-tool">
          What Is the Character Counter Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>Character Counter</strong> is a free online utility that helps you get detailed text analysis
            including character count, word count, sentence count, paragraph count, and space count, perfect for meeting
            social media and content limits.
          </p>
          <p>
            The Character Counter analyzes your input text in real time using JavaScript string processing. It counts
            characters (with and without spaces), words (by splitting on whitespace), sentences (by detecting terminal
            punctuation), paragraphs (by detecting double line breaks), and spaces. All statistics update instantly as
            you type.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="character-count-features"
          title="Key Features"
          items={[
            'Real-time statistics updating with every keystroke for immediate feedback',
            'Character count with and without spaces for different requirements',
            'Word count, sentence count, paragraph count, and line count',
            'Space count for detailed text composition analysis',
            'Zero server communication for complete data privacy',
            'Clear button for quick text reset and new analysis',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-character-count"
          title="Why Use This Tool"
          items={[
            'Ensures content meets strict character limits for social media platforms and ad copy',
            'Helps writers optimize content length for SEO meta descriptions and title tags',
            'Provides comprehensive text metrics for editorial quality control',
            'Supports academic and professional writing requirements with word and sentence counts',
            'Protects sensitive content with fully client-side processing and analysis',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="character-count-use-cases"
          title="Common Use Cases"
          items={[
            "Checking tweet lengths against Twitter's 280-character limit before posting",
            "Optimizing meta descriptions to stay within Google's 155-160 character display limit",
            'Meeting word count requirements for academic essays, articles, and blog posts',
            'Analyzing SMS message lengths for marketing campaigns and alerts',
            'Tracking writing productivity with real-time word and character statistics',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="character-count-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            All text analysis uses native JavaScript string methods operating entirely in the browser. Characters are
            counted using string length properties, words are identified by whitespace-split tokenization, sentences by
            terminal punctuation detection, and paragraphs by double newline separation. No data is transmitted to any
            server.
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
