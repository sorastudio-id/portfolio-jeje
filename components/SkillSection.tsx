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

export default function SkillSection() {
  return (
    <section id="keahlian" className="py-20 px-6">
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
                {[
                  { nama: "CapCut", icon: "Cc", color: "bg-[#000000]", image: "/assets/capcut.jpeg" },
                  { nama: "Canva", icon: "Cv", color: "bg-[#00c4cc]", image: "/assets/canva.jpeg" },
                  { nama: "Instagram", icon: "Ig", color: "bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]", image: "/assets/Instagram_Symbol_Alternative_1.png" },
                  { nama: "TikTok", icon: "Tt", color: "bg-[#000000]", image: "/assets/TikTok_Logo_Alternative_1.png" },
                  { nama: "CAD 3D", icon: "3D", color: "bg-[#2e7d32]", image: "/assets/autocad-logo-png_seeklogo-482394.png" },
                  { nama: "MS Office", icon: "Ms", color: "bg-[#d83b01]", image: "/assets/msoffice.png" },
                ].map((sw, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[var(--color-paper-alt)] border border-[var(--color-beige-dark)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[var(--color-primary)]/30 group cursor-default"
                  >
                    <div
                      className={`${sw.color} w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:scale-110 transition-transform duration-300 overflow-hidden relative`}
                    >
                      {sw.image ? (
                        <div className="relative w-full h-full p-1.5">
                           <Image 
                             src={sw.image} 
                             alt={sw.nama} 
                             fill 
                             sizes="48px"
                             className="object-contain" 
                           />
                        </div>
                      ) : (
                        sw.icon
                      )}
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
