import PaperCard from "./PaperCard";
import StickyNote from "./StickyNote";

export default function Footer() {
  return (
    <footer id="kontak" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-[var(--color-accent)] px-4 py-1.5 inline-block -rotate-1 shadow-sm">
            <span className="text-sm font-bold text-[var(--color-text)] uppercase tracking-wider">
              📬 Kontak
            </span>
          </div>
          <div className="flex-1 h-[2px] bg-[var(--color-beige-dark)]" />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <StickyNote color="yellow" rotate={-2}>
            <p className="font-bold text-sm mb-1">📸 Instagram</p>
            <a
              href="https://instagram.com/jelita_anggel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] text-sm font-medium hover:underline"
            >
              @jelita_anggel
            </a>
          </StickyNote>

          <StickyNote color="blue" rotate={1}>
            <p className="font-bold text-sm mb-1">🎵 TikTok</p>
            <a
              href="https://tiktok.com/@jejelyy0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] text-sm font-medium hover:underline"
            >
              @jejelyy0
            </a>
          </StickyNote>

          <StickyNote color="green" rotate={-1}>
            <p className="font-bold text-sm mb-1">💼 LinkedIn</p>
            <a
              href="https://id.linkedin.com/in/jelita-frizyllia-adrieni-6849a42b2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] text-sm font-medium hover:underline"
            >
              Jelita Frizyllia
            </a>
          </StickyNote>

          <StickyNote color="pink" rotate={2}>
            <p className="font-bold text-sm mb-1">💌 Bisnis & Kerjasama</p>
            <p className="text-sm text-[var(--color-text-light)]">
              DM Instagram untuk kolaborasi dan partnership.
            </p>
          </StickyNote>
        </div>

        {/* Bottom Footer */}
        <PaperCard className="p-6 text-center" hover={false} rotate={0}>
          <p className="text-sm text-[var(--color-text-light)]">
            © 2025 Jelita Frizyllia Adrieni. Dibuat dengan ❤️ dari Padang Pariaman.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://instagram.com/jelita_anggel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@jejelyy0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .54.04.8.1v-3.5a6.37 6.37 0 00-.8-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.14a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.57z" />
              </svg>
            </a>
            <a
              href="https://id.linkedin.com/in/jelita-frizyllia-adrieni-6849a42b2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </PaperCard>
      </div>
    </footer>
  );
}
