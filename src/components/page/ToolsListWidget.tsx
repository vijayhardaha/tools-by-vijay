import type { JSX } from 'react';

import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Tool } from '@/constants/tools';
import type { Category } from '@/constants/tools-categories';
import { getCategoryBySlug } from '@/utils/categories';
import { cn } from '@/utils/classnames';
import { getToolsByCategory } from '@/utils/tools';

/**
 * Props for the ToolsListWidget component.
 *
 * @type {ToolsListWidgetProps}
 * @property {string} category - The category slug to filter tools
 * @property {string} [hideTool] - The tool slug to exclude from the list
 */
interface ToolsListWidgetProps {
  category: string;
  hideTool?: string;
}

/**
 * A reusable widget component for displaying a list of tools in a sidebar card.
 *
 * @param {ToolsListWidgetProps} props - The props for the component.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function ToolsListWidget({ category, hideTool = '' }: ToolsListWidgetProps): JSX.Element {
  const toolsInCategory: Tool[] = getToolsByCategory(category).filter((categoryTool) => categoryTool.slug !== hideTool);

  const categoryData: Category | null = getCategoryBySlug(category);

  if (!categoryData || toolsInCategory.length === 0) {
    return <></>;
  }

  return (
    <Card className="md:gap-4 md:py-4">
      <CardHeader className="border-secondary border-b border-dashed md:px-4 md:[.border-b]:pb-4">
        <CardTitle component="h4" className="text-lg">
          {categoryData?.label}
        </CardTitle>
      </CardHeader>
      <CardContent className="md:px-4">
        <ul className="flex flex-col gap-3">
          {toolsInCategory.map((categoryTool) => (
            <li key={categoryTool.slug}>
              <Link
                href={`/tools/${categoryTool.slug}`}
                className={cn(
                  'group',
                  // layout
                  'flex flex-col gap-0.5',
                  // size
                  'rounded-xl px-4 py-2',
                  // colors
                  'text-foreground bg-muted',
                  // border
                  'border border-transparent',
                  // states
                  'hover:bg-accent hover:border-accent-foreground',
                  // transition
                  'transition-colors duration-200 ease-in-out'
                )}
              >
                <span className="text-sm font-semibold transition-colors">{categoryTool.name}</span>
                <span className="text-muted-foreground truncate text-xs">{categoryTool.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
