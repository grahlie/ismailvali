"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

const PREVIEW_COUNT = 6;

type ExpandableItemsProps<T> = {
  items: T[];
  moreLabel: string;
  fewerLabel: string;
  extraOffsetClass?: string;
  children: (visibleItems: T[]) => ReactNode;
};

export function ExpandableItems<T>({
  items,
  moreLabel,
  fewerLabel,
  extraOffsetClass = "pt-8",
  children,
}: ExpandableItemsProps<T>) {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const sectionRef = useRef<HTMLDivElement>(null);
  const extraItems = items.slice(PREVIEW_COUNT);
  const canExpand = extraItems.length > 0;

  return (
    <div>
      <div ref={sectionRef} id={listId}>
        {children(items.slice(0, PREVIEW_COUNT))}
        {canExpand && (
          <div
            className={`expandable-extra ${expanded ? "is-open" : ""}`}
            aria-hidden={!expanded}
            inert={!expanded ? true : undefined}
          >
            <div className="expandable-extra-inner">
              <div className={`expandable-extra-items ${extraOffsetClass}`}>
                {children(extraItems)}
              </div>
            </div>
          </div>
        )}
      </div>
      {canExpand && (
        <div className="flex justify-center mt-8">
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={listId}
            onClick={() => {
              setExpanded((current) => {
                if (current) {
                  sectionRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
                return !current;
              });
            }}
            className="inline-flex flex-col items-center gap-1 text-base font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer"
          >
            <span>{expanded ? fewerLabel : moreLabel}</span>
            <ChevronDown
              className={`size-5 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
              aria-hidden
            />
          </button>
        </div>
      )}
    </div>
  );
}
