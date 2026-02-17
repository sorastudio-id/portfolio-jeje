"use client";

import { useFadeIn } from "@/hooks/useScrollEffects";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function FadeIn({ children, className = "", stagger = false }: FadeInProps) {
  const ref = useFadeIn(0.1);

  return (
    <div
      ref={ref}
      className={`${stagger ? "stagger-children" : "fade-in"} ${className}`}
    >
      {children}
    </div>
  );
}
