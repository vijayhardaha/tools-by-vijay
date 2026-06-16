'use client';

import type { JSX, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

import { ToolGridSection } from '@/components/tool/tool-grids';
import toolsList from '@/constants/tools';
import type { Tool } from '@/constants/tools';
import { getToolsByCategory } from '@/utils/tools';

/**
 * Props for the EntryContent component.
 *
 * @type {EntryContentProps}
 * @property {{ category: string; slug: string }} tool - The current tool with category and slug
 * @property {ReactNode} children - The main page content
 */
interface EntryContentProps {
  tool: { category: string; slug: string };
  children: ReactNode;
}

/**
 * A layout component that displays a page entry with related and other tools sections.
 *
 * @param {EntryContentProps} props - The component props.
 *
 * @returns {JSX.Element} The rendered component.
 */
export function EntryContent({ tool, children }: EntryContentProps): JSX.Element {
  const relatedTools: Tool[] = getToolsByCategory(tool.category).filter((t) => t.slug !== tool.slug);

  const [otherTools, setOtherTools] = useState<Tool[]>([]);
  const initialRender = useRef(true);

  useEffect(() => {
    if (!initialRender.current) return;
    initialRender.current = false;

    const otherCategoryTools = toolsList.filter((t) => t.category !== tool.category && t.slug !== tool.slug);

    // Shuffle and pick 6
    const shuffled = [...otherCategoryTools].sort(() => Math.random() - 0.5);
    setOtherTools(shuffled.slice(0, 6));
  }, [tool.category, tool.slug]);

  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <article className="space-y-8 md:space-y-12">{children}</article>

      {relatedTools.length > 0 && <ToolGridSection heading="Related Tools" tools={relatedTools} />}

      {otherTools.length > 0 && <ToolGridSection heading="Other Tools" tools={otherTools} />}
    </div>
  );
}
