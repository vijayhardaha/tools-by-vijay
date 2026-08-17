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

const faqSchemaData = [buildFaqPageSchema('js-minifier', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the JavaScript Minifier Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-js-minifier-tool">
          What Is the JavaScript Minifier Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>JavaScript Minifier</strong> is a free online utility that helps you compress JavaScript files
            to minimize payload size, improving execution speed and reducing bandwidth with configurable mangling,
            console removal, and comment stripping.
          </p>
          <p>
            The JavaScript Minifier sends your code to a server-side API powered by the{' '}
            <a
              href="https://www.npmjs.com/package/@putout/minify"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              @putout/minify
            </a>{' '}
            library. The minification engine removes whitespace and comments, shortens variable and function names
            (mangling), strips debugger statements and console logs, and produces compact, production-ready JavaScript
            output.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="js-minifier-features"
          title="Key Features"
          items={[
            'Variable and function name mangling for significant size reduction',
            'Console.log and debugging statement removal for production code',
            'Debugger statement stripping to eliminate breakpoints',
            'Comment removal for complete code compression',
            'All optimizations configurable via toggle switches',
            'File size comparison showing compression ratio and savings',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-js-minifier"
          title="Why Use This Tool"
          items={[
            'Reduces JavaScript file size by 40-80% through name mangling and code stripping',
            'Improves page load times and execution speed for JavaScript-heavy applications',
            'Removes debugging artifacts that have no place in production environments',
            'Decreases bandwidth consumption for script delivery across networks',
            'Provides a basic layer of code obfuscation through identifier shortening',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="js-minifier-use-cases"
          title="Common Use Cases"
          items={[
            'Optimizing production JavaScript bundles for faster initial page loads',
            'Preparing library files for CDN distribution with minimal payload size',
            'Stripping development-only code like console logs and debugger statements',
            'Compressing API response scripts and dynamically loaded JavaScript modules',
            'Integrating into build pipelines for automated production optimization',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="js-minifier-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            This tool uses the{' '}
            <a
              href="https://www.npmjs.com/package/@putout/minify"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              @putout/minify
            </a>{' '}
            npm package via a server-side API. The minifier performs AST-based transformations including identifier
            shortening (mangling), dead code elimination, and configurable removal of console and debugger statements.
            The library provides fine-grained control over which optimizations to apply.
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
