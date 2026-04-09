"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode, useMemo, useState } from "react";

export type TabGridTab = {
  id: string;
  label: string;
  panel: ReactNode;
};

export type TabGridProps = {
  tabs: TabGridTab[];
  /** Used for `aria-controls` / `id` on tabs and panels. */
  idPrefix: string;
  /** `aria-label` on the tablist */
  ariaLabel: string;
  /** Initial selected tab; falls back to first tab if missing or invalid. */
  defaultTabId?: string;
  className?: string;
};

export function TabGrid({
  tabs,
  idPrefix,
  ariaLabel,
  defaultTabId,
  className,
}: Readonly<TabGridProps>) {
  const initialId = useMemo(() => {
    const first = tabs[0]?.id;
    if (!first) return "";
    if (defaultTabId && tabs.some((t) => t.id === defaultTabId)) {
      return defaultTabId;
    }
    return first;
  }, [tabs, defaultTabId]);

  const [activeTabId, setActiveTabId] = useState(initialId);

  if (tabs.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <div
        className="flex flex-wrap justify-center gap-4"
        role="tablist"
        aria-label={ariaLabel}
      >
        {tabs.map((tab) => {
          const selected = activeTabId === tab.id;
          return (
            <Button
              key={tab.id}
              type="button"
              role="tab"
              id={`${idPrefix}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${idPrefix}-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              variant={selected ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveTabId(tab.id)}
              className={cn("button-text", !selected && "text-foreground")}
            >
              {tab.label}
            </Button>
          );
        })}
      </div>

      {/* Match tallest tab (videos: aspect-video + title row) so switching tabs does not shift layout */}
      <div className="mt-8 min-h-[294px]">
        {tabs.map((tab) =>
          activeTabId === tab.id ? (
            <div
              key={tab.id}
              id={`${idPrefix}-panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`${idPrefix}-tab-${tab.id}`}
              className="animate-in fade-in duration-200"
            >
              {tab.panel}
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
}
