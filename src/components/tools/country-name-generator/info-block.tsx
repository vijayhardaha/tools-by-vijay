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

const faqSchemaData = [buildFaqPageSchema('country-name-generator', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the Country Name Generator Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-country-name-generator-tool">
          What Is the Country Name Generator Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>Country Name Generator</strong> is a free online utility that helps you generate random
            fictional country names for world-building, creative writing, RPG gaming, and simulation projects from a
            curated database.
          </p>
          <p>
            The Country Name Generator randomly selects names from a curated database of over 200 fictional country
            names. Each name is independently and randomly chosen with replacement, allowing for any quantity of names
            to be generated. You can specify the count from 1 to 200 names per generation.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="country-name-generator-features"
          title="Key Features"
          items={[
            'Database of 200+ unique fictional country names for diverse generation',
            'Configurable quantity from 1 to 200 names per generation batch',
            'Random selection with independent choice for each name',
            'Clean, formatted output with sequential numbering for readability',
            'One-click copy for immediate use in documents and projects',
            'Client-side generation with no server communication required',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-country-name-generator"
          title="Why Use This Tool"
          items={[
            'Sparks creativity for authors and game masters building fictional worlds and settings',
            'Eliminates the struggle of inventing believable country names from scratch',
            'Provides ready-to-use names for maps, scenarios, and storytelling projects',
            'Supports rapid prototyping of game environments and narrative settings',
            'Offers unlimited combinations for diverse and varied naming needs',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="country-name-generator-use-cases"
          title="Common Use Cases"
          items={[
            'Creating fictional nations for fantasy and sci-fi novels, stories, and world-building',
            'Populating RPG campaign settings with diverse country names for exploration',
            'Generating placeholder data for software testing and database seeding',
            'Developing fictional maps and geopolitical scenarios for educational activities',
            'Building simulation and strategy game environments with varied nation names',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="country-name-generator-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The generator uses a curated array of 200+ fictional country names stored client-side. Each generation
            randomly selects names from this array using JavaScript&apos;s Math.random() with uniform distribution.
            Names are independently selected, allowing the same name to appear multiple times in a single generation
            batch.
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
