import PaperCard from "./PaperCard";
import Image from "next/image";

const skills = [
  { nama: "Public Speaking", emoji: "🎤", color: "bg-[#fff9c4] text-[#f57f17] border-[#ffd54f]" },
  { nama: "Content Creation", emoji: "📱", color: "bg-[#f3e5f5] text-[#7b1fa2] border-[#ce93d8]" },
  { nama: "Makeup Artistry", emoji: "💄", color: "bg-[#fce4ec] text-[#c62828] border-[#f48fb1]" },
  { nama: "Hijab Styling", emoji: "🧕", color: "bg-[#e0f7fa] text-[#00695c] border-[#80deea]" },
  { nama: "Kepemimpinan", emoji: "👑", color: "bg-[#fff3e0] text-[#e65100] border-[#ffcc80]" },
  { nama: "Video Editing", emoji: "🎬", color: "bg-[#e8eaf6] text-[#283593] border-[#9fa8da]" },
  { nama: "Komunikasi", emoji: "💬", color: "bg-[#e3f2fd] text-[#1565c0] border-[#90caf9]" },
  { nama: "CAD/CAM", emoji: "⚙️", color: "bg-[#e8f5e9] text-[#2e7d32] border-[#a5d6a7]" },
];

const softwareTools = [
  { nama: "CapCut", color: "bg-[#000000]", image: "/assets/capcut.jpeg" },
  { nama: "Canva", color: "bg-[#00c4cc]", image: "/assets/canva.jpeg" },
  {
    nama: "Instagram",
    color: "bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]",
    svg: (
      <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  { nama: "TikTok", color: "bg-[#000000]", image: "/assets/tiktok.avif" },
  {
    nama: "CAD 3D",
    color: "bg-[#2e7d32]",
    emoji: "⚙️",
  },
  { nama: "MS Office", color: "bg-[#d83b01]", image: "/assets/msoffice.png" },
];

export default function SkillSection() {
  return (
    <section id="keahlian" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-[var(--color-accent)] px-4 py-1.5 inline-block -rotate-1 shadow-sm">
            <span className="text-sm font-bold text-[var(--color-text)] uppercase tracking-wider">
              🎨 Keahlian
            </span>
          </div>
          <div className="flex-1 h-[2px] bg-[var(--color-beige-dark)]" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Skills */}
          <div>
            <PaperCard rotate={-0.5} className="p-8" decoration="pin">
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-6 mt-2">
                Kemampuan Saya
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`${skill.color} border px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default`}
                    style={{ transform: `rotate(${(index % 3 - 1) * 1.5}deg)` }}
                  >
                    <span className="mr-1.5">{skill.emoji}</span>
                    {skill.nama}
                  </div>
                ))}
              </div>
            </PaperCard>
          </div>

          {/* Software */}
          <div>
            <PaperCard rotate={0.5} className="p-8" decoration="tape">
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-6 mt-4">
                Software & Tools
              </h3>
              <div className="grid grid-cols-3 gap-5">
                {softwareTools.map((sw, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[var(--color-paper-alt)] border border-[var(--color-beige-dark)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[var(--color-primary)]/30 group cursor-default"
                  >
                    <div
                      className={`${sw.color} w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:scale-110 transition-transform duration-300 overflow-hidden relative`}
                    >
                      {sw.svg ? (
                        sw.svg
                      ) : sw.emoji ? (
                        <span className="text-2xl">{sw.emoji}</span>
                      ) : sw.image ? (
                        <div className="relative w-full h-full p-1.5">
                           <Image 
                             src={sw.image} 
                             alt={sw.nama} 
                             fill 
                             sizes="48px"
                             className="object-contain" 
                           />
                        </div>
                      ) : null}
                    </div>
                    <span className="text-xs font-semibold text-[var(--color-text)] text-center leading-tight">
                      {sw.nama}
                    </span>
                  </div>
                ))}
              </div>
            </PaperCard>
          </div>
        </div>
      </div>
    </section>
  );
}
