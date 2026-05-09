import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useReveal } from "@/lib/reveal";

export function PageShell({ children, flush = false }: { children: ReactNode; flush?: boolean }) {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 ${flush ? "" : "pt-20 sm:pt-24 md:pt-28"}`}>{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--petrol)]/30 via-transparent to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[color:var(--neon)]/10 blur-3xl" />
      </div>
      <div className="container-tight py-20 md:py-28 reveal">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-4 text-4xl md:text-6xl font-medium text-gradient max-w-4xl leading-[1.15] pb-1">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
        )}
        <div className="mt-8 h-px w-24 bg-[color:var(--orange-premium)]" />
      </div>
    </section>
  );
}
