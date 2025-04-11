"use client";

import {
  useCallback,
  useContext,
  createContext,
  useState,
  useEffect,
} from "react";

import PropTypes from "prop-types";

import { cn } from "@/lib/utils";

const TabsContext = createContext({
  selectedTab: "",
  setSelectedTab: () => {},
});

/**
 * Tabs component that manages the state of tab navigation
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.defaultValue] - Default selected tab
 * @param {string} [props.value] - Controlled selected tab value
 * @param {Function} [props.onValueChange] - Callback when tab changes
 * @param {React.ReactNode} props.children - Tab elements
 * @returns {JSX.Element} Tabs component
 */
function Tabs({
  className,
  defaultValue,
  value,
  onValueChange,
  children,
  ...props
}) {
  const [selectedTab, setSelectedTab] = useState(value || defaultValue || "");

  useEffect(() => {
    if (value !== undefined) {
      setSelectedTab(value);
    }
  }, [value]);

  const handleTabChange = useCallback(
    (newValue) => {
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
      <TabsContext.Provider
        value={{ selectedTab, setSelectedTab: handleTabChange }}
      >
        {children}
      </TabsContext.Provider>
    </div>
  );
}

Tabs.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onValueChange: PropTypes.func,
  children: PropTypes.node.isRequired,
};

/**
 * Container for tab triggers
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Tab trigger elements
 * @returns {JSX.Element} TabsList component
 */
function TabsList({ className, children, ...props }) {
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

TabsList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

/**
 * Button that selects a tab when clicked
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} props.value - Value of the tab
 * @param {boolean} [props.disabled] - Whether the tab is disabled
 * @param {React.ReactNode} props.children - Tab content
 * @returns {JSX.Element} TabsTrigger component
 */
function TabsTrigger({ className, value, disabled, children, ...props }) {
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

TabsTrigger.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

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
function TabsContent({ className, value, children, ...props }) {
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

TabsContent.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
