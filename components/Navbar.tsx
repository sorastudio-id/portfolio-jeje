"use client";

import { useState, useEffect } from "react";
import { useActiveSection } from "@/hooks/useScrollEffects";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Pendidikan", href: "#pendidikan" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Kontak", href: "#kontak" },
];

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTopBtn(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when scrolling
  useEffect(() => {
    if (!isOpen) return;
    const close = () => setIsOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300
        ${scrolled ? "bg-[var(--color-beige)]/90 shadow-sm border-b border-[var(--color-beige-dark)]" : "bg-transparent border-b border-transparent"}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#beranda"
            className="text-xl font-bold text-[var(--color-primary)] tracking-tight"
          >
            jeje<span className="text-[var(--color-accent)]">.</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-300 relative
                      after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[var(--color-accent)] after:transition-all after:duration-300
                      ${isActive
                        ? "text-[var(--color-primary)] after:w-full"
                        : "text-[var(--color-text-light)] hover:text-[var(--color-primary)] after:w-0 hover:after:w-full"
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}
        >
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium transition-colors duration-300
                      ${isActive
                        ? "text-[var(--color-primary)] font-bold"
                        : "text-[var(--color-text-light)] hover:text-[var(--color-primary)]"
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[var(--color-primary)] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[var(--color-primary-light)] hover:shadow-xl hover:-translate-y-0.5 active:scale-95
          ${showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        aria-label="Kembali ke atas"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
