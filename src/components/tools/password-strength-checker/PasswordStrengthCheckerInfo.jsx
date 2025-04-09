const PasswordStrengthCheckerInfo = () => {
  return (
    <div className="max-w-none space-y-8">
      <section>
        <h2 className="text-primary mb-4 text-xl font-bold">
          About Password Strength Checker Tool
        </h2>
        <p className="mb-4">
          The Password Strength Checker tool analyzes your password and provides
          feedback on its security level. It evaluates several criteria
          including length, character variety, and common patterns to determine
          how resistant your password would be against various hacking attempts.
        </p>
        <p className="mb-4">
          This tool runs entirely in your browser - your password is never
          transmitted over the internet or stored anywhere. For maximum
          security, avoid checking passwords for accounts you currently use on
          public or shared computers.
        </p>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">
          How Password Strength is Measured
        </h3>
        <p className="mb-4">
          The strength of a password is determined by several factors:
        </p>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>
            <strong>Length:</strong> Longer passwords are generally more secure.
            A minimum of 8 characters is recommended, but 12 or more is ideal.
          </li>
          <li>
            <strong>Complexity:</strong> Including a mix of uppercase letters,
            lowercase letters, numbers, and special characters significantly
            increases password strength.
          </li>
          <li>
            <strong>Unpredictability:</strong> Avoiding common words, patterns
            (like "123456"), and personal information makes passwords harder to
            guess.
          </li>
          <li>
            <strong>Uniqueness:</strong> Using different passwords for different
            accounts prevents multiple account compromises if one password is
            exposed.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">
          Common Password Vulnerabilities
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>
            <strong>Dictionary Words:</strong> Passwords that are common words
            or phrases are easily cracked using dictionary attacks.
          </li>
          <li>
            <strong>Personal Information:</strong> Using birthdays, names, or
            other personal details makes passwords predictable.
          </li>
          <li>
            <strong>Character Substitution:</strong> Simple substitutions (like
            "p@ssw0rd") are well-known patterns that password cracking tools can
            easily detect.
          </li>
          <li>
            <strong>Keyboard Patterns:</strong> Sequences like "qwerty" or
            "12345" are among the first combinations attackers try.
          </li>
          <li>
            <strong>Password Reuse:</strong> Using the same password across
            multiple sites means one breach can compromise multiple accounts.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">
          Creating Better Passwords
        </h3>
        <ul className="list-inside list-disc space-y-1 pl-4">
          <li>
            Use random combinations of characters rather than meaningful words.
          </li>
          <li>
            Consider using a passphrase (a sequence of random words) for better
            memorability and security.
          </li>
          <li>
            Use a password manager to generate and store strong, unique
            passwords for each account.
          </li>
          <li>
            Enable two-factor authentication (2FA) wherever possible as an extra
            security layer.
          </li>
          <li>
            Change passwords periodically, especially for critical accounts.
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-primary mb-4 text-lg font-bold">
          Credits & Source
        </h3>
        <p>
          Maintained by{" "}
          <strong>
            <a
              href="https://x.com/vijayhardaha"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-400 underline"
            >
              Vijay Hardaha
            </a>
          </strong>
          . This tool evaluates passwords using industry best practices for
          password security and runs entirely in your browser for maximum
          privacy.
        </p>
      </section>
    </div>
  );
};

export default PasswordStrengthCheckerInfo;
