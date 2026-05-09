import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const leftNav = [
  { to: "/", label: "Home" },
  { to: "/solucoes", label: "Soluções" },
  { to: "/crescimento", label: "Crescimento" },
  { to: "/irpf", label: "IRPF" },
];
const rightNav = [
  { to: "/conteudos", label: "Conteúdos" },
  { to: "/mais-que-contabilidade", label: "Nossa História" },
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
      <div
        className={`mx-auto max-w-[1280px] px-4 sm:px-6 transition-all duration-500 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`relative flex items-center justify-between gap-6 rounded-full px-4 sm:px-6 py-1.5 transition-all duration-500 ${
            scrolled ? "glass shadow-[0_8px_40px_-20px_rgba(0,229,241,0.25)]" : "bg-transparent border border-transparent"
          }`}
        >
          {/* Left nav */}
          <nav className="hidden lg:flex items-center gap-7 flex-1">
            {leftNav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-foreground/80 hover:text-[color:var(--orange-premium)] transition-colors"
                activeProps={{ className: "text-[color:var(--neon)]" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Logo center — overflows the bar without shrinking */}
          <Link to="/" aria-label="Expert Contabilidade — Home" className="absolute left-1/2 top-1/2 flex items-center justify-center shrink-0 pointer-events-auto" style={{ transform: "translate(-50%, -50%)" }}>
            <img
              src={logo}
              alt="Expert Contabilidade"
              loading="eager"
              decoding="async"
              className={`transition-all duration-500 w-auto drop-shadow-[0_4px_20px_rgba(0,229,241,0.25)] ${scrolled ? "h-20 sm:h-24 md:h-[8.5rem]" : "h-24 sm:h-28 md:h-[12rem]"}`}
            />
          </Link>

          {/* Right nav + socials */}
          <div className="hidden lg:flex items-center gap-7 flex-1 justify-end">
            {rightNav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-foreground/80 hover:text-[color:var(--orange-premium)] transition-colors"
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
              <MessageCircle size={18} />
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
                <a href="https://wa.me/5547992373196" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <MessageCircle size={18} />
                </a>
                <a href="https://instagram.com/expert.contabilidade" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
