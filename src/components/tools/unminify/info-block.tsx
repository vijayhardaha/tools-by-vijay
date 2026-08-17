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

const faqSchemaData = [buildFaqPageSchema('unminify', FAQS)];

/**
 * Comprehensive, SEO-optimized information about the Unminify / Beautifier Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <JsonLd data={faqSchemaData} />

      <ToolInfoSection>
        <ToolInfoSectionHeading id="what-is-unminify-tool">
          What Is the Unminify / Beautifier Tool?
        </ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            The <strong>Unminify / Beautifier</strong> is a free online utility that helps you reverse minification for
            HTML, CSS, and JavaScript, beautifying compressed code into readable, properly indented format for debugging
            and code analysis.
          </p>
          <p>
            The Unminify Tool sends your minified code to a server-side API powered by{' '}
            <a
              href="https://prettier.io/"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              Prettier
            </a>
            , the industry-standard code formatter. The API parses the code according to its detected type (JavaScript,
            CSS, HTML, JSON, or XML) and reformats it with proper indentation, line breaks, and spacing for maximum
            readability.
          </p>
        </ToolInfoSectionContent>
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="unminify-features"
          title="Key Features"
          items={[
            'Multi-language support for JavaScript, CSS, HTML, XML, and JSON',
            'Automatic code type detection for correct formatting rules',
            'Prettier-powered formatting with industry-standard output',
            'Proper indentation, line breaks, and spacing for readability',
            'One-click copy for immediate use in editors and IDEs',
            'Edge runtime processing for fast, reliable formatting',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="why-use-unminify"
          title="Why Use This Tool"
          items={[
            'Restores readability to minified code for effective debugging and maintenance',
            'Helps developers understand third-party, obfuscated, or legacy code structures',
            'Produces consistently formatted code that follows established style conventions',
            'Saves time compared to manual code reformatting in editors',
            'Supports multiple languages in a single unified interface',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionList
          id="unminify-use-cases"
          title="Common Use Cases"
          items={[
            'Debugging minified production code to identify and fix JavaScript errors',
            'Analyzing third-party scripts and libraries by restoring readable formatting',
            'Recovering readable code from compressed CSS and HTML sources',
            'Preparing minified code for code review and team collaboration',
            'Converting single-line JSON responses into readable, structured output',
          ]}
        />
      </ToolInfoSection>

      <ToolInfoSection>
        <ToolInfoSectionHeading id="unminify-technical-details">Technical Details</ToolInfoSectionHeading>
        <ToolInfoSectionContent>
          <p>
            This tool uses{' '}
            <a
              href="https://prettier.io/"
              className="font-medium text-pink-500 underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              Prettier
            </a>
            , the industry-standard code formatter, via a serverless API endpoint. Prettier parses the code into an AST
            (Abstract Syntax Tree) and reprints it with consistent formatting rules. The tool runs on the Vercel Edge
            Runtime for low-latency processing with automatic language detection.
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
