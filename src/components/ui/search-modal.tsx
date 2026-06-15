'use client';

import type { JSX } from 'react';
import { useEffect, useState, useRef, useMemo, useCallback } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import Fuse from 'fuse.js';
import { useRouter } from 'next/navigation';
import { FiSearch, FiCommand } from 'react-icons/fi';
import { PiMagnifyingGlassBold } from 'react-icons/pi';

import type { Tool } from '@/constants/tools';
import { cn } from '@/utils/classnames';
import { getToolIcon } from '@/utils/tools';

/**
 * Props for the SearchModal component.
 *
 * @type {SearchModalProps}
 * @property {Tool[]} data - Array of tools to search through
 * @property {number} [maxResults] - Maximum number of search results to display
 * @property {boolean} open - Whether the dialog is open
 * @property {(open: boolean) => void} onOpenChange - Callback when the dialog open state changes
 */
interface SearchModalProps {
  data: Tool[];
  maxResults?: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * Component that highlights portions of text matching the search query.
 *
 * @param {{ text: string; query: string }} props - Component props
 *
 * @returns {JSX.Element | string} The text with matched portions wrapped in highlight marks
 */
function HighlightMatch({ text, query }: { text: string; query: string }): JSX.Element | string {
  if (!query || !text) return text;

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');

  const parts = text.split(regex);

  if (parts.length === 1) return text;

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="text-foreground rounded-sm bg-amber-200/70 px-0.5">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}

/**
 * SearchModal component — a CMD+K dialog that provides fuzzy search
 * over the tools collection with keyboard navigation.
 *
 * @param {SearchModalProps} props - Component props
 *
 * @returns {JSX.Element} The search modal component
 */
export function SearchModal({ data, maxResults = 5, open, onOpenChange }: SearchModalProps): JSX.Element {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const listRef = useRef<HTMLUListElement>(null);

  // Fuse.js instance for fuzzy search
  const fuse = useMemo(
    () =>
      new Fuse(data, {
        keys: [
          { name: 'name', weight: 2 },
          { name: 'description', weight: 1 },
        ],
        threshold: 0.35,
        distance: 100,
        minMatchCharLength: 1,
      }),
    [data]
  );

  // Derive search results — useMemo avoids setState-in-effect lint errors
  const results = useMemo(() => {
    if (!query.trim()) return [];

    return fuse
      .search(query)
      .map((res) => res.item)
      .slice(0, maxResults);
  }, [query, fuse, maxResults]);

  // Listen for CMD+K to open the modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenChange(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenChange]);

  // Focus the input when the dialog opens
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (open) {
      timer = setTimeout(() => inputRef.current?.focus(), 50);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [open]);

  const navigateToTool = useCallback(
    (slug: string) => {
      onOpenChange(false);
      setQuery('');
      setActiveIndex(0);
      router.push(`/tools/${slug}`);
    },
    [router, onOpenChange]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => {
        const next = prev + 1;
        return next >= results.length ? 0 : next;
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => {
        const next = prev - 1;
        return next < 0 ? results.length - 1 : next;
      });
    } else if (e.key === 'Enter' && results[activeIndex]) {
      e.preventDefault();
      navigateToTool(results[activeIndex].slug);
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current || results.length === 0) return;

    const activeItem = listRef.current.children[activeIndex] as HTMLLIElement | undefined;
    activeItem?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex, results.length]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />

        {/* Dialog Content */}
        <Dialog.Content
          className={cn(
            'fixed top-[15vh] left-1/2 z-50 w-full max-w-xl -translate-x-1/2',
            'rounded-xl border border-neutral-200 bg-white shadow-2xl',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            'data-[state=closed]:slide-out-to-top-[8%]',
            'data-[state=open]:slide-in-from-top-[8%]',
            'duration-200'
          )}
        >
          {/* Screen-reader description */}
          <Dialog.Description className="sr-only">
            Use the search field below to find a tool. Start typing to see results, then use arrow keys to navigate and
            press Enter to open a tool.
          </Dialog.Description>

          {/* Search input area */}
          <div className="flex items-center gap-3 border-b border-neutral-200 px-4 py-3">
            <PiMagnifyingGlassBold className="size-5 shrink-0 text-neutral-400" />
            <Dialog.Title asChild>
              <input
                ref={inputRef}
                type="text"
                value={query}
                placeholder="Search tools..."
                className="text-foreground flex-1 bg-transparent text-base outline-none placeholder:text-neutral-400"
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                onKeyDown={handleKeyDown}
              />
            </Dialog.Title>

            {/* CMD+K badge */}
            <kbd className="hidden shrink-0 items-center gap-1 rounded-md border border-neutral-200 bg-neutral-50 px-2 py-1 text-[11px] font-medium text-neutral-400 sm:inline-flex">
              <FiCommand className="size-3" />
              <span>K</span>
            </kbd>
          </div>

          {/* Results or empty state */}
          {query.trim() ? (
            results.length > 0 ? (
              <ul ref={listRef} className="max-h-80 overflow-y-auto p-2" role="listbox" aria-label="Search results">
                {results.map((tool, idx) => {
                  const icon = getToolIcon(tool.slug);

                  return (
                    <li
                      key={tool.slug}
                      role="option"
                      aria-selected={idx === activeIndex}
                      className={cn(
                        'flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors',
                        idx === activeIndex ? 'bg-neutral-100' : 'hover:bg-neutral-50'
                      )}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={() => navigateToTool(tool.slug)}
                    >
                      {/* Tool icon */}
                      <span
                        className={cn(
                          'flex size-9 shrink-0 items-center justify-center rounded-xl border text-base',
                          idx === activeIndex
                            ? 'text-foreground border-neutral-300 bg-white'
                            : 'border-neutral-200 bg-neutral-50 text-neutral-500'
                        )}
                      >
                        {icon}
                      </span>

                      {/* Tool info */}
                      <div className="min-w-0 flex-1">
                        <div className="text-foreground truncate font-medium">
                          <HighlightMatch text={tool.name} query={query} />
                        </div>
                        <div className="truncate text-xs text-neutral-500">
                          <HighlightMatch text={tool.description} query={query} />
                        </div>
                      </div>

                      {/* Keyboard hint */}
                      {idx === activeIndex && (
                        <kbd className="hidden shrink-0 items-center gap-0.5 rounded border border-neutral-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-neutral-400 sm:inline-flex">
                          ↵
                        </kbd>
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="flex flex-col items-center px-4 py-10 text-center">
                <FiSearch className="mb-2 size-6 text-neutral-300" />
                <p className="text-sm font-medium text-neutral-500">No tools found</p>
                <p className="mt-0.5 text-xs text-neutral-400">
                  Try a different search term like &ldquo;minify&rdquo; or &ldquo;slug&rdquo;
                </p>
              </div>
            )
          ) : (
            <div className="px-4 py-8 text-center">
              <p className="text-sm text-neutral-400">Start typing to search through tools</p>
            </div>
          )}

          {/* Footer with navigation hints */}
          <div className="hidden items-center gap-4 border-t border-neutral-200 px-4 py-2 text-xs text-neutral-400 sm:flex">
            <div className="flex items-center gap-1.5">
              <kbd className="rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 font-medium">↑</kbd>
              <kbd className="rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 font-medium">↓</kbd>
              <span>Navigate</span>
            </div>
            <div className="flex items-center gap-1.5">
              <kbd className="rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 font-medium">↵</kbd>
              <span>Open</span>
            </div>
            <div className="flex items-center gap-1.5">
              <kbd className="rounded border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 font-medium">Esc</kbd>
              <span>Close</span>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
