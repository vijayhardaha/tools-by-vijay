'use client';

import type { JSX, ReactNode } from 'react';
import { useRef, useEffect, useState } from 'react';

import Link from 'next/link';
import { Scrollbars } from 'react-custom-scrollbars-4';
import { PiCaretDownBold } from 'react-icons/pi';

import { getAllCategories } from '@/utils/categories';
import { cn } from '@/utils/classnames';
import { getToolsByCategories } from '@/utils/tools';

/**
 * Props for the NavLink component.
 *
 * @type {NavLinkProps}
 * @property {string} href - The URL the link points to
 * @property {ReactNode} children - Link content
 * @property {string} [className] - Additional CSS classes
 */
interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/**
 * NavLink component for consistent link styling in the sidebar using Shadcn classes.
 *
 * @param {NavLinkProps} props - Component props.
 *
 * @returns {JSX.Element} Styled navigation link.
 */
const NavLink = ({ href, children, className = '' }: NavLinkProps): JSX.Element => (
  <Link
    href={href}
    className={`text-muted-foreground hover:text-primary transition-colors hover:underline ${className}`}
  >
    {children}
  </Link>
);

/**
 * Props for the CategoryAccordion component.
 *
 * @type {CategoryAccordionProps}
 * @property {string} title - The category label text
 * @property {string} slug - The category slug for the link
 * @property {{ slug: string; name: string }[]} tools - Array of tools in this category
 */
interface CategoryAccordionProps {
  title: string;
  slug: string;
  tools: { slug: string; title: string }[];
}

/**
 * CategoryAccordion component that displays a category header with expand/collapse
 * for its tool links. The category name is a link, and the caret button toggles
 * the submenu.
 *
 * @param {CategoryAccordionProps} props - Component props.
 *
 * @returns {JSX.Element} Category accordion section.
 */
const CategoryAccordion = ({ title, slug, tools }: CategoryAccordionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <Link
          href={`/tools/${slug}`}
          className="text-foreground hover:text-primary flex-1 text-sm font-bold uppercase transition-colors hover:underline"
        >
          {title}
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-muted-foreground hover:text-foreground flex size-7 items-center justify-center rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-1"
          aria-expanded={isOpen}
          aria-label={`Toggle ${title} tools`}
        >
          <PiCaretDownBold
            className={cn('size-4 transition-transform duration-300 ease-in-out', isOpen && 'rotate-180')}
          />
        </button>
      </div>
      <div
        className={cn(
          'grid transition-all duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <ul className="mt-4 space-y-4 pl-2">
            {tools.map((tool) => (
              <li key={tool.slug}>
                <NavLink href={`/${tool.slug}`}>{tool.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

/**
 * SidebarBody component containing navigation links and tool categories.
 *
 * @returns {JSX.Element} The sidebar body content.
 */
export function SidebarBody(): JSX.Element {
  // Group tools by category
  const categorizedTools = getToolsByCategories();
  const scrollbarsRef = useRef<Scrollbars>(null);

  useEffect(() => {
    // Initialize scrollbar or perform additional setup if needed
    if (scrollbarsRef.current) {
      scrollbarsRef.current.scrollToTop();
    }
  }, []);

  return (
    <Scrollbars
      ref={scrollbarsRef}
      autoHide
      autoHideTimeout={500}
      autoHideDuration={100}
      universal={true}
      className="h-full w-full"
    >
      <div className="px-4">
        <nav className="text-muted-foreground text-sm">
          {getAllCategories().map((category) => {
            const categoryTools = categorizedTools[category.slug] || [];
            if (categoryTools.length === 0) return null;

            return (
              <CategoryAccordion
                key={category.slug}
                title={category.title}
                slug={category.slug}
                tools={categoryTools}
              />
            );
          })}

          {/* Handle any uncategorized tools */}
          {categorizedTools['uncategorized'] && categorizedTools['uncategorized'].length > 0 && (
            <div className="mb-4">
              <h3 className="text-foreground mb-2 text-sm font-bold uppercase">Other Tools</h3>
              <ul className="space-y-2">
                {categorizedTools['uncategorized'].map((tool) => (
                  <li key={tool.slug}>
                    <NavLink href={`/${tool.slug}`}>{tool.title}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="border-border border-t pt-4">
            <ul className="space-y-3">
              <li>
                <NavLink href="/about">About</NavLink>
              </li>
              <li>
                <NavLink href="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Scrollbars>
  );
}
