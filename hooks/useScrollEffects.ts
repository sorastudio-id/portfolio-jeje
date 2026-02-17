"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Hook to observe elements entering the viewport and trigger fade-in animation.
 * Adds the `.visible` class when the element is in view.
 */
export function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * Hook to track the currently active section based on scroll position.
 * Returns the ID of the section currently in view.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState("");

  const handleScroll = useCallback(() => {
    // Use getBoundingClientRect for accurate position regardless of nesting
    let currentId = sectionIds[0] || "";

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        // Section is considered active if its top is above the threshold
        if (rect.top <= 150) {
          currentId = id;
        }
      }
    }
    setActiveId(currentId);
  }, [sectionIds]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return activeId;
}
