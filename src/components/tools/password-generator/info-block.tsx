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

const faqSchemaData = [buildFaqPageSchema('password-generator', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the Password Generator Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-password-generator-tool">
          What Is the Password Generator Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>Password Generator</strong> is a free online utility that helps you create strong, high-entropy
            passwords instantly, with customizable length and complexity to secure your professional and personal
            accounts against breaches.
          </p>
          <p>
            The Password Generator builds passwords by randomly selecting characters from your chosen character sets -
            uppercase letters, lowercase letters, numbers, and symbols. It uses cryptographically-inspired random
            selection to ensure uniform distribution. When the exclude similar option is enabled, commonly confused
            characters like l, 1, I, O, and 0 are removed for readability.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="password-generator-features"
          title="Key Features"
          items={[
            'Customizable password length from 4 to 64 characters for varying security needs',
            'Toggle individual character sets: uppercase, lowercase, numbers, and symbols',
            'Exclude similar characters option to remove visually ambiguous characters',
            'Reactive password regeneration whenever any option changes',
            'One-click copy to clipboard for immediate use',
            'Client-side generation with zero data transmission for maximum privacy',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-password-generator"
          title="Why Use This Tool"
          items={[
            'Creates truly random, high-entropy passwords resistant to brute-force and dictionary attacks',
            'Eliminates the risk of weak, predictable, or reused passwords across accounts',
            'Generates passwords that meet or exceed industry security standards and compliance requirements',
            'Protects sensitive accounts with configurable complexity levels for different security contexts',
            'Operates entirely in-browser with no server communication for absolute data privacy',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="password-generator-use-cases"
          title="Common Use Cases"
          items={[
            'Generating strong master passwords for password managers like LastPass, 1Password, and Bitwarden',
            'Creating unique passwords for email, banking, and other high-value online accounts',
            'Generating compliant passwords that meet specific enterprise security policy requirements',
            'Creating temporary or one-time passwords for user onboarding and account recovery',
            'Building password lists for security testing and penetration testing scenarios',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="password-generator-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            Password generation uses the browser&apos;s cryptographically secure random number generator
            (crypto.getRandomValues) with rejection sampling to avoid bias when selecting characters from dynamically
            built character pools. The character pool is constructed based on user-selected options, and an optional
            filter removes visually similar characters. All generation occurs client-side with no data transmitted to
            any server.
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
