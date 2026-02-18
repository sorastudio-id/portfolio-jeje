"use client";

import { useState, useEffect, useCallback } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  deleteSpeed?: number;
  pauseAfterType?: number;
  pauseAfterDelete?: number;
}

export default function TypingText({
  text,
  className = "",
  speed = 80,
  delay = 2200,
  deleteSpeed = 40,
  pauseAfterType = 2000,
  pauseAfterDelete = 500,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "waiting">("typing");

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const tick = useCallback(() => {
    if (!started) return;

    switch (phase) {
      case "typing":
        if (displayed.length < text.length) {
          setDisplayed(text.slice(0, displayed.length + 1));
        } else {
          setPhase("pausing");
        }
        break;
      case "deleting":
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
        } else {
          setPhase("waiting");
        }
        break;
      default:
        break;
    }
  }, [started, phase, displayed, text]);

  useEffect(() => {
    if (!started) return;

    let timer: ReturnType<typeof setTimeout>;

    switch (phase) {
      case "typing":
        timer = setTimeout(tick, speed);
        break;
      case "pausing":
        timer = setTimeout(() => setPhase("deleting"), pauseAfterType);
        break;
      case "deleting":
        timer = setTimeout(tick, deleteSpeed);
        break;
      case "waiting":
        timer = setTimeout(() => {
          setPhase("typing");
        }, pauseAfterDelete);
        break;
    }

    return () => clearTimeout(timer);
  }, [started, phase, displayed, tick, speed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

  if (!started) return <span className={className}>&nbsp;</span>;

  return (
    <span className={className}>
      {displayed}
      <span className="inline-block w-[2px] h-[1em] bg-(--color-primary) ml-0.5 animate-[blink_0.7s_step-end_infinite] align-text-bottom" />
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
