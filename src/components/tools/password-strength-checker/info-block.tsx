import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';

/**
 * Comprehensive, SEO-optimized information about the Password Strength Checker Tool.
 *
 * @returns {JSX.Element} The rendered info block component
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="what-is-password-strength-checker-tool">
          What Is the Password Strength Checker Tool?
        </h2>
        <p className="mb-4">
          The <strong>Password Strength Checker</strong> is a free online utility that helps you analyze your password
          security in real time, receiving instant feedback and actionable recommendations to protect against
          brute-force attacks and common vulnerabilities.
        </p>
        <p className="mb-4">
          The Password Strength Checker evaluates passwords against multiple security criteria including length,
          character diversity, common pattern detection, and resistance to brute-force and dictionary attacks. It
          provides a visual strength indicator and detailed breakdown of the password&apos;s characteristics to help
          users understand and improve their password security posture.
        </p>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="password-strength-checker-features">
          Key Features
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Real-time strength analysis as you type with color-coded visual feedback</li>
          <li>Multi-factor evaluation considering length, character types, patterns, and entropy</li>
          <li>Detailed breakdown showing character counts and composition analysis</li>
          <li>Identification of common vulnerabilities like keyboard patterns and dictionary words</li>
          <li>Actionable recommendations for improving weak or moderate passwords</li>
          <li>Complete client-side processing with zero data transmission for privacy</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="why-use-password-strength-checker">
          Why Use This Tool
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Helps users understand what makes passwords secure through detailed educational feedback</li>
          <li>Identifies weak passwords before they become security liabilities for accounts and systems</li>
          <li>Educates on password best practices including length requirements and character diversity</li>
          <li>Prevents account compromises by detecting common password patterns attackers exploit</li>
          <li>Operates entirely in-browser with no server communication for complete password privacy</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="password-strength-checker-use-cases">
          Common Use Cases
        </h2>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Auditing existing passwords during security reviews and credential rotation initiatives</li>
          <li>Educating team members and employees on password security best practices and standards</li>
          <li>Testing new passwords before deployment across organizational accounts and systems</li>
          <li>Demonstrating password vulnerability concepts in security awareness training sessions</li>
          <li>Evaluating password policy compliance against organizational security requirements</li>
        </ul>
      </section>

      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="password-strength-checker-technical-details">
          Technical Details
        </h2>
        <p>
          The strength checker analyzes password length, character set diversity (uppercase, lowercase, numbers,
          symbols), common pattern detection, and overall entropy estimation. The analysis uses JavaScript string
          operations and regular expressions entirely within the browser with no server-side processing or data storage.
        </p>
      </section>

      <FAQ>
        <FAQItem heading="Is this tool free to use?" headingId="is-this-tool-free">
          <p>
            Yes, the Password Strength Checker is completely free to use with no signup, registration, or usage limits
            required.
          </p>
        </FAQItem>
        <FAQItem heading="Is my data sent to a server?" headingId="is-my-data-sent-to-a-server">
          <p>
            <p>
              No, all processing happens locally in your browser. Your data never leaves your device and is not stored
              or logged anywhere.
            </p>
          </p>
        </FAQItem>
        <FAQItem heading="How is password strength measured?" headingId="how-is-strength-measured">
          <p>
            Strength is evaluated based on length, character variety, and resistance to common attack patterns. Longer
            passwords with diverse character types score higher.
          </p>
        </FAQItem>
        <FAQItem heading="Is my password sent to a server?" headingId="is-my-password-sent-to-a-server">
          <p>
            No, all analysis happens locally in your browser for maximum privacy. Your password never leaves your
            device.
          </p>
        </FAQItem>
        <FAQItem heading="What makes a password weak?" headingId="what-makes-a-password-weak">
          <p>
            Common weaknesses include short length, lack of character variety, dictionary words, personal information,
            keyboard patterns, and password reuse.
          </p>
        </FAQItem>
        <FAQItem heading="What is a passphrase?" headingId="what-is-a-passphrase">
          <p>
            A passphrase is a sequence of random words that is easier to remember but still highly secure. It leverages
            length over complexity.
          </p>
        </FAQItem>
        <FAQItem heading="Can I use this tool offline?" headingId="can-i-use-this-tool-offline">
          <p>
            <p>
              Yes, since all processing happens client-side in your browser, this tool works offline once the page has
              loaded.
            </p>
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
