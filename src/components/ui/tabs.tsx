"use client";

import { useCallback, useContext, createContext, useState, useEffect, ReactNode } from "react";

import { cn } from "@/utils/classNameUtils";

interface ITabsContextType {
  selectedTab: string;
  setSelectedTab: (value: string) => void;
}

const TabsContext = createContext<ITabsContextType>({
  selectedTab: "",
  setSelectedTab: () => {},
});

/**
 * Props for the Tabs component
 */
interface ITabsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
}

/**
 * Tabs component that manages the state of tab navigation
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.defaultValue] - Default selected tab
 * @param {string} [props.value] - Controlled selected tab value
 * @param {Function} [props.onValueChange] - Callback when tab changes
 * @param {React.ReactNode} props.children - Tab elements
 * @returns {React.JSX.Element} Tabs component
 */
function Tabs({ className, defaultValue, value, onValueChange, children, ...props }: ITabsProps) {
  const [selectedTab, setSelectedTab] = useState(value || defaultValue || "");

  useEffect(() => {
    if (value !== undefined) {
      setSelectedTab(value);
    }
  }, [value]);

  const handleTabChange = useCallback(
    (newValue: string) => {
      if (value === undefined) {
        setSelectedTab(newValue);
      }
      onValueChange?.(newValue);
    },
    [value, onValueChange]
  );

  return (
    <div
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      role="tablist"
      {...props}
    >
      <TabsContext.Provider value={{ selectedTab, setSelectedTab: handleTabChange }}>
        {children}
      </TabsContext.Provider>
    </div>
  );
}

/**
 * Props for the TabsList component
 */
interface ITabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

/**
 * Container for tab triggers
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Tab trigger elements
 * @returns {React.JSX.Element} TabsList component
 */
function TabsList({ className, children, ...props }: ITabsListProps) {
  return (
    <div
      data-slot="tabs-list"
      role="tablist"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Props for the TabsTrigger component
 */
interface ITabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  value: string;
  disabled?: boolean;
  children: ReactNode;
}

/**
 * Button that selects a tab when clicked
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} props.value - Value of the tab
 * @param {boolean} [props.disabled] - Whether the tab is disabled
 * @param {React.ReactNode} props.children - Tab content
 * @returns {React.JSX.Element} TabsTrigger component
 */
function TabsTrigger({ className, value, disabled, children, ...props }: ITabsTriggerProps) {
  const { selectedTab, setSelectedTab } = useContext(TabsContext);
  const isActive = selectedTab === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? "active" : "inactive"}
      disabled={disabled}
      data-slot="tabs-trigger"
      onClick={() => setSelectedTab(value)}
      className={cn(
        "data-[state=active]:bg-background focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * Props for the TabsContent component
 */
interface ITabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
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
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes to apply to the content panel
 * @param {string} props.value - Value of the tab that controls this content
 * @param {React.ReactNode} props.children - Content to display when this tab is active
 * @param {Object} [props...rest] - Additional props to pass to the div element
 * @returns {JSX.Element|null} The tab content when active, or null when inactive
 */
function TabsContent({ className, value, children, ...props }: ITabsContentProps) {
  const { selectedTab } = useContext(TabsContext);
  const isSelected = selectedTab === value;

  if (!isSelected) return null;

  return (
    <div
      role="tabpanel"
      data-state={isSelected ? "active" : "inactive"}
      data-slot="tabs-content"
      aria-label={`Tab content for ${value}`}
      className={cn("flex-1 outline-none", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
