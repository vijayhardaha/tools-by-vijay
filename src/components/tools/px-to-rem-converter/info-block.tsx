import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
/**
 * Provides information about the Px to Rem Converter Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @returns {JSX.Element} The rendered component displaying tool information.
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-8 md:space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="about-px-to-rem-converter-tool">
          About Px to Rem Converter Tool
        </h2>
        <p className="mb-4">
          The Px to Rem Converter Tool helps you convert pixel values to rem units based on a base font size. This is
          useful for creating responsive and scalable designs in web development.
        </p>
        <p className="mb-4">
          This tool simplifies the process of maintaining consistent spacing, typography, and layout across your project
          by using relative units instead of fixed pixel values.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="why-you-should-use-this-tool">
          Why You Should Use This Tool
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Ensures your designs are scalable and responsive across devices.</li>
          <li>Helps maintain consistency in typography and spacing.</li>
          <li>Reduces the effort required to calculate rem values manually.</li>
          <li>Improves accessibility by adhering to relative units for font sizing.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="how-to-use-this-tool">
          How to Use This Tool
        </h3>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Enter Pixel Value:</strong> Input the pixel value you want to convert.
          </li>
          <li>
            <strong>Set Base Font Size:</strong> Specify the base font size (default is 16px).
          </li>
          <li>
            <strong>View Result:</strong> The tool will display the equivalent rem value.
          </li>
        </ol>
      </section>
      <FAQ>
        <FAQItem
          heading="What is the difference between px and rem?"
          headingId="what-is-the-difference-between-px-and-rem"
        >
          <p>
            PX is an absolute pixel unit. REM is relative to the root font size (typically 16px), respecting user
            preferences for accessibility.
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
          . This tool is designed to simplify web development workflows and improve design consistency.
        </p>
      </Credits>
    </div>
  );
}
