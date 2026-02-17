interface StickyNoteProps {
  children: React.ReactNode;
  color?: "yellow" | "blue" | "pink" | "green";
  rotate?: number;
  className?: string;
}

const colorMap = {
  yellow: "bg-[#fff9c4] border-[#ffd54f]",
  blue: "bg-[#e3f2fd] border-[#90caf9]",
  pink: "bg-[#fce4ec] border-[#f48fb1]",
  green: "bg-[#e8f5e9] border-[#a5d6a7]",
};

export default function StickyNote({
  children,
  color = "yellow",
  rotate = 0,
  className = "",
}: StickyNoteProps) {
  return (
    <div
      className={`relative p-4 border-l-4 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${colorMap[color]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}
