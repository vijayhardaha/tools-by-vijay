import type { JSX } from 'react';

import type { Metadata } from 'next';

import { FaqContent } from '@/app/faq/_components/faq-content';
import { buildMetadata } from '@/utils/meta';

/**
 * SEO metadata for the FAQ page.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = buildMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Find answers to common questions about Tools by Vijay — free online utilities for developers and content creators. Learn about privacy, offline usage, accuracy, and more.',
  path: '/faq',
});

/**
 * FAQ page component.
 * Server component that renders the client-side FAQ accordion content.
 *
 * @returns {JSX.Element} The rendered FAQ page.
 */
export default function Faq(): JSX.Element {
  return <FaqContent />;
}
