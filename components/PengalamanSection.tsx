import SkeletonImage from "./SkeletonImage";
import PaperCard from "./PaperCard";

interface PengalamanItem {
  tahun: string;
  judul: string;
  organisasi: string;
  deskripsi: string;
  tags: string[];
  foto?: string;
  fotoAlt?: string;
  fotoPosition?: string; // CSS object-position value e.g. "center 75%"
}

const pengalamanData: PengalamanItem[] = [
  {
    tahun: "Feb 2025",
    judul: "Peserta Sekolah Duta Maritim Indonesia",
    organisasi: "ASPEKSINDO",
    deskripsi:
      "Mewakili Sumatera Barat dalam program SDMI 2025. Mengikuti kurikulum tematik maritim nasional, pelatihan kepemimpinan, kunjungan ke Museum Bahari Jakarta, dan sesi advokasi isu kelautan.",
    tags: ["Maritim", "Kepemimpinan", "Nasional"],
    foto: "/assets/sdmi-staircase.jpg",
    fotoAlt: "Jelita di venue resmi SDMI 2025",
    fotoPosition: "center 80%",
  },
  {
    tahun: "2025",
    judul: "Peserta LKMM-TD",
    organisasi: "BEM KM PNP",
    deskripsi:
      "Mengasah jiwa kepemimpinan, manajemen, dan integritas. Berlatih menjadi pemimpin yang berdampak dan berkontribusi aktif dalam kegiatan Latihan Kepemimpinan Manajemen Mahasiswa Tingkat Dasar.",
    tags: ["Kepemimpinan", "Manajemen"],
  },
  {
    tahun: "Jul 2025",
    judul: "Juara 2 Duta GenRe Kabupaten Padang Pariaman",
    organisasi: "BKKBN — Generasi Berencana",
    deskripsi:
      "Meraih posisi runner-up dalam Grand Final Pemilihan Duta GenRe Kabupaten Padang Pariaman 2025. Berkompetisi dengan 24 peserta terbaik usia 16-21 tahun.",
    tags: ["Prestasi", "GenRe", "Pemuda"],
    foto: "/assets/genre-sash.jpg",
    fotoAlt: "Jelita mengenakan selempang Juara 2 Duta GenRe Padang Pariaman 2025",
    fotoPosition: "center 60%",
  },
  {
    tahun: "2025",
    judul: "Kunjungan Museum Bahari Jakarta",
    organisasi: "Program SDMI 2025",
    deskripsi:
      "Memperdalam pengetahuan tentang sejarah dan kekayaan maritim Indonesia melalui kunjungan langsung ke Museum Bahari dalam rangkaian kegiatan SDMI.",
    tags: ["Edukasi", "Sejarah"],
    foto: "/assets/museum-bahari.jpg",
    fotoAlt: "Jelita di Museum Bahari bersama instalasi seni maritim",
    fotoPosition: "center 40%",
  },
  {
    tahun: "2025",
    judul: "Kunjungan Monumen Pancasila Sakti",
    organisasi: "Program SDMI 2025",
    deskripsi:
      "Merefleksikan perjuangan dan pengorbanan pahlawan bangsa. Memperkuat pemahaman tentang nilai-nilai kebangsaan dan pentingnya menjaga keutuhan NKRI.",
    tags: ["Nasionalisme", "Sejarah"],
  },
  {
    tahun: "2024 - Sekarang",
    judul: "Content Creator — Makeup & Hijab",
    organisasi: "@jelita_anggel | @jejelyy0",
    deskripsi:
      "Menghasilkan konten kreatif seputar tutorial makeup, hijab styling, dan lifestyle. Membangun komunitas pengikut di Instagram (8.600+ followers) dan TikTok.",
    tags: ["Content Creator", "Beauty", "Sosmed"],
  },
];

