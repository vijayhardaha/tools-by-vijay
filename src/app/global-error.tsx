'use client';

import type { JSX, CSSProperties } from 'react';
import { useEffect } from 'react';

/**
 * Props for the global error boundary.
 *
 * @type {GlobalErrorProps}
 * @property {Error & { digest?: string }} error - The thrown error; digest is added by Next.js in production.
 * @property {() => void} reset - Resets the error boundary and re-renders the app.
 */
interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Global error boundary rendered when the root layout itself throws. It
 * replaces the entire document, so it renders its own `<html>`/`<body>`
 * shell and uses inline styles only — when this boundary triggers, nothing
 * else (stylesheets, fonts, header, footer) can be trusted to load.
 *
 * @param {GlobalErrorProps} props - The component props.
 *
 * @returns {JSX.Element} The minimal full-document error page.
 */
export default function GlobalError({ error, reset }: GlobalErrorProps): JSX.Element {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const shellStyle: CSSProperties = {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    color: '#171717',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    gap: '16px',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '32px',
    textAlign: 'center',
  };
  const mutedStyle: CSSProperties = { color: '#737373' };

  return (
    <html lang="en">
      <body style={shellStyle}>
        <h1 style={{ fontSize: '30px', fontWeight: 700, margin: 0 }}>Something went wrong</h1>
        <p style={{ ...mutedStyle, margin: 0, maxWidth: '448px' }}>
          An unexpected error occurred. Try again to reload the application.
        </p>
        {'digest' in error && error.digest ? (
          <p style={{ ...mutedStyle, fontSize: '12px', margin: 0 }}>Error reference: {error.digest}</p>
        ) : null}
        <button
          type="button"
          onClick={reset}
          style={{
            backgroundColor: '#171717',
            border: 'none',
            borderRadius: '12px',
            color: '#ffffff',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 600,
            padding: '12px 24px',
          }}
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
