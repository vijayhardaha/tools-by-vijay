'use client';

import type { JSX } from 'react';
import { useEffect } from 'react';

import Link from 'next/link';
import { PiArrowRight, PiArrowCounterClockwise } from 'react-icons/pi';

import { PageContent } from '@/components/page/PageContent';
import { PageLayout } from '@/components/page/PageLayout';
import { Button } from '@/components/ui/button';

/**
 * Props for the error boundary page.
 *
 * @type {ErrorPageProps}
 * @property {Error & { digest?: string }} error - The thrown error; digest is added by Next.js in production.
 * @property {() => void} reset - Resets the error boundary and re-renders the segment.
 */
interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * App-level error boundary shown when a route segment throws during render
 * or data fetching. Keeps the site chrome so users can navigate away, hides
 * raw error details from visitors, and offers a client-side retry.
 *
 * @param {ErrorPageProps} props - The component props.
 *
 * @returns {JSX.Element} The branded error page within the site layout.
 */
export default function ErrorPage({ error, reset }: ErrorPageProps): JSX.Element {
  useEffect(() => {
    // Server logs are not available for client render errors; log here so the
    // browser console (and any client monitoring) captures it.
    console.error(error);
  }, [error]);

  return (
    <PageLayout>
      <PageContent>
        <section className="flex flex-col items-center justify-center gap-6 py-24 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">Something went wrong</h1>
          <p className="text-muted-foreground max-w-md text-balance">
            An unexpected error occurred while loading this page. Try again — if the problem persists, please head back
            and explore other tools.
          </p>
          {'digest' in error && error.digest ? (
            <p className="text-muted-foreground text-xs">Error reference: {error.digest}</p>
          ) : null}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" className="gap-2" onClick={reset}>
              <PiArrowCounterClockwise className="size-5" />
              Try Again
            </Button>
            <Link href="/tools">
              <Button variant="outline" size="lg" className="gap-2">
                Browse All Tools
                <PiArrowRight className="size-5" />
              </Button>
            </Link>
          </div>
        </section>
      </PageContent>
    </PageLayout>
  );
}
