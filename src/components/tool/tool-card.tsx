import type { JSX } from 'react';

import Link from 'next/link';

import { PiCaretRightBold } from '@/constants/tool-icons';
import type { Tool } from '@/constants/tools';
import { cn } from '@/utils/classnames';
import { findToolBySlug, getToolIcon } from '@/utils/tools';

/**
 * Props for the ToolCard component.
 *
 * @type {ToolCardProps}
 * @property {string} slug - The tool slug to look up and display
 * @property {string} [className] - Additional CSS classes
 */
interface ToolCardProps {
  slug: string;
  className?: string;
}

/**
 * ToolCard component that renders a card for a specific tool.
 * Layout: icon | heading + description (truncated) | caret right icon
 *
 * @param {ToolCardProps} props - The component props.
 *
 * @returns {JSX.Element | null} The rendered ToolCard component.
 */
export function ToolCard({ slug, className = '' }: ToolCardProps): JSX.Element | null {
  const tool: Tool | null = findToolBySlug(slug);

  if (!tool) return null;

  return (
    <Link href={`/tools/${tool.slug}`}>
      <div
        className={cn(
          'group border-border bg-card text-card-foreground relative top-0 flex items-center gap-4 rounded-xl border px-4 py-4 transition-all duration-200 ease-in-out md:px-6 md:py-5',
          'hover:-top-0.5 hover:shadow-md',
          className
        )}
      >
        {/* Column 1: Tool Icon */}
        <div className="bg-accent-foreground text-primary inline-flex size-11 shrink-0 items-center justify-center rounded-2xl text-xl">
          {getToolIcon(tool.slug)}
        </div>

        {/* Column 2: Heading + Description (truncated) */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-bold">{tool.name}</h3>
          <p className="text-muted-foreground truncate text-sm">{tool.description}</p>
        </div>

        {/* Column 3: Caret Right Icon */}
        <div className="text-muted-foreground shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          <PiCaretRightBold className="size-5" />
        </div>
      </div>
    </Link>
  );
}
