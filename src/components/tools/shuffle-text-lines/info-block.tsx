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

const faqSchemaData = [buildFaqPageSchema('shuffle-text-lines', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the Shuffle Text Lines Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-shuffle-text-lines-tool">
          What Is the Shuffle Text Lines Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>Shuffle Text Lines</strong> is a free online utility that helps you randomize the order of your
            text lines instantly using the Fisher-Yates algorithm, perfect for creating randomized lists and unbiased
            sampling.
          </p>
          <p>
            The Shuffle Text Lines tool splits input into individual lines, applies optional preprocessing (duplicate
            removal, empty line filtering, whitespace trimming), then randomizes the order using the Fisher-Yates
            shuffle algorithm - the gold standard for unbiased random permutation.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="shuffle-text-lines-features"
          title="Key Features"
          items={[
            'Unbiased random shuffling using the Fisher-Yates algorithm',
            'Optional duplicate removal before shuffling for unique randomized lists',
            'Empty line filtering to exclude blank entries from output',
            'Whitespace trimming for clean, consistent line formatting',
            'Instant client-side processing with no data transmission',
            'Multiple preprocessing options configurable before shuffling',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-shuffle-text-lines"
          title="Why Use This Tool"
          items={[
            'Creates truly unbiased random ordering for fair results in contests and giveaways',
            'Eliminates manual randomization effort for sampling and testing workflows',
            'Generates varied content orders for A/B testing and user experience research',
            'Supports data anonymization by randomizing record order in datasets',
            'Processes entirely in-browser with complete data privacy assurance',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="shuffle-text-lines-use-cases"
          title="Common Use Cases"
          items={[
            'Randomizing contest entries and giveaway participants for fair winner selection',
            'Creating randomized test data for quality assurance and load testing',
            'Shuffling flashcard decks and quiz questions for varied learning experiences',
            'Generating random orderings for A/B test variants and experiment conditions',
            'Randomizing playlist items, to-do lists, and task assignments for variety',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="shuffle-text-lines-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The Fisher-Yates (also known as Knuth) shuffle algorithm provides unbiased random permutation. The algorithm
            iterates through the array from the last element to the first, swapping each element with a randomly
            selected earlier element. This guarantees each of the n! possible permutations is equally likely.
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
