import type { JSX } from 'react';
/**
 * Bottom section of the footer containing copyright information
 *
 * @returns {JSX.Element} The rendered footer bottom section.
 */
export default function FooterBottom(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-10">
      <p className="text-foreground text-sm">
        © {currentYear} Tools by Vijay. All rights reserved by{' '}
        <a
          href="https://x.com/vijayhardaha"
          rel="noopener noreferrer"
          target="_blank"
          className="font-semibold hover:underline"
          aria-label="Vijay Hardaha on X (formerly Twitter)"
          title="Vijay Hardaha on X (formerly Twitter)"
        >
          Vijay Hardaha
        </a>
        .
      </p>
    </div>
  );
}
