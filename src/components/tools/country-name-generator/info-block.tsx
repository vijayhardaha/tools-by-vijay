import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
/**
 * Provides information about the Country Name Generator Tool, including its purpose,
 * usage instructions, and benefits.
 *
 * @returns {JSX.Element} The rendered component displaying tool information
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-8 md:space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold" id="about-country-name-generator">
          About Country Name Generator
        </h2>
        <p className="mb-4">
          The Country Name Generator tool helps you generate random country names for testing, educational purposes, or
          creative projects. It is useful for developers, educators, and content creators.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="how-to-use-this-tool">
          How to Use This Tool
        </h3>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Enter Count:</strong> Specify the number of country names to generate.
          </li>
          <li>
            <strong>Generate:</strong> Click the “Generate” button to create random country names.
          </li>
          <li>
            <strong>Copy Result:</strong> Use the copy button to copy the generated names.
          </li>
        </ol>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="why-use-this-tool">
          Why Use This Tool
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Quickly generate random country names for testing or mock data.</li>
          <li>Save time when working on projects requiring placeholder data.</li>
          <li>Enhance creativity by using random country names in stories or games.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="example-usage">
          Example Usage
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-medium" id="input-example">
              Input Example:
            </h4>
            <pre className="bg-secondary overflow-x-auto rounded-xl p-4 text-sm">{`Count: 5`}</pre>
          </div>

          <div>
            <h4 className="mb-2 font-medium" id="output-example">
              Output Example:
            </h4>
            <pre className="bg-secondary overflow-x-auto rounded-xl p-4 text-sm">
              {`1. Eldoria\n2. Zynthar\n3. Lumora\n4. Virelia\n5. Drakonia`}
            </pre>
          </div>
        </div>
      </section>
      <FAQ>
        <FAQItem heading="How many countries are included?" headingId="how-many-countries-are-included">
          <p>
            The tool contains over 200 country names including sovereign nations, territories, and disputed regions.
          </p>
        </FAQItem>
        <FAQItem heading="Can I generate multiple names?" headingId="can-i-generate-multiple-names">
          <p>Yes, generate up to 200 names at once by adjusting the count setting.</p>
        </FAQItem>
        <FAQItem heading="Are names unique?" headingId="are-names-unique">
          <p>Each name is independently selected, so the same country may appear multiple times in one generation.</p>
        </FAQItem>
        <FAQItem heading="What is this useful for?" headingId="what-is-this-useful-for">
          <p>
            Testing, populating databases, creating demo data, generating sample content, and educational geography
            activities.
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
          . This tool is designed to assist with generating random country names for various purposes.
        </p>
      </Credits>
    </div>
  );
}
