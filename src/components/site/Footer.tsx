import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">
      <div className="divider-orange" />
      <div className="container-tight py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={logo} alt="Expert Contabilidade" className="h-20 w-auto mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Estratégia, tecnologia e atendimento próximo para empresas que querem crescer com segurança.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-[color:var(--neon)] mb-4">Navegar</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><Link to="/" className="hover:text-[color:var(--orange-premium)]">Home</Link></li>
            <li><Link to="/solucoes" className="hover:text-[color:var(--orange-premium)]">Soluções Estratégicas</Link></li>
            <li><Link to="/crescimento" className="hover:text-[color:var(--orange-premium)]">Crescimento Empresarial</Link></li>
            <li><Link to="/irpf" className="hover:text-[color:var(--orange-premium)]">IRPF</Link></li>
            <li><Link to="/conteudos" className="hover:text-[color:var(--orange-premium)]">Conteúdos Inteligentes</Link></li>
            <li><Link to="/mais-que-contabilidade" className="hover:text-[color:var(--orange-premium)]">Nossa História</Link></li>
            <li><Link to="/contato" className="hover:text-[color:var(--orange-premium)]">Fale com Especialistas</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-[color:var(--neon)] mb-4">Contato</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="flex gap-2">
              <Phone size={14} className="mt-1 text-[color:var(--orange-premium)] shrink-0" />
              <span>47 99237 3196</span>
            </li>
            <li className="flex gap-2">
              <Mail size={14} className="mt-1 text-[color:var(--orange-premium)] shrink-0" />
              <span className="break-all">contador.expert01@gmail.com</span>
            </li>
            <li className="flex gap-2">
              <MapPin size={14} className="mt-1 text-[color:var(--orange-premium)] shrink-0" />
              <span>Av. Pref. Alberto Natalino Miquelute, 8239 sala 04, Itinga, Araquari SC</span>
            </li>
            <li className="flex gap-2">
              <Clock size={14} className="mt-1 text-[color:var(--orange-premium)] shrink-0" />
              <div className="flex flex-col">
                <span className="font-medium text-foreground/90">Horário de Atendimento</span>
                <span>Seg a sex, 08h às 12h e 13h às 17h30</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-[color:var(--neon)] mb-4">Conecte-se</h4>
          <div className="flex gap-3 mb-6">
            <a href="https://wa.me/5547992373196" target="_blank" rel="noreferrer" aria-label="WhatsApp"
               className="w-10 h-10 rounded-full glass-soft flex items-center justify-center hover:text-[color:var(--orange-premium)] transition">
              <svg viewBox="0 0 448 512" width="18" height="18" fill="currentColor" className="mt-0.5">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </a>
            <a href="https://instagram.com/expert.contabilidade" target="_blank" rel="noreferrer" aria-label="Instagram"
               className="w-10 h-10 rounded-full glass-soft flex items-center justify-center hover:text-[color:var(--orange-premium)] transition">
              <Instagram size={16} />
            </a>
            <a href="https://www.facebook.com/Expert.contabill" target="_blank" rel="noreferrer" aria-label="Facebook"
               className="w-10 h-10 rounded-full glass-soft flex items-center justify-center hover:text-[color:var(--orange-premium)] transition">
              <Facebook size={16} />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">CNPJ 41.780.585/0001-97</p>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-tight py-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Expert Contabilidade. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-4 md:gap-5 justify-center">
            <Link to="/lgpd" className="hover:text-[color:var(--orange-premium)] transition-colors">LGPD</Link>
            <Link to="/politica-de-privacidade" className="hover:text-[color:var(--orange-premium)] transition-colors">Política de Privacidade</Link>
            <Link to="/termos-de-uso" className="hover:text-[color:var(--orange-premium)] transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
