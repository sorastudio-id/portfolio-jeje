interface PaperCardProps {
  children: React.ReactNode;
  rotate?: number;
  className?: string;
  hover?: boolean;
  decoration?: "pin" | "tape" | "clip" | "none";
}

export default function PaperCard({
  children,
  rotate = 0,
  className = "",
  hover = true,
  decoration = "none",
}: PaperCardProps) {
  return (
    <div
      className={`relative bg-[var(--color-paper)] rounded-sm shadow-md paper-texture
        ${hover ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1" : ""}
        ${decoration === "pin" ? "pin" : ""}
        ${decoration === "tape" ? "tape" : ""}
        ${decoration === "clip" ? "clip" : ""}
        ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}
