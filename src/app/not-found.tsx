import type { JSX } from 'react';

import Link from 'next/link';
import { PiArrowRight, PiHouse } from 'react-icons/pi';

import { PageContent } from '@/components/page/PageContent';
import { PageLayout } from '@/components/page/PageLayout';
import { Button } from '@/components/ui/button';

/**
 * App-level 404 page rendered whenever `notFound()` is triggered or a route
 * does not match.
 *
 * @returns {JSX.Element} The branded not-found page within the site layout.
 */
export default function NotFound(): JSX.Element {
  return (
    <PageLayout>
      <PageContent>
        <section className="flex flex-col items-center justify-center gap-6 py-24 text-center">
          <p className="from-primary to-accent bg-gradient-to-r bg-clip-text text-8xl font-bold text-transparent">
            404
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">Page Not Found</h1>
          <p className="text-muted-foreground max-w-md text-balance">
            The page you are looking for does not exist or may have moved. Head back home or browse the tools instead.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/">
              <Button variant="primary" size="lg" className="gap-2">
                <PiHouse className="size-5" />
                Back to Home
              </Button>
            </Link>
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
