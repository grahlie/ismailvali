"use client";

import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface FadeInSectionProps {
  children: ReactNode;
}

export function FadeInSection({ children }: FadeInSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
