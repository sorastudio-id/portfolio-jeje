import PaperCard from "./PaperCard";

export default function QuoteSection() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <PaperCard rotate={0.5} className="p-8 md:p-10 text-center" decoration="tape">
          <div className="mt-4">
            <span className="text-5xl md:text-6xl text-[var(--color-accent)] leading-none font-serif">&ldquo;</span>
            <blockquote className="text-lg md:text-xl text-[var(--color-text)] leading-relaxed font-medium -mt-4 mb-4 italic">
              Engineering bukan hanya tentang mesin — tapi tentang membangun
              solusi yang melayani manusia dan lingkungan.
            </blockquote>
            <div className="w-12 h-[2px] bg-[var(--color-accent)] mx-auto mb-3" />
            <cite className="text-sm text-[var(--color-text-light)] not-italic font-medium">
              — Jelita Frizyllia Adrieni
            </cite>
          </div>
        </PaperCard>
      </div>
    </section>
  );
}
