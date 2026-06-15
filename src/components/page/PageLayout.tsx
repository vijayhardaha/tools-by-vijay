import type { JSX, ReactNode } from 'react';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import ScrollToTop from '@/components/ui/scroll-to-top';

/**
 * Props for the PageLayout component.
 *
 * @type {PageLayoutProps}
 * @property {ReactNode} children - The content to display within the layout
 */
type PageLayoutProps = { children: ReactNode };

/**
 * PageLayout component that provides a consistent layout structure
 * with a header, main content area, and footer.
 *
 *  @param {PageLayoutProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered layout component.
 */
export default function PageLayout({ children }: PageLayoutProps): JSX.Element {
  return (
    <div>
      {/* Skip to main content link for keyboard and screen reader users */}
      <a
        href="#main-content"
        className="focus:ring-ring/50 sr-only fixed top-0 left-0 z-100 block bg-black px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:ring-[3px] focus:outline-none"
      >
        Skip to main content
      </a>

      <Header />
      <main id="main-content" className="min-h-160 overflow-x-hidden pt-8 pb-12">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
