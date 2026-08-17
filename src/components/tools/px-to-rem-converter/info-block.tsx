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

const faqSchemaData = [buildFaqPageSchema('px-to-rem-converter', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the PX to REM Converter Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-px-to-rem-converter-tool">
          What Is the PX to REM Converter Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>PX to REM Converter</strong> is a free online utility that helps you convert pixel values to REM
            units for accessible, scalable web typography and spacing, essential for responsive design and WCAG
            compliance.
          </p>
          <p>
            The PX to REM Converter divides your pixel value by a configurable base font size (default 16px) to
            calculate the equivalent rem value. The calculation is instant and updates as you adjust either the pixel
            value or the base font size. Results are shown with precision to 4 decimal places.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="px-to-rem-converter-features"
          title="Key Features"
          items={[
            'Instant pixel to rem conversion with reactive output updates',
            'Configurable base font size (default 16px, adjustable via input)',
            'Precise calculation to 4 decimal places for accurate CSS values',
            'Bidirectional reference: displays both the calculation and the result',
            'Clear button for quick reset and new conversions',
            'Complete client-side processing with no server communication',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-px-to-rem-converter"
          title="Why Use This Tool"
          items={[
            'Creates accessible, user-friendly designs that respect browser font size preferences',
            'Ensures WCAG compliance by using relative units instead of fixed pixel values',
            'Simplifies responsive design with scalable typography and spacing',
            'Maintains design consistency with easy conversion calculations',
            'Reduces manual math errors in CSS development workflows',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="px-to-rem-converter-use-cases"
          title="Common Use Cases"
          items={[
            'Converting design specifications from pixels to rem units for development',
            'Implementing accessible typography that respects user font size preferences',
            'Building responsive layouts with scalable spacing and sizing systems',
            'Auditing existing CSS for pixel values that should use relative units',
            'Creating design systems and component libraries with consistent rem-based sizing',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="px-to-rem-converter-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The conversion formula is simple: rem = px / baseFontSize. The default base font size is 16px, matching the
            standard browser default. REM units (Root EM) are relative to the root HTML element&apos;s font size, making
            them responsive to user browser settings and accessibility requirements.
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
