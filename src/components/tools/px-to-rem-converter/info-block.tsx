import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the PX to REM Converter Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-px-to-rem-converter-tool">
          What Is the PX to REM Converter Tool?
        </h2>
        <p className="mb-4">
          The <strong>PX to REM Converter</strong> is a free online utility that helps you convert pixel values to REM
          units for accessible, scalable web typography and spacing, essential for responsive design and WCAG
          compliance.
        </p>
        <p className="mb-4">
          The PX to REM Converter divides your pixel value by a configurable base font size (default 16px) to calculate
          the equivalent rem value. The calculation is instant and updates as you adjust either the pixel value or the
          base font size. Results are shown with precision to 4 decimal places.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="px-to-rem-converter-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Instant pixel to rem conversion with reactive output updates</li>
          <li>Configurable base font size (default 16px, adjustable via input)</li>
          <li>Precise calculation to 4 decimal places for accurate CSS values</li>
          <li>Bidirectional reference: displays both the calculation and the result</li>
          <li>Clear button for quick reset and new conversions</li>
          <li>Complete client-side processing with no server communication</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-px-to-rem-converter">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Creates accessible, user-friendly designs that respect browser font size preferences</li>
          <li>Ensures WCAG compliance by using relative units instead of fixed pixel values</li>
          <li>Simplifies responsive design with scalable typography and spacing</li>
          <li>Maintains design consistency with easy conversion calculations</li>
          <li>Reduces manual math errors in CSS development workflows</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="px-to-rem-converter-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Converting design specifications from pixels to rem units for development</li>
          <li>Implementing accessible typography that respects user font size preferences</li>
          <li>Building responsive layouts with scalable spacing and sizing systems</li>
          <li>Auditing existing CSS for pixel values that should use relative units</li>
          <li>Creating design systems and component libraries with consistent rem-based sizing</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="px-to-rem-converter-technical-details">
          Technical Details
        </h2>
        <p>
          The conversion formula is simple: rem = px / baseFontSize. The default base font size is 16px, matching the
          standard browser default. REM units (Root EM) are relative to the root HTML element&apos;s font size, making
          them responsive to user browser settings and accessibility requirements.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the PX to REM Converter is completely free to use with no signup, registration, or usage limits
            required.
          </p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            No, all processing happens locally in your browser. Your data never leaves your device and is not stored or
            logged anywhere.
          </p>
        </FAQItem>
        <FAQItem
          heading="What is the difference between px and rem?"
          headingId="what-is-the-difference-between-px-and-rem"
        >
          <p>
            PX is an absolute pixel unit. REM is relative to the root font size, respecting user preferences for
            accessibility.
          </p>
        </FAQItem>
        <FAQItem heading="Why use rem over px?" headingId="why-use-rem-over-px">
          <p>
            REM units respect browser font size settings for better accessibility and make maintaining consistent
            spacing easier.
          </p>
        </FAQItem>
        <FAQItem heading="What is the default base font size?" headingId="what-is-the-default-base-font-size">
          <p>
            The default is 16px, matching the typical browser default. Customize this to match your project design
            system.
          </p>
        </FAQItem>
        <FAQItem heading="How to calculate rem manually?" headingId="how-to-calculate-rem-manually">
          <p>Divide the pixel value by the base font size. For example, with 16px base: 32px / 16 = 2rem.</p>
        </FAQItem>
        <FAQItem heading="Can I use this tool offline?" headingId="can-i-use-this-tool-offline">
          <p>
            Yes, since all processing happens client-side in your browser, this tool works offline once the page has
            loaded.
          </p>
        </FAQItem>
      </FAQ>

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
