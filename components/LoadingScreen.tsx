"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after logo animation completes
    const timer = setTimeout(() => setFadeOut(true), 1600);
    // Remove from DOM after fade completes
    const remove = setTimeout(() => setVisible(false), 2200);
    return () => {
      clearTimeout(timer);
      clearTimeout(remove);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-beige)] transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}
      aria-hidden="true"
    >
      <div className="text-center animate-[logoIn_0.8s_ease-out_forwards]">
        <span className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] tracking-tight">
          jeje
        </span>
        <span className="text-4xl md:text-5xl font-extrabold text-[var(--color-accent)] animate-[dotBounce_0.5s_ease-out_0.6s_forwards] opacity-0">
          .
        </span>
      </div>

      <style jsx>{`
        @keyframes logoIn {
          0% { opacity: 0; transform: scale(0.8) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes dotBounce {
          0% { opacity: 0; transform: translateY(-8px); }
          60% { opacity: 1; transform: translateY(2px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
