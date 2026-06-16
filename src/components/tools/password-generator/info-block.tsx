import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
/**
 * Provides information about the Password Generator Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @returns {JSX.Element} The rendered component displaying tool information
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-8 md:space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="about-password-generator-tool">
          About Password Generator Tool
        </h2>
        <p className="mb-4">
          The Password Generator Tool helps you create strong, secure passwords with customizable options. You can
          choose the password length, include or exclude uppercase letters, lowercase letters, numbers, and symbols. For
          better readability, you can also exclude similar characters that may be confused with each other.
        </p>
        <p className="mb-4">
          Generated passwords are created client-side in your browser, meaning they never leave your device or get sent
          over the internet. This ensures maximum security for your generated passwords.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="why-strong-passwords-matter">
          Why Strong Passwords Matter
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Prevents unauthorized access to your accounts and sensitive information.</li>
          <li>Protects against brute force attacks where hackers systematically try all possible combinations.</li>
          <li>Makes password cracking computationally expensive and time-consuming for attackers.</li>
          <li>Reduces the risk of having your accounts compromised in data breaches.</li>
          <li>Creates a strong defense against common password guessing methods.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="password-security-tips">
          Password Security Tips
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Use a different password for each of your accounts.</li>
          <li>Aim for passwords that are at least 12 characters long.</li>
          <li>Include a mix of uppercase letters, lowercase letters, numbers, and symbols.</li>
          <li>Consider using a password manager to securely store your passwords.</li>
          <li>Enable two-factor authentication (2FA) whenever possible for an extra layer of security.</li>
          <li>Change passwords regularly, especially for your most sensitive accounts.</li>
        </ul>
      </section>
      <FAQ>
        <FAQItem heading="How strong are generated passwords?" headingId="how-strong-are-generated-passwords">
          <p>
            With all character types enabled and a length of 16+, passwords have billions of combinations, making them
            resistant to brute-force attacks.
          </p>
        </FAQItem>
        <FAQItem heading="Are passwords stored or sent anywhere?" headingId="are-passwords-stored-or-sent-anywhere">
          <p>No, generation happens locally. Passwords are never transmitted, stored, or logged anywhere.</p>
        </FAQItem>
        <FAQItem heading="What length should I use?" headingId="what-length-should-i-use">
          <p>We recommend at least 12 characters. Use 16+ for critical accounts like email and banking.</p>
        </FAQItem>
        <FAQItem heading="What does exclude similar characters do?" headingId="what-does-exclude-similar-characters-do">
          <p>
            This removes characters that look alike (like O and 0), making passwords easier to read and type correctly.
          </p>
        </FAQItem>
        <FAQItem heading="Should I use a password manager?" headingId="should-i-use-a-password-manager">
          <p>Yes, we recommend using a password manager to securely store generated passwords across devices.</p>
        </FAQItem>
        <FAQItem
          heading="What if all character types are disabled?"
          headingId="what-if-all-character-types-are-disabled"
        >
          <p>
            The tool displays an error: &quot;Select at least one character type.&quot; You need at least one set
            enabled.
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
          . This tool is built with security best practices in mind and runs entirely in your browser.
        </p>
      </Credits>
    </div>
  );
}
