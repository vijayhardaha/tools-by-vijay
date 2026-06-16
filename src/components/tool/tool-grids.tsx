import type { JSX } from 'react';

import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';
import type { Tool } from '@/constants/tools';
import { cn } from '@/utils/classnames';
import { getToolIcon } from '@/utils/tools';

/**
 * Props for the ToolGridSection component.
 *
 * @type {ToolGridSectionProps}
 * @property {string} heading - The section heading text
 * @property {Tool[]} tools - Array of tools to display in the grid
 */
interface ToolGridSectionProps {
  heading: string;
  tools: Tool[];
}

/**
 * A grid section displaying tools as clickable cards with icon, name, and description.
 *
 * @param {ToolGridSectionProps} props - The component props
 *
 * @returns {JSX.Element} The rendered section with a heading and tool card grid
 */
export function ToolGridSection({ heading, tools }: ToolGridSectionProps): JSX.Element {
  if (tools.length === 0) {
    return <></>;
  }

  return (
    <section>
      <hr className="border-secondary mb-8 border-t border-dashed md:mb-12" />
      <h2 className="mb-4 text-2xl font-bold md:text-3xl">{heading}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const icon = getToolIcon(tool.slug);

          return (
            <Link key={tool.slug} href={`/tools/${tool.slug}`} className="block">
              <Card className={cn('bg-white', 'cursor-pointer transition-shadow hover:shadow-md')}>
                <CardContent className="flex flex-col gap-2">
                  {icon && (
                    <span className="border-accent-foreground/50 bg-accent text-accent-foreground flex size-10 items-center justify-center rounded-xl border">
                      {icon}
                    </span>
                  )}
                  <div className="flex min-w-0 flex-col gap-1">
                    <span className="text-base font-semibold">{tool.name}</span>
                    <span className="text-muted-foreground truncate text-xs">{tool.description}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
