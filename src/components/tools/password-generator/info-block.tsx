import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the Password Generator Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-password-generator-tool">
          What Is the Password Generator Tool?
        </h2>
        <p className="mb-4">
          The <strong>Password Generator</strong> is a free online utility that helps you create strong, high-entropy
          passwords instantly, with customizable length and complexity to secure your professional and personal accounts
          against breaches.
        </p>
        <p className="mb-4">
          The Password Generator builds passwords by randomly selecting characters from your chosen character sets -
          uppercase letters, lowercase letters, numbers, and symbols. It uses cryptographically-inspired random
          selection to ensure uniform distribution. When the exclude similar option is enabled, commonly confused
          characters like l, 1, I, O, and 0 are removed for readability.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="password-generator-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Customizable password length from 4 to 64 characters for varying security needs</li>
          <li>Toggle individual character sets: uppercase, lowercase, numbers, and symbols</li>
          <li>Exclude similar characters option to remove visually ambiguous characters</li>
          <li>Reactive password regeneration whenever any option changes</li>
          <li>One-click copy to clipboard for immediate use</li>
          <li>Client-side generation with zero data transmission for maximum privacy</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-password-generator">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Creates truly random, high-entropy passwords resistant to brute-force and dictionary attacks</li>
          <li>Eliminates the risk of weak, predictable, or reused passwords across accounts</li>
          <li>Generates passwords that meet or exceed industry security standards and compliance requirements</li>
          <li>Protects sensitive accounts with configurable complexity levels for different security contexts</li>
          <li>Operates entirely in-browser with no server communication for absolute data privacy</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="password-generator-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Generating strong master passwords for password managers like LastPass, 1Password, and Bitwarden</li>
          <li>Creating unique passwords for email, banking, and other high-value online accounts</li>
          <li>Generating compliant passwords that meet specific enterprise security policy requirements</li>
          <li>Creating temporary or one-time passwords for user onboarding and account recovery</li>
          <li>Building password lists for security testing and penetration testing scenarios</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="password-generator-technical-details">
          Technical Details
        </h2>
        <p>
          Password generation uses JavaScript&apos;s Math.random() for character selection from dynamically built
          character pools. The character pool is constructed based on user-selected options, and an optional filter
          removes visually similar characters. All generation occurs client-side with no data transmitted to any server.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the Password Generator is completely free to use with no signup, registration, or usage limits
            required.
          </p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            No, all processing happens locally in your browser. Your data never leaves your device and is not stored or
            logged anywhere.
          </p>
        </FAQItem>
        <FAQItem heading="How strong are generated passwords?" headingId="how-strong-are-generated-passwords">
          <p>
            With all character types enabled and a length of 16+, passwords have billions of combinations, making them
            resistant to brute-force attacks.
          </p>
        </FAQItem>
        <FAQItem heading="Are passwords stored or sent anywhere?" headingId="are-passwords-stored-or-sent-anywhere">
          <p>
            No, generation happens locally in your browser. Passwords are never transmitted, stored, or logged anywhere.
          </p>
        </FAQItem>
        <FAQItem heading="What length should I use?" headingId="what-length-should-i-use">
          <p>We recommend at least 12 characters. Use 16+ for critical accounts like email and banking.</p>
        </FAQItem>
        <FAQItem heading="What does exclude similar characters do?" headingId="what-does-exclude-similar-characters-do">
          <p>
            This removes characters that look alike like O and 0, making passwords easier to read and type correctly.
          </p>
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
