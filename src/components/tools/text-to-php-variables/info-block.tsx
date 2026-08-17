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

const faqSchemaData = [buildFaqPageSchema('text-to-php-variables', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the Text to PHP Variables Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-text-to-php-variables-tool">
          What Is the Text to PHP Variables Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>Text to PHP Variables</strong> is a free online utility that helps you automatically convert
            multiline text into PHP variable declarations with configurable naming conventions, streamlining
            configuration file and data list creation.
          </p>
          <p>
            The Text to PHP Variables tool processes each line of your input through a slugification pipeline that
            converts text into valid PHP variable names. Each resulting variable name is prefixed with $ and assigned an
            empty string value. You can choose from six naming conventions including camelCase, snake_case, and
            PascalCase.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="text-to-php-variables-features"
          title="Key Features"
          items={[
            'Support for 6 naming conventions: camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, flatcase, and UPPERCASE',
            'Automatic slugification of special characters for valid PHP variable names',
            'Multiline input processing with each line becoming a separate variable declaration',
            'Reactive output updates as you type or change naming convention',
            'One-click copy for direct use in PHP files and development environments',
            'Complete client-side processing with zero data transmission',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-text-to-php-variables"
          title="Why Use This Tool"
          items={[
            'Eliminates repetitive PHP variable declaration typing for configuration lists and data sets',
            'Ensures consistent naming convention adherence across PHP projects and teams',
            'Saves development time when creating test data and configuration arrays',
            'Handles special character conversion to produce valid PHP identifiers automatically',
            'Processes entirely in-browser with complete privacy for sensitive code',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="text-to-php-variables-use-cases"
          title="Common Use Cases"
          items={[
            'Generating PHP variable declarations from configuration spreadsheets and data exports',
            'Creating test data arrays for PHP unit tests and development environments',
            'Transforming database column lists into PHP variable declarations for ORM models',
            'Building PHP configuration files from structured text input and documentation',
            'Preparing form field variable declarations from form specification documents',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="text-to-php-variables-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The tool uses the{' '}
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
            libraries to convert text into valid PHP variable identifiers. Each line is slugified, transformed to the
            selected naming convention, and wrapped in PHP variable syntax ($name = &apos;&apos;;). The tool runs
            entirely client-side with no external API calls.
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
