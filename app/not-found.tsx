import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-(--color-accent) p-6">
      <div className="text-center max-w-md">
        {/* Decorative paper card */}
        <div
          className="bg-(--color-paper) rounded-lg shadow-lg p-10 relative"
          style={{
            transform: "rotate(-1deg)",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
          }}
        >
          {/* Tape decoration */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-200/70 rounded-sm rotate-2" />

          {/* 404 number */}
          <h1
            className="text-8xl font-bold text-(--color-primary) mb-4"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            404
          </h1>

          {/* Divider */}
          <div className="w-16 h-1 bg-(--color-primary) mx-auto mb-6 rounded-full" />

          {/* Message */}
          <h2 className="text-xl font-semibold text-(--color-text) mb-2">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-(--color-text-light) mb-8 text-sm leading-relaxed">
            Sepertinya halaman yang kamu cari sudah dipindahkan atau tidak ada.
            Yuk kembali ke beranda! ✨
          </p>

          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-(--color-primary) text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-md"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Kembali ke Beranda
          </Link>
        </div>

        {/* Floating sticky note */}
        <div
          className="mt-6 inline-block bg-yellow-100 px-4 py-2 rounded shadow text-xs text-(--color-text-light)"
          style={{ transform: "rotate(3deg)" }}
        >
          📝 Cek URL-nya lagi ya!
        </div>
      </div>
    </div>
  );
}
