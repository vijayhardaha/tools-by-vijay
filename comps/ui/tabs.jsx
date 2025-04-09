"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const TabsContext = React.createContext({
  selectedTab: "",
  setSelectedTab: () => {},
});

function Tabs({
  className,
  defaultValue,
  value,
  onValueChange,
  children,
  ...props
}) {
  const [selectedTab, setSelectedTab] = React.useState(
    value || defaultValue || ""
  );

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedTab(value);
    }
  }, [value]);

  const handleTabChange = React.useCallback(
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

function TabsTrigger({ className, value, disabled, children, ...props }) {
  const { selectedTab, setSelectedTab } = React.useContext(TabsContext);
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
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function TabsContent({ className, value, children, ...props }) {
  const { selectedTab } = React.useContext(TabsContext);
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
