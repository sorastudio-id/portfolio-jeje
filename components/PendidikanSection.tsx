import SkeletonImage from "./SkeletonImage";
import PaperCard from "./PaperCard";

const pendidikanData = [
  {
    tahun: "2025 - Sekarang",
    judul: "Politeknik Negeri Padang",
    institusi: "D4 Teknik Mesin — Mechanical Design Engineering",
    deskripsi:
      "Menempuh pendidikan tinggi di bidang teknik mesin dengan fokus pada desain mekanik. Mengembangkan kemampuan di bidang teknologi, komunikasi, dan kepemimpinan.",
  },
  {
    tahun: "2025",
    judul: "🏆 Juara 2 Duta GenRe Kab. Padang Pariaman",
    institusi: "BKKBN — Generasi Berencana",
    deskripsi:
      "Meraih posisi runner-up dalam Grand Final Pemilihan Duta GenRe Kabupaten Padang Pariaman 2025. Berkompetisi dengan 24 peserta terbaik usia 16-21 tahun.",
  },
  {
    tahun: "2023",
    judul: "📝 Peserta UMC UNP 2023",
    institusi: "Universitas Negeri Padang — Tingkat SMA",
    deskripsi:
      "Mengikuti kompetisi Universitas Mathematics Competition (UMC) yang diselenggarakan oleh Universitas Negeri Padang di tingkat SMA.",
  },
  {
    tahun: "2022 - 2025",
    judul: "SMAN 1 Enam Lingkung",
    institusi: "Kabupaten Padang Pariaman, Sumatera Barat",
    deskripsi:
      "Menempuh pendidikan menengah atas sambil aktif mengembangkan kemampuan di bidang konten kreatif, public speaking, dan kepemimpinan pemuda.",
  }
];

export default function PendidikanSection() {
  return (
    <section id="pendidikan" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-[var(--color-accent)] px-4 py-1.5 inline-block rotate-1 shadow-sm">
            <span className="text-sm font-bold text-[var(--color-text)] uppercase tracking-wider">
              📋 Pendidikan & Prestasi
            </span>
          </div>
          <div className="flex-1 h-[2px] bg-[var(--color-beige-dark)]" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Photo Card */}
          <div className="hidden md:block">
            <PaperCard rotate={-3} className="overflow-hidden" decoration="tape">
              <div className="relative w-full h-80">
                <SkeletonImage
                  src="/assets/pendidikan-library.jpg"
                  alt="Jelita di perpustakaan"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-xs text-[var(--color-text-light)] italic">
                  📚 Selalu haus akan ilmu pengetahuan
                </p>
              </div>
            </PaperCard>
          </div>

          {/* Right: Clipboard Container */}
          <div className="md:col-span-2 relative">
            {/* Clipboard top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-24 h-8 bg-[#b0a090] rounded-t-lg z-10 shadow-md" />
            <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-16 h-5 bg-[#8a7a6a] rounded-b-md z-20 shadow-sm" />

            <PaperCard className="p-8 pt-12" hover={false}>
              <div className="space-y-0">
                {pendidikanData.map((item, index) => (
                  <div key={index} className="relative flex gap-6">
                    {/* Timeline line */}
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-[var(--color-primary)] border-4 border-[var(--color-paper)] shadow-md z-10" />
                      {index < pendidikanData.length - 1 && (
                        <div className="w-[2px] flex-1 bg-[var(--color-beige-dark)]" />
                      )}
                    </div>

                    {/* Content Card */}
                    <div className="pb-8 flex-1">
                      <PaperCard
                        rotate={index % 2 === 0 ? 0.5 : -0.5}
                        className="p-5 bg-[var(--color-paper-alt)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      >
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="bg-[var(--color-primary)] text-white text-xs font-bold px-3 py-1 rounded-full">
                            {item.tahun}
                          </span>
                          <h3 className="text-lg font-bold text-[var(--color-text)]">
                            {item.judul}
                          </h3>
                        </div>
                        <p className="text-sm font-medium text-[var(--color-primary)] mb-2">
                          {item.institusi}
                        </p>
                        <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
                          {item.deskripsi}
                        </p>
                      </PaperCard>
                    </div>
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
