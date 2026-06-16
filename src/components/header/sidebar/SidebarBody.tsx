import type { JSX, ReactNode } from 'react';
import { useRef, useEffect } from 'react';

import Link from 'next/link';
import { Scrollbars } from 'react-custom-scrollbars-4';

import { getAllCategories } from '@/utils/categories';
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
 * Props for the CategorySection component.
 *
 * @type {CategorySectionProps}
 * @property {string} title - The section heading text
 * @property {{ slug: string; name: string }[]} tools - Array of tools in this category
 */
interface CategorySectionProps {
  title: string;
  tools: { slug: string; name: string }[];
}

/**
 * CategorySection component to display a group of tool links.
 *
 * @param {CategorySectionProps} props - Component props.
 *
 * @returns {JSX.Element} Category section with tool links.
 */
const CategorySection = ({ title, tools }: CategorySectionProps): JSX.Element => (
  <div className="mb-6">
    <h3 className="text-foreground mb-3 text-sm font-bold uppercase">{title}</h3>
    <ul className="space-y-3">
      {tools.map((tool) => (
        <li key={tool.slug}>
          <NavLink href={`/${tool.slug}`}>{tool.name}</NavLink>
        </li>
      ))}
    </ul>
  </div>
);

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

            return <CategorySection key={category.slug} title={category.label} tools={categoryTools} />;
          })}

          {/* Handle any uncategorized tools */}
          {categorizedTools['uncategorized'] && categorizedTools['uncategorized'].length > 0 && (
            <CategorySection title="Other Tools" tools={categorizedTools['uncategorized']} />
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
