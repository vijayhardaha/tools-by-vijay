'use client';

import type { JSX } from 'react';
import { useState, useRef, useEffect } from 'react';

import Link from 'next/link';
import { PiCaretDownBold } from 'react-icons/pi';

import { getAllCategories } from '@/utils/categories';
import { cn } from '@/utils/classnames';
import { getToolsByCategory } from '@/utils/tools';

/**
 * DesktopNav component — a horizontal navigation bar for desktop screens.
 * Each top-level item is a category label. On hover, a dropdown submenu
 * appears with a triangle pointer and rounded box containing tool links.
 *
 * @returns {JSX.Element} The desktop navigation component
 */
export function DesktopNav(): JSX.Element {
  const categories = getAllCategories();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const handleMouseEnter = (slug: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(slug);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  // Close menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveMenu(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Main navigation">
      {categories.map((category) => {
        const tools = getToolsByCategory(category.slug);
        if (tools.length === 0) return null;

        return (
          <div
            key={category.slug}
            className="relative"
            onMouseEnter={() => handleMouseEnter(category.slug)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Top-level category link */}
            <Link
              href={`/tools/${category.slug}`}
              className={cn(
                // Text & colors
                'text-muted-foreground hover:text-foreground',

                // Layout
                'inline-flex items-center gap-1 rounded-xl px-2 py-2 text-sm font-medium whitespace-nowrap',

                // Focus
                'focus-visible:ring-ring/50 outline-none focus-visible:ring-[3px]',

                // Transitions
                'no-underline transition-colors',

                // States
                activeMenu === category.slug && 'text-foreground bg-muted'
              )}
              aria-expanded={activeMenu === category.slug}
              aria-haspopup="true"
            >
              {category.label}
              <PiCaretDownBold
                className={cn(
                  'size-3.5 transition-transform duration-200',
                  activeMenu === category.slug && 'rotate-180'
                )}
              />
            </Link>

            {/* Dropdown submenu */}
            {activeMenu === category.slug && (
              <div
                className="absolute top-full left-0 z-50 pt-2"
                onMouseEnter={() => handleMouseEnter(category.slug)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Rounded box */}
                <div className="border-border min-w-56 rounded-xl border bg-white py-2 shadow-xl">
                  {tools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/${tool.slug}`}
                      className="text-muted-foreground hover:text-foreground hover:bg-muted flex items-center px-4 py-2 text-sm transition-colors"
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
