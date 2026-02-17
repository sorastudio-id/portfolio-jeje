import PaperCard from "./PaperCard";
import StickyNote from "./StickyNote";
import SkeletonImage from "./SkeletonImage";
import TypingText from "./TypingText";

export default function HeroSection() {
  return (
    <section
      id="tentang"
      className="min-h-screen pt-28 pb-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-[var(--color-accent)] px-4 py-1.5 inline-block -rotate-1 shadow-sm">
            <span className="text-sm font-bold text-[var(--color-text)] uppercase tracking-wider">
              📌 Tentang Saya
            </span>
          </div>
          <div className="flex-1 h-[2px] bg-[var(--color-beige-dark)]" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: ID Card + Sticky Notes */}
          <div className="relative">
            {/* ID Card */}
            <PaperCard rotate={-2} className="p-6 max-w-sm mx-auto" decoration="tape">
              <div className="mt-4">
                {/* Profile Photo */}
                <div className="w-32 h-32 mx-auto rounded-full shadow-lg mb-4 overflow-hidden relative">
                  <SkeletonImage
                    src="/assets/profile.jpg"
                    alt="Jelita Frizyllia Adrieni"
                    fill
                    className="object-cover object-top"
                    sizes="128px"
                    priority
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-[var(--color-text)]">
                    Jelita Frizyllia Adrieni
                  </h3>
                  <p className="text-sm text-[var(--color-text-light)] mt-1">
                    Mahasiswi Teknik Mesin — PNP
                  </p>
                  <div className="w-full h-[1px] bg-[var(--color-beige-dark)] my-4" />
                  <div className="text-left space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--color-primary)]">📍</span>
                      <span>Sumatera Barat, Indonesia</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--color-primary)]">🎓</span>
                      <span>Politeknik Negeri Padang</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--color-primary)]">📸</span>
                      <span>@jelita_anggel</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--color-primary)]">🎵</span>
                      <span>@jejelyy0</span>
                    </div>
                  </div>
                </div>
              </div>
            </PaperCard>

            {/* Sticky notes around the card */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <StickyNote color="yellow" rotate={-3} className="w-36">
                <p className="text-xs font-semibold">🏅 Duta Maritim Indonesia 2025</p>
              </StickyNote>
              <StickyNote color="blue" rotate={2} className="w-36">
                <p className="text-xs font-semibold">🏆 Juara 2 Duta GenRe 2025</p>
              </StickyNote>
              <StickyNote color="pink" rotate={-1} className="w-36">
                <p className="text-xs font-semibold">💄 Beauty Content Creator</p>
              </StickyNote>
              <StickyNote color="green" rotate={1.5} className="w-36">
                <p className="text-xs font-semibold">⚙️ Mechanical Engineering</p>
              </StickyNote>
            </div>
          </div>

          {/* Right: Bio Text */}
          <div className="flex flex-col justify-center">
            <PaperCard rotate={1} className="p-8" decoration="clip">
              <div className="mt-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] leading-tight mb-2">
                  <TypingText text="Halo, Saya Jeje." speed={70} delay={2000} />
                </h1>
                <h2 className="text-xl text-[var(--color-text-light)] font-medium mb-6">
                  Mechanical Design Engineering Student · Future Educator
                </h2>

                <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
                  Saya mahasiswi tahun pertama Teknik Mesin di Politeknik Negeri Padang yang
                  memiliki passion dalam menggabungkan teknologi, pendidikan, dan kreativitas
                  untuk menciptakan dampak nyata. Sebagai Duta GenRe, content creator, dan
                  pegiat komunitas, saya fokus memberdayakan generasi muda melalui inovasi,
                  kesadaran, dan perubahan positif.
                </p>

                <p className="text-[var(--color-text-light)] leading-relaxed mb-8">
                  Saya percaya bahwa engineering bukan hanya tentang mesin — tapi tentang
                  membangun solusi yang melayani manusia dan lingkungan. Saat ini, saya
                  mengembangkan kemampuan di bidang desain mekanik, komunikasi, dan
                  kepemimpinan untuk menjadi pendidik masa depan yang menginspirasi
                  orang lain untuk bermimpi, bertindak, dan berinovasi.
                </p>

                {/* Labels */}
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[var(--color-green-tag)]/15 text-[var(--color-green-tag)] px-4 py-1.5 rounded-full text-xs font-semibold border border-[var(--color-green-tag)]/30">
                    ⚙️ Engineering
                  </span>
                  <span className="bg-[var(--color-orange-tag)]/15 text-[var(--color-orange-tag)] px-4 py-1.5 rounded-full text-xs font-semibold border border-[var(--color-orange-tag)]/30">
                    � Future Educator
                  </span>
                  <span className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-4 py-1.5 rounded-full text-xs font-semibold border border-[var(--color-primary)]/20">
                    🌱 Sustainability
                  </span>
                  <span className="bg-[var(--color-pink-tag)]/10 text-[var(--color-pink-tag)] px-4 py-1.5 rounded-full text-xs font-semibold border border-[var(--color-pink-tag)]/20">
                    💡 Youth Empowerment
                  </span>
                </div>
              </div>
            </PaperCard>
          </div>
        </div>
      </div>
    </section>
  );
}
