'use client';

import type { JSX, ReactNode, HTMLAttributes, ButtonHTMLAttributes } from 'react';
import { useCallback, useContext, createContext, useState } from 'react';

import { cn } from '@/utils/classnames';

/**
 * Type for the Tabs context value.
 *
 * @type {TabsContextType}
 * @property {string} selectedTab - The currently selected tab value
 * @property {(value: string) => void} setSelectedTab - Callback to update the selected tab
 */
interface TabsContextType {
  selectedTab: string;
  setSelectedTab: (value: string) => void;
}

const TabsContext = createContext<TabsContextType>({ selectedTab: '', setSelectedTab: () => {} });

/**
 * Props for the Tabs component.
 *
 * @type {TabsProps}
 * @property {string} [className] - Additional CSS classes
 * @property {string} [defaultValue] - Default selected tab value
 * @property {string} [value] - Controlled selected tab value
 * @property {(value: string) => void} [onValueChange] - Callback when tab changes
 * @property {ReactNode} children - Tab content elements
 */
interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
}

/**
 * Tabs component that manages the state of tab navigation
 *
 * @param {object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.defaultValue] - Default selected tab
 * @param {string} [props.value] - Controlled selected tab value
 * @param {(value: string) => void} [props.onValueChange] - Callback when tab changes
 * @param {ReactNode} props.children - Tab elements
 *
 * @returns {JSX.Element} Tabs component
 */
export default function Tabs({
  className,
  defaultValue,
  value,
  onValueChange,
  children,
  ...props
}: TabsProps): JSX.Element {
  const [localTab, setLocalTab] = useState(value || defaultValue || '');

  // Derive the effective tab during render (fixes set-state-in-effect)
  const selectedTab = value !== undefined ? value : localTab;

  const handleTabChange = useCallback(
    (newValue: string) => {
      if (value === undefined) {
        setLocalTab(newValue);
      }
      onValueChange?.(newValue);
    },
    [value, onValueChange]
  );

  return (
    <div data-slot="tabs" className={cn('flex flex-col gap-2', className)} role="tablist" {...props}>
      <TabsContext.Provider value={{ selectedTab, setSelectedTab: handleTabChange }}>{children}</TabsContext.Provider>
    </div>
  );
}

/**
 * Props for the TabsList component.
 *
 * @type {TabsListProps}
 * @property {string} [className] - Additional CSS classes
 * @property {ReactNode} children - Tab trigger elements
 */
interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

/**
 * Container for tab triggers
 *
 * @param {object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {ReactNode} props.children - Tab trigger elements
 *
 * @returns {JSX.Element} TabsList component
 */
function TabsList({ className, children, ...props }: TabsListProps): JSX.Element {
  return (
    <div
      data-slot="tabs-list"
      role="tablist"
      className={cn(
        // Colors
        'bg-muted text-muted-foreground',

        // Layout
        'inline-flex h-9 w-fit items-center justify-center',

        // Spacing
        'rounded-xl p-0.75',

        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Props for the TabsTrigger component.
 *
 * @type {TabsTriggerProps}
 * @property {string} [className] - Additional CSS classes
 * @property {string} value - The value associated with this tab trigger
 * @property {boolean} [disabled] - Whether the tab trigger is disabled
 * @property {ReactNode} children - Tab trigger content
 */
interface TabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  value: string;
  disabled?: boolean;
  children: ReactNode;
}

/**
 * Button that selects a tab when clicked
 *
 * @param {object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} props.value - Value of the tab
 * @param {boolean} [props.disabled] - Whether the tab is disabled
 * @param {ReactNode} props.children - Tab content
 *
 * @returns {JSX.Element} TabsTrigger component
 */
function TabsTrigger({ className, value, disabled, children, ...props }: TabsTriggerProps): JSX.Element {
  const { selectedTab, setSelectedTab } = useContext(TabsContext);
  const isActive = selectedTab === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? 'active' : 'inactive'}
      disabled={disabled}
      data-slot="tabs-trigger"
      onClick={() => setSelectedTab(value)}
      className={cn(
        // State styles
        'data-[state=active]:bg-background',
        'data-[state=active]:shadow-sm',

        // Focus styles
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring',
        'focus-visible:ring-[3px] focus-visible:outline-1',

        // Layout
        'inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center',

        // Typography
        'text-foreground',

        // Spacing
        'gap-1.5 rounded-md border border-transparent',

        // Typography
        'px-2 py-1 text-sm font-medium whitespace-nowrap',

        // Transitions
        'transition-[color,box-shadow]',

        // States
        'disabled:pointer-events-none disabled:opacity-50',

        // SVG
        '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * Props for the TabsContent component.
 *
 * @type {TabsContentProps}
 * @property {string} [className] - Additional CSS classes for the content panel
 * @property {string} value - The tab value that controls this content
 * @property {ReactNode} children - Content to display when this tab is active
 */
interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  value: string;
  children: ReactNode;
}

/**
 * Content shown when a tab is selected
 *
 * This component renders its children only when the tab is active,
 * serving as a container for the tab's content panel. It uses the
 * TabsContext to determine if it should be visible based on the
 * current selected tab value.
 *
 * @param {object} props - Component props
 * @param {string} [props.className] - Additional CSS classes to apply to the content panel
 * @param {string} props.value - Value of the tab that controls this content
 * @param {ReactNode} props.children - Content to display when this tab is active
 * @param {object} [props.rest] - Additional props to pass to the div element
 *
 * @returns {JSX.Element | null} The tab content when active, or null when inactive
 */
function TabsContent({ className, value, children, ...props }: TabsContentProps): JSX.Element | null {
  const { selectedTab } = useContext(TabsContext);
  const isSelected = selectedTab === value;

  if (!isSelected) return null;

  return (
    <div
      role="tabpanel"
      data-state={isSelected ? 'active' : 'inactive'}
      data-slot="tabs-content"
      aria-label={`Tab content for ${value}`}
      className={cn('flex-1 outline-none', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
