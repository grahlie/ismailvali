"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function ScrollRevealNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("hero");
      if (!hero) {
        setVisible(true);
        return;
      }
      const { bottom } = hero.getBoundingClientRect();
      setVisible(bottom <= 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-30 flex h-16 items-center justify-between border-b bg-background/80 px-6 transition-[transform,opacity] duration-300 ease-out",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      )}
      aria-hidden={!visible}
    >
      <div className="text-xl font-bold tracking-wider">ISMAIL VALI</div>
    </nav>
  );
}
