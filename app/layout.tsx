import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://porto-jeje.vercel.app";
const SITE_NAME = "Jelita Frizyllia Adrieni — Portfolio";
const SITE_DESCRIPTION =
  "Portfolio Jelita Frizyllia Adrieni. Mahasiswi Teknik Mesin Politeknik Negeri Padang, Duta Maritim Indonesia 2025, Juara 2 Duta GenRe Padang Pariaman, Content Creator Makeup & Hijab.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | Jelita Frizyllia Adrieni",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Jelita Frizyllia Adrieni",
    "Jeje",
    "Portfolio",
    "Teknik Mesin",
    "Mechanical Design Engineering",
    "Politeknik Negeri Padang",
    "PNP",
    "Duta Maritim Indonesia",
    "SDMI 2025",
    "Duta GenRe",
    "Padang Pariaman",
    "Content Creator",
    "Makeup",
    "Hijab Styling",
    "Sumatera Barat",
    "Future Educator",
    "Youth Empowerment",
  ],
  authors: [{ name: "Jelita Frizyllia Adrieni" }],
  creator: "Jelita Frizyllia Adrieni",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/assets/profile.jpg",
        width: 800,
        height: 800,
        alt: "Jelita Frizyllia Adrieni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/assets/profile.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jelita Frizyllia Adrieni",
              alternateName: "Jeje",
              url: SITE_URL,
              image: `${SITE_URL}/assets/profile.jpg`,
              description: SITE_DESCRIPTION,
              jobTitle: "Mechanical Design Engineering Student",
              worksFor: {
                "@type": "EducationalOrganization",
                name: "Politeknik Negeri Padang",
              },
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "SMAN 1 Enam Lingkung",
                },
              ],
              knowsAbout: [
                "Mechanical Design Engineering",
                "Content Creation",
                "Makeup Artistry",
                "Hijab Styling",
                "Public Speaking",
                "Youth Empowerment",
              ],
              award: [
                "Peserta Sekolah Duta Maritim Indonesia 2025",
                "Juara 2 Duta GenRe Kabupaten Padang Pariaman 2025",
              ],
              address: {
                "@type": "PostalAddress",
                addressRegion: "Sumatera Barat",
                addressCountry: "ID",
              },
              sameAs: [
                "https://instagram.com/jelita_anggel",
                "https://tiktok.com/@jejelyy0",
                "https://id.linkedin.com/in/jelita-frizyllia-adrieni-6849a42b2",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} font-[family-name:var(--font-poppins)] antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
