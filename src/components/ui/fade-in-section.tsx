"use client";

import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface FadeInSectionProps {
  children: ReactNode;
}

export function FadeInSection({ children }: FadeInSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    // Trigger a bit earlier in the scroll, which helps on smaller mobile viewports
    threshold: 0,
    rootMargin: "0px 0px -20% 0px",
  });

  return (
    <div
      ref={ref}
      className={`fade-in-section ${inView ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
}
