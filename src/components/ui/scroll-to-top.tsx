'use client';

import type { JSX } from 'react';
import { useEffect, useState } from 'react';

import { PiArrowUpBold } from 'react-icons/pi';

import { Button } from '@/components/ui/button';
import { cn } from '@/utils/classnames';

/**
 * ScrollToTop component — a fixed-position button that appears when the user
 * scrolls past 250px. Smoothly scrolls back to the top on click.
 *
 * @returns {JSX.Element} The scroll-to-top button
 */
export default function ScrollToTop(): JSX.Element {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 250);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      type="button"
      variant="primary"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        'fixed right-6 bottom-6 z-50 h-12 w-12 rounded-full p-0 shadow-lg transition-all duration-300',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      )}
    >
      <PiArrowUpBold className="size-5" />
    </Button>
  );
}