const tagColors: Record<string, string> = {
  Maritim: "bg-[#e3f2fd] text-[#1565c0]",
  Kepemimpinan: "bg-[#fff3e0] text-[#e65100]",
  Manajemen: "bg-[#eceff1] text-[#455a64]",
  Nasional: "bg-[#fce4ec] text-[#c62828]",
  Prestasi: "bg-[#fff9c4] text-[#f57f17]",
  GenRe: "bg-[#e8f5e9] text-[#2e7d32]",
  Pemuda: "bg-[#f3e5f5] text-[#7b1fa2]",
  Edukasi: "bg-[#e0f7fa] text-[#00695c]",
  Sejarah: "bg-[#e8eaf6] text-[#283593]",
  Nasionalisme: "bg-[#fce4ec] text-[#c62828]",
  "Content Creator": "bg-[#f3e5f5] text-[#7b1fa2]",
  Beauty: "bg-[#fce4ec] text-[#c62828]",
  Sosmed: "bg-[#e3f2fd] text-[#1565c0]",
};

function PhotoCard({ item, rotate }: { item: PengalamanItem; rotate: number }) {
  return (
    <PaperCard rotate={rotate} className="p-0 overflow-hidden group">
      {/* Photo Header */}
      {item.foto && (
        <div className="relative w-full h-52 overflow-hidden">
          <SkeletonImage
            src={item.foto}
            alt={item.fotoAlt || item.judul}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ objectPosition: item.fotoPosition || "center" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          {/* Date Badge on photo */}
          <div className="absolute bottom-3 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-[var(--color-primary)] text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
              {item.tahun}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-bold text-[var(--color-text)] mb-1 leading-snug">
          {item.judul}
        </h3>
        <p className="text-sm font-medium text-[var(--color-primary)] mb-2">
          {item.organisasi}
        </p>
        <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-3">
          {item.deskripsi}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className={`${tagColors[tag] || "bg-gray-100 text-gray-600"} text-xs font-semibold px-2.5 py-0.5 rounded-full`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </PaperCard>
  );
}

function TextCard({ item, rotate }: { item: PengalamanItem; rotate: number }) {
  return (
    <PaperCard rotate={rotate} className="p-5 group">
      {/* Date Badge */}
      <div className="mb-3">
        <span className="bg-[var(--color-primary)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {item.tahun}
        </span>
      </div>

      <h3 className="text-base font-bold text-[var(--color-text)] mb-1 leading-snug">
        {item.judul}
      </h3>
      <p className="text-sm font-medium text-[var(--color-primary)] mb-2">
        {item.organisasi}
      </p>
      <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-3">
        {item.deskripsi}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className={`${tagColors[tag] || "bg-gray-100 text-gray-600"} text-xs font-semibold px-2.5 py-0.5 rounded-full`}
          >
            {tag}
          </span>
        ))}
      </div>
    </PaperCard>
  );
}

export default function PengalamanSection() {
  // Separate cards with photos (top row, 3 columns) from text-only cards (bottom row, 2 columns)
  const photoCards = pengalamanData.filter((item) => item.foto);
  const textCards = pengalamanData.filter((item) => !item.foto);

  return (
    <section id="pengalaman" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-[var(--color-accent)] px-4 py-1.5 inline-block rotate-1 shadow-sm">
            <span className="text-sm font-bold text-[var(--color-text)] uppercase tracking-wider">
              📂 Pengalaman
            </span>
          </div>
          <div className="flex-1 h-[2px] bg-[var(--color-beige-dark)]" />
        </div>

        {/* Photo Cards — 3 column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {photoCards.map((item, index) => (
            <PhotoCard
              key={`photo-${index}`}
              item={item}
              rotate={(index % 3 - 1) * 0.6}
            />
          ))}
        </div>

        {/* Text-only Cards — 2 column grid */}
        <div className="grid sm:grid-cols-2 gap-6 place-items-center">
          {textCards.map((item, index) => {
             const isLastOdd = index === textCards.length - 1 && textCards.length % 2 !== 0;
             return (
              <div key={`text-${index}`} className={`w-full ${isLastOdd ? "sm:col-span-2 sm:w-1/2" : ""}`}>
                <TextCard
                  item={item}
                  rotate={(index % 2 === 0 ? 1 : -1) * 0.8}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
