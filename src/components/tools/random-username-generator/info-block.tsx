import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
/**
 * Provides information about the Username Generator Tool, including its purpose,
 * usage instructions, and benefits.
 *
 * @returns {JSX.Element} The rendered component displaying tool information
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-8 md:space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="about-username-generator">
          About Username Generator
        </h2>
        <p className="mb-4">
          The Random Username Generator tool helps you create random usernames for testing, gaming, or creative
          projects. It is useful for developers, gamers, and content creators.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="how-to-use-this-tool">
          How to Use This Tool
        </h3>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Enter Count:</strong> Specify the number of usernames to generate.
          </li>
          <li>
            <strong>Generate:</strong> Click the “Generate” button to create random usernames.
          </li>
          <li>
            <strong>Copy Result:</strong> Use the copy button to copy the generated usernames.
          </li>
        </ol>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="why-use-this-tool">
          Why Use This Tool
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Quickly generate random usernames for testing or mock data.</li>
          <li>Save time when working on projects requiring placeholder data.</li>
          <li>Enhance creativity by using random usernames in games or stories.</li>
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
              {`CoolTiger123\nBraveWizard456\nSmartNinja789\nHappyHero101\nLuckyEagle202`}
            </pre>
          </div>
        </div>
      </section>

      <FAQ>
        <FAQItem heading="How are usernames generated?" headingId="how-are-usernames-generated">
          <p>
            Usernames combine a random adjective, noun, and number (e.g., CoolTiger742) for readable, unique results.
          </p>
        </FAQItem>
        <FAQItem heading="How many can I generate?" headingId="how-many-can-i-generate">
          <p>Generate up to 200 usernames at once, each independently randomized.</p>
        </FAQItem>
        <FAQItem heading="Are generated usernames unique?" headingId="are-generated-usernames-unique">
          <p>Not guaranteed since random combinations may produce duplicates with large generation counts.</p>
        </FAQItem>
        <FAQItem heading="What words are used?" headingId="what-words-are-used">
          <p>The tool uses 31 adjectives and 31 nouns — all positive, memorable words for appealing combinations.</p>
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
          . This tool is designed to assist with generating random usernames for various purposes.
        </p>
      </Credits>
    </div>
  );
}
