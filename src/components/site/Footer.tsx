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
              <span>Seg a sex, 08h às 12h e 13h às 17h30</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-[color:var(--neon)] mb-4">Conecte-se</h4>
          <div className="flex gap-3 mb-6">
            <a href="https://wa.me/5547992373196" target="_blank" rel="noreferrer" aria-label="WhatsApp"
               className="w-10 h-10 rounded-full glass-soft flex items-center justify-center hover:text-[color:var(--orange-premium)] transition">
              <MessageCircle size={16} />
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
          <div className="flex gap-5">
            <a href="#" className="hover:text-[color:var(--orange-premium)]">LGPD</a>
            <a href="#" className="hover:text-[color:var(--orange-premium)]">Política de Privacidade</a>
            <a href="#" className="hover:text-[color:var(--orange-premium)]">Política de Cookies</a>
            <a href="#" className="hover:text-[color:var(--orange-premium)]">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
