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

const faqSchemaData = [buildFaqPageSchema('password-strength-checker', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the Password Strength Checker Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-password-strength-checker-tool">
          What Is the Password Strength Checker Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>Password Strength Checker</strong> is a free online utility that helps you analyze your password
            security in real time, receiving instant feedback and actionable recommendations to protect against
            brute-force attacks and common vulnerabilities.
          </p>
          <p>
            The Password Strength Checker evaluates passwords against multiple security criteria including length,
            character diversity, common pattern detection, and resistance to brute-force and dictionary attacks. It
            provides a visual strength indicator and detailed breakdown of the password&apos;s characteristics to help
            users understand and improve their password security posture.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="password-strength-checker-features"
          title="Key Features"
          items={[
            'Real-time strength analysis as you type with color-coded visual feedback',
            'Multi-factor evaluation considering length, character types, patterns, and entropy',
            'Detailed breakdown showing character counts and composition analysis',
            'Identification of common vulnerabilities like keyboard patterns and dictionary words',
            'Actionable recommendations for improving weak or moderate passwords',
            'Complete client-side processing with zero data transmission for privacy',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-password-strength-checker"
          title="Why Use This Tool"
          items={[
            'Helps users understand what makes passwords secure through detailed educational feedback',
            'Identifies weak passwords before they become security liabilities for accounts and systems',
            'Educates on password best practices including length requirements and character diversity',
            'Prevents account compromises by detecting common password patterns attackers exploit',
            'Operates entirely in-browser with no server communication for complete password privacy',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="password-strength-checker-use-cases"
          title="Common Use Cases"
          items={[
            'Auditing existing passwords during security reviews and credential rotation initiatives',
            'Educating team members and employees on password security best practices and standards',
            'Testing new passwords before deployment across organizational accounts and systems',
            'Demonstrating password vulnerability concepts in security awareness training sessions',
            'Evaluating password policy compliance against organizational security requirements',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="password-strength-checker-technical-details">
          Technical Details
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The strength checker analyzes password length, character set diversity (uppercase, lowercase, numbers,
            symbols), common pattern detection, and overall entropy estimation. The analysis uses JavaScript string
            operations and regular expressions entirely within the browser with no server-side processing or data
            storage.
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
