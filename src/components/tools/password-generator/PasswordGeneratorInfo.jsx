import React from "react";

/**
 * Provides information about the Password Generator tool, including its purpose,
 * importance of strong passwords, security tips, and credits.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying password generator information
 */
const PasswordGeneratorInfo = () => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">
          About Password Generator Tool
        </h2>
        <p className="mb-4">
          The Password Generator Tool helps you create strong, secure passwords
          with customizable options. You can choose the password length, include
          or exclude uppercase letters, lowercase letters, numbers, and symbols.
          For better readability, you can also exclude similar characters that
          may be confused with each other.
        </p>
        <p className="mb-4">
          Generated passwords are created client-side in your browser, meaning
          they never leave your device or get sent over the internet. This
          ensures maximum security for your generated passwords.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">
          Why Strong Passwords Matter
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>
            Prevents unauthorized access to your accounts and sensitive
            information.
          </li>
          <li>
            Protects against brute force attacks where hackers systematically
            try all possible combinations.
          </li>
          <li>
            Makes password cracking computationally expensive and time-consuming
            for attackers.
          </li>
          <li>
            Reduces the risk of having your accounts compromised in data
            breaches.
          </li>
          <li>
            Creates a strong defense against common password guessing methods.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">
          Password Security Tips
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>Use a different password for each of your accounts.</li>
          <li>Aim for passwords that are at least 12 characters long.</li>
          <li>
            Include a mix of uppercase letters, lowercase letters, numbers, and
            symbols.
          </li>
          <li>
            Consider using a password manager to securely store your passwords.
          </li>
          <li>
            Enable two-factor authentication (2FA) whenever possible for an
            extra layer of security.
          </li>
          <li>
            Change passwords regularly, especially for your most sensitive
            accounts.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">
          Credits & Source
        </h3>
        <p>
          Maintained by{" "}
          <a
            href="https://x.com/vijayhardaha"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-400 underline"
          >
            Vijay Hardaha
          </a>
          . This tool is built with security best practices in mind and runs
          entirely in your browser.
        </p>
      </section>
    </div>
  );
};

export default PasswordGeneratorInfo;
