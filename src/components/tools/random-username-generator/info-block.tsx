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

const faqSchemaData = [buildFaqPageSchema('random-username-generator', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the Random Username Generator Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-random-username-generator-tool">
          What Is the Random Username Generator Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>Random Username Generator</strong> is a free online utility that helps you create creative,
            unique usernames for gaming, social media, and online profiles by combining adjectives, nouns, and numbers
            for memorable handles.
          </p>
          <p>
            The Random Username Generator combines adjectives and nouns from curated word lists to create readable,
            memorable usernames. Each username follows the pattern [Adjective][Noun][Number], creating combinations like
            BraveWizard742. You control the quantity and regenerate for fresh results with one click.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="random-username-generator-features"
          title="Key Features"
          items={[
            'Combines adjectives and nouns for readable, memorable username patterns',
            'Appends random 2-4 digit numbers for uniqueness and availability',
            'Configurable quantity from 1 to 200 usernames per generation',
            'Clean, formatted output with sequential numbering',
            'One-click copy for immediate use in profiles and signup forms',
            'Positive, appropriate word choices suitable for all audiences',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-random-username-generator"
          title="Why Use This Tool"
          items={[
            'Generates creative, available usernames when your first choices are taken',
            'Produces readable, memorable names that are easy to share and recall',
            'Saves time brainstorming unique handles across multiple platforms',
            'Provides ready-to-use names for game characters and online profiles',
            'Supports batch generation for testing and development purposes',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="random-username-generator-use-cases"
          title="Common Use Cases"
          items={[
            'Finding available usernames for social media platforms like Twitter, Instagram, and TikTok',
            'Creating character names for MMOs, RPGs, and online gaming communities',
            'Generating test user accounts for QA, development, and staging environments',
            'Producing anonymous usernames for forums, communities, and discussion boards',
            'Creating unique handles for streaming platforms like Twitch and YouTube',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="random-username-generator-technical-details">
          Technical Details
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The generator maintains curated word lists of 31 adjectives and 31 nouns. Each username combines a randomly
            selected adjective with a randomly selected noun and a 2-4 digit random number suffix. The combination
            creates approximately 31 x 31 x 900 = 864,900 possible unique username combinations.
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
