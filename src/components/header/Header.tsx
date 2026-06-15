'use client';

import type { JSX } from 'react';
import { useEffect, useRef, useState } from 'react';

import { PiMagnifyingGlassBold } from 'react-icons/pi';

import { DesktopNav } from '@/components/header/DesktopNav';
import { Logo } from '@/components/header/parts/Logo';
import { MenuButton } from '@/components/header/parts/MenuButton';
import { Sidebar } from '@/components/header/sidebar/Sidebar';
import { Container } from '@/components/ui/container';
import { SearchModal } from '@/components/ui/search-modal';
import tools from '@/constants/tools';
import { cn } from '@/utils/classnames';

/**
 * Header component that displays the app logo, desktop navigation,
 * search, and mobile sidebar toggle.
 *
 * @returns {JSX.Element} Header component with navigation
 */
export function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setScrolled(currentScrollY > 100);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <header
        className={cn(
          // Position & stacking
          'sticky top-0 z-50',

          // Appearance
          'bg-white transition-transform duration-300',

          // States
          scrolled && 'shadow-xs',
          visible ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <Container className="relative z-20">
          <div className="flex items-center justify-between gap-4 py-4">
            <Logo />
            <DesktopNav />
            <div className="flex items-center gap-2">
              <SearchButton onClick={() => setSearchOpen(true)} />
              <div className="lg:hidden">
                <MenuButton onClick={toggleDrawer} />
              </div>
            </div>
          </div>
        </Container>
      </header>
      <div className="lg:hidden">
        <Sidebar isOpen={isOpen} onClose={closeDrawer} />
      </div>
      <SearchModal data={tools} maxResults={5} open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}

/**
 * SearchButton component — a button that opens the search modal.
 * Shows a magnifying glass icon and the CMD+K keyboard shortcut hint.
 *
 * @param {{ onClick: () => void }} props - Component props
 *
 * @returns {JSX.Element} The search button
 */
function SearchButton({ onClick }: { onClick: () => void }): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        // Focus
        'focus-visible:ring-ring/50',

        // Layout
        'inline-flex h-9 cursor-pointer items-center gap-1 rounded-xl border px-2 text-sm',

        // Appearance
        'border-gray-950/8 bg-gray-950/2 text-neutral-500',

        // Transitions
        'transition-colors outline-none',

        // Hover
        'hover:text-neutral-700 focus-visible:ring-[3px]',

        // Dark mode
        'dark:border-white/10 dark:bg-white/5 dark:text-neutral-400 dark:hover:text-neutral-300'
      )}
      aria-label="Search tools (Cmd+K)"
    >
      <PiMagnifyingGlassBold className="-ml-0.5 size-4 fill-gray-600 dark:fill-gray-500" />
      <kbd className="hidden font-sans text-xs/4 text-gray-500 in-[.os-macos_&]:block dark:text-gray-400">⌘K</kbd>
      <kbd className="hidden font-sans text-xs/4 text-gray-500 not-[.os-macos_&]:block dark:text-gray-400">Ctrl K</kbd>
    </button>
  );
}
