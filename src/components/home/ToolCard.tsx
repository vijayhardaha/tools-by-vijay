import type { JSX } from 'react';

import Link from 'next/link';

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Tool } from '@/types';
import { cn } from '@/utils/classnames';
import { findToolBySlug, getIconForTool } from '@/utils/tools';

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
 *
 * @param {ToolCardProps} props - The component props.
 *
 * @returns {JSX.Element | null} The rendered ToolCard component.
 */
export default function ToolCard({ slug, className = '' }: ToolCardProps): JSX.Element | null {
  const tool: Tool | null = findToolBySlug(slug);

  if (!tool) return null;

  return (
    <Link href={`/tools/${tool.slug}`}>
      <Card
        className={cn(
          'relative top-0 flex h-full flex-col gap-4 transition-all duration-200 ease-in-out hover:-top-0.5 hover:shadow-md',
          className
        )}
      >
        <CardHeader>
          <div className="flex w-full flex-col gap-4 lg:relative lg:top-5 lg:-mt-4 lg:flex-row-reverse lg:items-start lg:justify-between">
            <div className="bg-accent-foreground text-primary inline-flex size-10 items-center justify-center rounded-2xl text-xl">
              {getIconForTool(tool.slug)}
            </div>
            <CardTitle component="h3">{tool.name}</CardTitle>
          </div>

          <CardDescription className="lg:pr-14">{tool.description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
