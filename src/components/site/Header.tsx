import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Menu, X, Lock } from "lucide-react";
import logo from "@/assets/logo.png";

const leftNav = [
  { to: "/", label: "Home" },
  { to: "/solucoes", label: "Soluções" },
  { to: "/crescimento", label: "Crescimento" },
  { to: "/irpf", label: "IRPF" },
  { to: "/suporte-mei", label: "Suporte MEI" },
];
const rightNav = [
  { to: "/conteudos", label: "Conteúdos" },
  { to: "/mais-que-contabilidade", label: "Nossa História" },
  { to: "/talentos", label: "Talentos" },
  { to: "/contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className={`mx-auto max-w-[1280px] px-4 sm:px-6 transition-all duration-500`}>
        <div
          className={`relative flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center justify-between gap-4 lg:gap-10 xl:gap-16 rounded-full px-4 sm:px-6 py-1.5 transition-all duration-500 ${
            scrolled ? "glass shadow-[0_8px_40px_-20px_rgba(0,229,241,0.25)]" : "bg-transparent border border-transparent"
          }`}
        >
          {/* Left nav */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 justify-self-start w-full">
            {leftNav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-xs xl:text-sm font-medium text-foreground/80 hover:text-[color:var(--orange-premium)] transition-colors whitespace-nowrap"
                activeProps={{ className: "text-[color:var(--neon)]" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Logo center */}
          <Link to="/" aria-label="Expert Contabilidade — Home" className="flex items-center justify-center shrink-0 pointer-events-auto justify-self-center">
            <img
              src={logo}
              alt="Expert Contabilidade"
              loading="eager"
              decoding="async"
              className={`transition-all duration-500 w-auto drop-shadow-[0_4px_20px_rgba(0,229,241,0.25)] ${scrolled ? "h-14 sm:h-16 md:h-20" : "h-16 sm:h-20 md:h-[7rem]"}`}
            />
          </Link>

          {/* Right nav + socials */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-7 justify-self-end justify-end w-full">
            {rightNav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-xs xl:text-sm font-medium text-foreground/80 hover:text-[color:var(--orange-premium)] transition-colors whitespace-nowrap"
                activeProps={{ className: "text-[color:var(--neon)]" }}
              >
                {n.label}
              </Link>
            ))}
            <span className="h-5 w-px bg-white/15" />
            <a
              href="https://wa.me/5547992373196"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-foreground/70 hover:text-[color:var(--neon)] transition-colors"
            >
              <svg viewBox="0 0 448 512" width="18" height="18" fill="currentColor" className="mt-0.5">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/expert.contabilidade"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-foreground/70 hover:text-[color:var(--neon)] transition-colors"
            >
              <Instagram size={18} />
            </a>
            <Link
              to="/login"
              aria-label="Área do Colaborador"
              className="text-foreground/40 hover:text-[color:var(--neon)] transition-colors"
              title="Área do Colaborador"
            >
              <Lock size={16} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden ml-auto text-foreground"
            onClick={() => setOpen((s) => !s)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-5 animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col gap-3">
              {[...leftNav, ...rightNav].map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="text-base text-foreground/85 hover:text-[color:var(--neon)]"
                >
                  {n.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-3 border-t border-white/10">
                <a className="text-foreground/70" href="https://wa.me/5547992373196" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <svg viewBox="0 0 448 512" width="18" height="18" fill="currentColor">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/expert.contabilidade" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <Link to="/login" aria-label="Área do Colaborador" onClick={() => setOpen(false)}>
                  <Lock size={16} className="text-foreground/40" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
