'use client';

import type { JSX, ReactNode } from 'react';
import { useRef, useEffect, useState } from 'react';

import ToolsListWidget from '@/components/page/ToolsListWidget';
import { getAllCategorySlugs } from '@/utils/categoryUtils';

/**
 * Props for the EntryWithSidebar component.
 *
 * @type {EntryWithSidebarProps}
 * @property {{ category: string; slug: string }} tool - The current tool with category and slug
 * @property {ReactNode} children - The main page content
 */
interface EntryWithSidebarProps {
  tool: { category: string; slug: string };
  children: ReactNode;
}

/**
 * A layout component that displays a page entry with a sidebar.
 *
 * @param {EntryWithSidebarProps} props - The component props.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function EntryWithSidebar({ tool, children }: EntryWithSidebarProps): JSX.Element {
  const categories = getAllCategorySlugs().filter((category) => category !== tool.category);

  const [category1, setCategory1] = useState('');
  const [category2, setCategory2] = useState('');
  const initialRender = useRef(true);

  useEffect(() => {
    if (!initialRender.current) return;
    initialRender.current = false;

    const getRandomCategories = (cats: string[], count: number): string[] => {
      const selected: string[] = [];
      while (selected.length < count) {
        const randomIndex = Math.floor(Math.random() * cats.length);
        const category = cats[randomIndex];
        if (!selected.includes(category)) {
          selected.push(category);
        }
      }
      return selected;
    };

    const [c1, c2] = getRandomCategories(categories, 2);
    setCategory1(c1);
    setCategory2(c2);
  }, [categories]);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-6">
      <article className="col-span-4 mb-8 lg:mb-0">{children}</article>

      <aside className="col-span-2 flex flex-col gap-6">
        <ToolsListWidget category={tool.category} hideTool={tool.slug}></ToolsListWidget>
        <ToolsListWidget category={category1} hideTool={tool.slug}></ToolsListWidget>
        <ToolsListWidget category={category2} hideTool={tool.slug}></ToolsListWidget>
      </aside>
    </div>
  );
}
