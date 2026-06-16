import type { JSX } from 'react';

import { Credits } from '@/components/tools/tool-credits';
import { FAQ, FAQItem } from '@/components/tools/tool-faq';
/**
 * Provides information about the Password Strength Checker Tool, including its purpose,
 * usage instructions, and examples.
 *
 * @returns {JSX.Element} The rendered component displaying tool information
 */
export function InfoBlock(): JSX.Element {
  return (
    <div className="space-y-8 md:space-y-12">
      <section>
        <h2 className="text-primary mb-4 text-2xl font-bold" id="about-password-strength-checker-tool">
          About Password Strength Checker Tool
        </h2>
        <p className="mb-4">
          The Password Strength Checker tool analyzes your password and provides feedback on its security level. It
          evaluates several criteria including length, character variety, and common patterns to determine how resistant
          your password would be against various hacking attempts.
        </p>
        <p className="mb-4">
          This tool runs entirely in your browser - your password is never transmitted over the internet or stored
          anywhere. For maximum security, avoid checking passwords for accounts you currently use on public or shared
          computers.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="how-password-strength-is-measured">
          How Password Strength is Measured
        </h3>
        <p className="mb-4">The strength of a password is determined by several factors:</p>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>
            <strong>Length:</strong> Longer passwords are generally more secure. A minimum of 8 characters is
            recommended, but 12 or more is ideal.
          </li>
          <li>
            <strong>Complexity:</strong> Including a mix of uppercase letters, lowercase letters, numbers, and special
            characters significantly increases password strength.
          </li>
          <li>
            <strong>Unpredictability:</strong> Avoiding common words, patterns (like “123456”), and personal information
            makes passwords harder to guess.
          </li>
          <li>
            <strong>Uniqueness:</strong> Using different passwords for different accounts prevents multiple account
            compromises if one password is exposed.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="common-password-vulnerabilities">
          Common Password Vulnerabilities
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>
            <strong>Dictionary Words:</strong> Passwords that are common words or phrases are easily cracked using
            dictionary attacks.
          </li>
          <li>
            <strong>Personal Information:</strong> Using birthdays, names, or other personal details makes passwords
            predictable.
          </li>
          <li>
            <strong>Character Substitution:</strong> Simple substitutions (like “p@ssw0rd”) are well-known patterns that
            password cracking tools can easily detect.
          </li>
          <li>
            <strong>Keyboard Patterns:</strong> Sequences like “qwerty” or “12345” are among the first combinations
            attackers try.
          </li>
          <li>
            <strong>Password Reuse:</strong> Using the same password across multiple sites means one breach can
            compromise multiple accounts.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold" id="creating-better-passwords">
          Creating Better Passwords
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Use random combinations of characters rather than meaningful words.</li>
          <li>Consider using a passphrase (a sequence of random words) for better memorability and security.</li>
          <li>Use a password manager to generate and store strong, unique passwords for each account.</li>
          <li>Enable two-factor authentication (2FA) wherever possible as an extra security layer.</li>
          <li>Change passwords periodically, especially for critical accounts.</li>
        </ul>
      </section>
      <FAQ>
        <FAQItem heading="How is strength measured?" headingId="how-is-strength-measured">
          <p>
            Strength is evaluated based on length, character variety, and resistance to common attack patterns. Longer
            passwords with diverse character types score higher.
          </p>
        </FAQItem>
        <FAQItem heading="Is my password sent to a server?" headingId="is-my-password-sent-to-a-server">
          <p>No, all analysis happens locally in your browser for maximum privacy.</p>
        </FAQItem>
        <FAQItem heading="What makes a password weak?" headingId="what-makes-a-password-weak">
          <p>
            Common weaknesses include short length, lack of variety, dictionary words, personal info, keyboard patterns,
            and password reuse.
          </p>
        </FAQItem>
        <FAQItem heading="What is a passphrase?" headingId="what-is-a-passphrase">
          <p>
            A passphrase is a sequence of random words that is easier to remember but still highly secure. It leverages
            length over complexity.
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
          . This tool evaluates passwords using industry best practices for password security and runs entirely in your
          browser for maximum privacy.
        </p>
      </Credits>
    </div>
  );
}
